import { RootAction } from 'fm3/actions';
import { clearMap, selectFeature, setTool } from 'fm3/actions/mainActions';
import { mapsDataLoaded } from 'fm3/actions/mapsActions';
import { ObjectsResult, objectsSetResult } from 'fm3/actions/objectsActions';
import { createReducer } from 'typesafe-actions';

export interface ObjectsState {
  objects: ObjectsResult[];
  selectedId: number | undefined;
}

const initialState: ObjectsState = {
  objects: [],
  selectedId: undefined,
};

export const objectsReducer = createReducer<ObjectsState, RootAction>(
  initialState,
)
  .handleAction(clearMap, () => initialState)
  .handleAction(setTool, (state, action) => ({
    ...state,
    selectedId:
      action.payload === 'route-planner' || action.payload === 'track-viewer'
        ? undefined
        : state.selectedId,
  }))
  .handleAction(selectFeature, (state, action) => ({
    ...state,
    selectedId:
      action.payload?.type === 'objects' ? action.payload.id : undefined,
  }))
  .handleAction(objectsSetResult, (state, action) => {
    const newIds = new Set(action.payload.map((obj) => obj.id));
    return {
      ...state,
      objects: [
        ...state.objects.filter((obj) => !newIds.has(obj.id)),
        ...action.payload,
      ],
    };
  })
  .handleAction(mapsDataLoaded, (state, action) => {
    return {
      ...state,
      objects: action.payload.objects ?? initialState.objects,
    };
  });
