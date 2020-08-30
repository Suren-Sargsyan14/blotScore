import {
  SET_WHICH_TEAM,
  SET_CARD_COUNT,
  SET_SELECTED_LESS_VALUE,
  SET_SELECTED_BLOT_VALUE,
  SET_SELECTED_FIFTY_VALUE,
  SET_SELECTED_4PAPER_VALUE,
  SET_SELECTED_HUNDRED_VALUE,
} from '../Actions/actionTypes';

const initialState = {
  whichTeam: 0,
  cardCount: [8, 8],
  selectedLessValue: {
    count: 0,
    team: null
  },
  selectedBlotValue: {
    count: 0,
    team: null
  },
  selectedFiftyValue: {
    count: 0,
    team: null
  },
  selected4PaperValue: {
    count: [],
    team: null
  },
  selectedHundredValue: {
    count: 0,
    team: null
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_WHICH_TEAM: {
      return {
        ...state,
        whichTeam: payload,
      }
    }
    case SET_CARD_COUNT: {
      return {
        ...state,
        cardCount: payload,
      }
    }
    case SET_SELECTED_LESS_VALUE: {
      return {
        ...state,
        selectedLessValue: payload,
      }
    }
    case SET_SELECTED_BLOT_VALUE: {
      return {
        ...state,
        selectedBlotValue: payload,
      }
    }
    case SET_SELECTED_FIFTY_VALUE: {
      return {
        ...state,
        selectedFiftyValue: payload,
      }
    }
    case SET_SELECTED_4PAPER_VALUE: {
      return {
        ...state,
        selected4PaperValue: payload,
      }
    }
    case SET_SELECTED_HUNDRED_VALUE: {
      return {
        ...state,
        selectedHundredValue: payload,
      }
    }
    default:
      return state;
  }
};
