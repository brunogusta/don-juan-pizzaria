export const Types = {
  SIZE_VALUE: 'totalValue/SIZE_VALUE',
  TYPE_VALUE: 'totalValue/TYPE_VALUE',
  TYPE_RESET: 'totalValue/TYPE_RESET',
  LAST_SIZE: 'totalValue/LAST_SIZE',
};


const INITIAL_VALUES = {
  values: [],
  lastSize: [],
};

export default function totalValues(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case Types.SIZE_VALUE:
      return { ...state, values: [action.payload] };
    case Types.TYPE_VALUE:
      return { ...state, values: [...state.values, ...action.payload] };
    case Types.TYPE_RESET:
      return { ...state, values: [action.payload] };
    case Types.LAST_SIZE:
      return { ...state, lastSize: [action.payload] };
    default:
      return state;
  }
}
