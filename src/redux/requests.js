// Ducks: Redux Reducer Bundles
// https://github.com/erikras/ducks-modular-redux
// A proposal for bundling reducers, action types and actions when using Redux

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const { REACT_APP_API_URL = "http://localhost:8000/iecho" } = process.env;

// Actions
const SEND_TEXT_REQUEST = "SEND_TEXT_REQUEST";
const SEND_TEXT_SUCCESS = "SEND_TEXT_SUCCESS";
const SEND_TEXT_FAILURE = "SEND_TEXT_FAILURE";

// Action creators
const sendTextRequest = () => {
  return {
    type: SEND_TEXT_REQUEST,
  };
};
const sendTextSuccess = (payload) => {
  return {
    type: SEND_TEXT_SUCCESS,
    payload,
  };
};
const sendTextFailure = (payload) => {
  return {
    type: SEND_TEXT_FAILURE,
    payload,
  };
};

// Thunk
export const sendText = (text) => {
  return (dispatch) => {
    dispatch(sendTextRequest());

    axios
      .get(`${REACT_APP_API_URL}?text=${text}`)
      .then((res) => {
        dispatch(
          sendTextSuccess({
            id: uuidv4(),
            datetime: new Date().toLocaleTimeString(),
            ...res.data,
          })
        );
      })
      .catch((err) => {
        dispatch(sendTextFailure(err.response?.data.error || err.message));
      });
  };
};

const initialState = {
  isLoading: false,
  error: "",
  data: [],
};

// Reducer
export const requests = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TEXT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    case SEND_TEXT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [action.payload, ...state.data],
      };

    case SEND_TEXT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
