import { setActiveModal } from 'fm3/actions/mainActions';
import { FontAwesomeIcon } from 'fm3/components/FontAwesomeIcon';
import { useMessages } from 'fm3/l10nInjector';
import { RootState } from 'fm3/storeCreator';
import { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton } from './DeleteButton';

export function DrawingPointSelection(): ReactElement | null {
  const dispatch = useDispatch();

  const m = useMessages();

  const selectedId = useSelector(
    (state: RootState) => state.drawingPoints.selectedId,
  );

  return selectedId === undefined ? null : (
    <>
      <span className="align-self-center ml-1 mr-2">
        <FontAwesomeIcon icon="mouse-pointer" />
        {'/ '}
        <FontAwesomeIcon icon="map-marker" />
        <span className="d-none d-sm-inline"> {m?.selections.drawPoints}</span>
      </span>
      <Button
        className="ml-1"
        variant="secondary"
        onClick={() => dispatch(setActiveModal('edit-label'))}
      >
        <FontAwesomeIcon icon="tag" />
        <span className="d-none d-sm-inline"> {m?.drawing.modify}</span>
      </Button>
      <DeleteButton />
    </>
  );
}
