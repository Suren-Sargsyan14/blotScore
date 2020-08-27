import React from 'react';
import { connect } from 'react-redux';

import { setSelectedBlotValue } from '../../../../Actions/scoreOut';

import ScoreOutContainer from '../ScoreOutContainer';

const Content = ({
  whichTeam,
  selectedBlotValue,
  setSelectedBlotValue,
}) => (selectedBlotValue.team === whichTeam || selectedBlotValue.team === null) && (
  <ScoreOutContainer
    scoreOutCount={1}
    scoreOutName={"Բլոտ"}
    whichTeam={whichTeam}
    selectedValue={selectedBlotValue}
    setSelectedValue={setSelectedBlotValue}
  />
);

const mapStateToProps = ({ scoreOut: { whichTeam, selectedBlotValue } }) => ({
  whichTeam,
  selectedBlotValue,
});

const mapDispatchToProps = dispatch => ({
  setSelectedBlotValue: selectedBlotValue => dispatch(setSelectedBlotValue(selectedBlotValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
