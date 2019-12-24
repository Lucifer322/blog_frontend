import { GET_USER } from '../actions/types';

const initialState = {
  user: {}
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
