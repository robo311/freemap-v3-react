import { routePlannerPreventHint } from 'fm3/actions/routePlannerActions';
import { Processor } from 'fm3/middlewares/processorMiddleware';
import storage from 'local-storage-fallback';

export const routePlannerPreventHintProcssor: Processor = {
  actionCreator: routePlannerPreventHint,
  handle: async () => {
    storage.setItem('routePlannerPreventHint', '1');
  },
};
