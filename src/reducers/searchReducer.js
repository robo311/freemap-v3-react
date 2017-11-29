const initialState = {
  query: null,
  results: [],
  highlightedResult: null,
  selectedResult: null,
  inProgress: false,
};

export default function Search(state = initialState, action) {
  switch (action.type) {
    case 'CLEAR_MAP':
      return initialState;
    case 'SEARCH_SET_QUERY':
      return { ...state, query: action.payload, inProgress: true };
    case 'SEARCH_SET_RESULTS':
      return { ...state, results: action.payload, inProgress: false };
    case 'SEARCH_HIGHLIGHT_RESULT':
      return { ...state, highlightedResult: action.payload };
    case 'SEARCH_SELECT_RESULT':
      return { ...state, selectedResult: action.payload, highlightedResult: null };
    default:
      return state;
  }
}
