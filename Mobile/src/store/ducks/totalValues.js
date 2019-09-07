export const Types = {
  SIZE_VALUE: 'totalValue/SIZE_VALUE',
  TYPE_VALUE: 'totalValue/TYPE_VALUE',
  LAST_SIZE: 'totalValue/LAST_SIZE',
  CHANGE_VALUE: 'totalValue/CHANGE_VALUE',
  RESET_VALUES: 'totalValues/RESET_VALUES',
};


const INITIAL_VALUES = {
  values: ['0,00'],
  lastSize: [],
};

export default function totalValues(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case Types.SIZE_VALUE:
      return { ...state, values: [...action.payload] };
    case Types.TYPE_VALUE:
      return { ...state, values: [...state.values, action.payload] };
    case Types.CHANGE_VALUE:
      return { ...state, values: [...action.payload] };
    case Types.RESET_VALUES:
      return { values: ['0,00'], lastSize: [''] };
    case Types.LAST_SIZE:
      return { ...state, lastSize: [action.payload] };
    default:
      return state;
  }
}
