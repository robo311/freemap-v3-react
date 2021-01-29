import { useMessages } from 'fm3/l10nInjector';
import { RootState } from 'fm3/storeCreator';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { DeleteButton } from './DeleteButton';
import { FontAwesomeIcon } from './FontAwesomeIcon';

export function TrackingSelection(): ReactElement | false {
  const m = useMessages();

  const active = useSelector(
    (state: RootState) => state.tracking.selectedId !== undefined,
  );

  return (
    active && (
      <>
        <span className="align-self-center ml-1 mr-2">
          <FontAwesomeIcon icon="mouse-pointer" />
          {'/ '}
          <FontAwesomeIcon icon="bullseye" />
          <span className="d-none d-sm-inline"> {m?.selections.tracking}</span>
        </span>

        <DeleteButton />
      </>
    )
  );
}
