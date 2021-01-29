import { lineString } from '@turf/helpers';
import {
  elevationChartClose,
  elevationChartSetTrackGeojson,
} from 'fm3/actions/elevationChartActions';
import { setActiveModal } from 'fm3/actions/mainActions';
import { FontAwesomeIcon } from 'fm3/components/FontAwesomeIcon';
import { useMessages } from 'fm3/l10nInjector';
import { RootState } from 'fm3/storeCreator';
import { ReactElement, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton } from './DeleteButton';

export function DrawingLineSelection(): ReactElement {
  const dispatch = useDispatch();

  const m = useMessages();

  const selectedId = useSelector(
    (state: RootState) => state.drawingLines.selectedId,
  );

  const line = useSelector((state: RootState) =>
    selectedId === undefined ? undefined : state.drawingLines.lines[selectedId],
  );

  const elevationChartTrackGeojson = useSelector(
    (state: RootState) => state.elevationChart.trackGeojson,
  );

  const toggleElevationChart = useCallback(() => {
    // TODO to processor

    if (!line) {
      return;
    }

    if (elevationChartTrackGeojson) {
      dispatch(elevationChartClose());
    } else {
      dispatch(
        elevationChartSetTrackGeojson(
          lineString(line.points.map((p) => [p.lon, p.lat])),
        ),
      );
    }
  }, [line, elevationChartTrackGeojson, dispatch]);

  const isActive =
    (line?.type === 'line' && line.points.length > 1) ||
    (line?.type === 'polygon' && line.points.length > 2);

  return (
    <>
      {isActive && (
        <>
          <span className="align-self-center ml-1 mr-2">
            <FontAwesomeIcon icon="mouse-pointer" />
            {'/ '}
            <FontAwesomeIcon icon="arrows-h" />
            <span className="d-none d-sm-inline">
              {' '}
              {m?.selections.drawLines}
            </span>
          </span>
          <Button
            className="ml-1"
            variant="secondary"
            onClick={() => dispatch(setActiveModal('edit-label'))}
          >
            <FontAwesomeIcon icon="tag" />
            <span className="d-none d-sm-inline"> {m?.drawing.modify}</span>
          </Button>
        </>
      )}
      {line?.type === 'line' && line.points.length > 1 && (
        <Button
          className="ml-1"
          variant="secondary"
          active={elevationChartTrackGeojson !== null}
          onClick={toggleElevationChart}
        >
          <FontAwesomeIcon icon="bar-chart" />
          <span className="d-none d-sm-inline">
            {' '}
            {m?.general.elevationProfile}
          </span>
        </Button>
      )}
      {isActive && <DeleteButton />}
    </>
  );
}
