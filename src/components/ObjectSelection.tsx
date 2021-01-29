import { convertToDrawing } from 'fm3/actions/mainActions';
import { FontAwesomeIcon } from 'fm3/components/FontAwesomeIcon';
import { useMessages } from 'fm3/l10nInjector';
import { RootState } from 'fm3/storeCreator';
import { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton } from './DeleteButton';

export function ObjectSelection(): ReactElement | false {
  const dispatch = useDispatch();

  const m = useMessages();

  const active = useSelector(
    (state: RootState) => state.objects.selectedId !== undefined,
  );

  return (
    active && (
      <>
        <span className="align-self-center ml-1 mr-2">
          <FontAwesomeIcon icon="mouse-pointer" />
          {'/ '}
          <FontAwesomeIcon icon="map-marker" />
          <span className="d-none d-sm-inline"> {m?.selections.objects}</span>
        </span>

        <Button
          className="ml-1"
          variant="secondary"
          onClick={() => {
            dispatch(convertToDrawing(undefined));
          }}
          title={m?.general.convertToDrawing}
        >
          <FontAwesomeIcon icon="pencil" />
          <span className="d-none d-sm-inline">
            {' '}
            {m?.general.convertToDrawing}
          </span>
        </Button>
        <DeleteButton />
      </>
    )
  );
}
