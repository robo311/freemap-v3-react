// InfoBar.tsx
import { hideInfoBar } from '../actions/mainActions';
import { useAppSelector } from '../hooks/reduxSelectHook';
import { useMessages } from '../l10nInjector';
import { ReactElement, useEffect, useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export function InfoBar(): ReactElement | null {
  const m = useMessages();

  const dispatch = useDispatch();

  const [show, setShow] = useState(1);

  const hiddenInfoBars = useAppSelector((state) => state.main.hiddenInfoBars);

  // Use a prop or context to get the action type that triggers the rendering
  const actionType = 'SHOW_INFO_BAR'; // Replace with the actual action type

  useEffect(() => {
    // Handle the action type to set show to a truthy value
    if (actionType === 'SHOW_INFO_BAR') {
      setShow(1);
    }

    const ref = window.setInterval(
      () => setShow((s) => s + 1),
      60 * 10_000, // refresh every hour
    );

    return () => window.clearInterval(ref);
  }, [actionType]);

  if (!m || !show) {
    return null;
  }

  const { infoBars } = m.main;

  const ts = Date.now();

  const key = Object.keys(infoBars).find(
    (key) => ts - (hiddenInfoBars[key] ?? 0) > 24 * 60 * 60_000, // expire in a day
  );

  if (!key) {
    return null;
  }

  const InfoBarContent = infoBars[key];

  return (
    <div className="info-bar" data-testid="info-bar">
      <CloseButton
        onClick={() => {
          setShow(0);

          dispatch(hideInfoBar({ key, ts }));
        }}
      />
      <InfoBarContent />
    </div>
  );
}
