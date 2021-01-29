import { drawingLineAddPoint } from 'fm3/actions/drawingLineActions';
import { drawingPointMeasure } from 'fm3/actions/drawingPointActions';
import { RootState } from 'fm3/storeCreator';
import { LeafletMouseEvent } from 'leaflet';
import { useCallback } from 'react';
import { useMapEvent } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

export function DrawingLinesTool(): null {
  const tool = useSelector((state: RootState) => state.main.tool);

  const selectedId = useSelector(
    (state: RootState) => state.drawingLines.selectedId,
  );

  const line = useSelector((state: RootState) =>
    state.drawingLines.selectedId === undefined
      ? undefined
      : state.drawingLines.lines[state.drawingLines.selectedId],
  );

  const dispatch = useDispatch();

  const handleMapClick = useCallback(
    ({ latlng, originalEvent }: LeafletMouseEvent) => {
      if (
        line === undefined ||
        selectedId === undefined ||
        // see https://github.com/FreemapSlovakia/freemap-v3-react/issues/168
        window.preventMapClick ||
        !(
          originalEvent.target instanceof HTMLDivElement &&
          originalEvent.target.classList.contains('leaflet-container')
        )
      ) {
        return;
      }

      const pos = line.points.length;

      let id: number;

      if (pos === 0) {
        id = line.points.length ? line.points[pos].id - 1 : 0;
      } else if (pos === line.points.length) {
        id = line.points[pos - 1].id + 1;
      } else {
        id = (line.points[pos - 1].id + line.points[pos].id) / 2;
      }

      dispatch(
        drawingLineAddPoint({
          index: line.type === 'polygon' ? selectedId : undefined,
          point: { lat: latlng.lat, lon: latlng.lng, id },
          position: pos,
          type: tool === 'draw-lines' ? 'line' : 'polygon',
        }),
      );

      dispatch(drawingPointMeasure(true));
    },
    [line, dispatch, selectedId, tool],
  );

  useMapEvent('click', handleMapClick);

  return null;
}
