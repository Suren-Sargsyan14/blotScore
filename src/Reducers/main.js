import {
  SET_TEAM1,
  SET_TEAM2,
  SET_TEAM_VS,
  SET_WHICH_TEAM,
  SET_TEAM_SCORE_OUT1,
  SET_TEAM_SCORE_OUT2,
  SET_MODAL_X_VISIBLE,
  SET_MODAL_NAME_VISIBLE,
  SET_MODAL_SCORE_VISIBLE,
} from '../Actions/actionTypes';

const initialState = {
  whichTeam: 0,
  team1: "Մենք",
  team2: "Դուք",
  teamVs: [
    {
      x: 0,
      team: -1,
      suit: -1,
      kaput: false,
      sharp: false,
      teamScore1: 0,
      teamScore2: 0,
      quanche: false
    }
  ],
  teamScoreOut1: [],
  teamScoreOut2: [],
  modalNameVisible: false,
  modalScoreVisible: false,
  modalXVisible: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TEAM1: {
      return {
        ...state,
        team1: payload,
      }
    }
    case SET_TEAM2: {
      return {
        ...state,
        team2: payload,
      }
    }
    case SET_TEAM_VS: {
      return {
        ...state,
        teamVs: payload,
      }
    }
    case SET_WHICH_TEAM: {
      return {
        ...state,
        whichTeam: payload,
      }
    }
    case SET_TEAM_SCORE_OUT1: {
      return {
        ...state,
        teamScoreOut1: payload,
      }
    }
    case SET_TEAM_SCORE_OUT2: {
      return {
        ...state,
        teamScoreOut2: payload,
      }
    }
    case SET_MODAL_X_VISIBLE: {
      return {
        ...state,
        modalXVisible: payload,
      }
    }
    case SET_MODAL_NAME_VISIBLE: {
      return {
        ...state,
        modalNameVisible: payload,
      }
    }
    case SET_MODAL_SCORE_VISIBLE: {
      return {
        ...state,
        modalScoreVisible: payload,
      }
    }
    default:
      return state;
  }
};
