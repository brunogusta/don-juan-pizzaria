export const Types = {
  USER_DATA: 'userPreferences/USER_DATA',
};


const INITIAL_VALUES = {
  data: {},
};

export default function userPreferences(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case Types.USER_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
}
