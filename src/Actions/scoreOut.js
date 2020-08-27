import {
  SET_WHICH_TEAM,
  SET_CARD_COUNT,
  SET_SELECTED_LESS_VALUE,
  SET_SELECTED_BLOT_VALUE,
  SET_SELECTED_FIFTY_VALUE,
  SET_SELECTED_4PAPER_VALUE,
  SET_SELECTED_HUNDRED_VALUE,
} from './actionTypes';

export const setWhichTeam = whichTeam => ({
  type: SET_WHICH_TEAM,
  payload: whichTeam,
});
export const setCardCount = cardCount => ({
  type: SET_CARD_COUNT,
  payload: cardCount,
});
export const setSelectedLessValue = selectedLessValue => ({
  type: SET_SELECTED_LESS_VALUE,
  payload: selectedLessValue,
});
export const setSelectedBlotValue = selectedBlotValue => ({
  type: SET_SELECTED_BLOT_VALUE,
  payload: selectedBlotValue,
});
export const setSelectedFiftyValue = selectedFiftyValue => ({
  type: SET_SELECTED_FIFTY_VALUE,
  payload: selectedFiftyValue,
});
export const setSelected4PaperValue = selected4PaperValue => ({
  type: SET_SELECTED_4PAPER_VALUE,
  payload: selected4PaperValue,
});
export const setSelectedHundredValue = selectedHundredValue => ({
  type: SET_SELECTED_HUNDRED_VALUE,
  payload: selectedHundredValue,
});
