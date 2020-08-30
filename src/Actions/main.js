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
} from './actionTypes';

export const setTeam1 = team1 => ({
  type: SET_TEAM1,
  payload: team1,
});
export const setTeam2 = team2 => ({
  type: SET_TEAM2,
  payload: team2,
});
export const setTeamVs = teamVs => ({
  type: SET_TEAM_VS,
  payload: teamVs,
});
export const setWhichTeam = whichTeam => ({
  type: SET_WHICH_TEAM,
  payload: whichTeam,
});
export const setTeamScoreOut1 = teamScoreOut1 => ({
  type: SET_TEAM_SCORE_OUT1,
  payload: teamScoreOut1,
});
export const setTeamScoreOut2 = teamScoreOut2 => ({
  type: SET_TEAM_SCORE_OUT2,
  payload: teamScoreOut2,
});
export const setModalXVisible = modalXVisible => ({
  type: SET_MODAL_X_VISIBLE,
  payload: modalXVisible,
});
export const setModalNameVisible = modalNameVisible => ({
  type: SET_MODAL_NAME_VISIBLE,
  payload: modalNameVisible,
});
export const setModalScoreVisible = modalScoreVisible => ({
  type: SET_MODAL_SCORE_VISIBLE,
  payload: modalScoreVisible,
});
