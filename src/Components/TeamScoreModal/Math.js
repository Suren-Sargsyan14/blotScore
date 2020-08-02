export default ({
  modalVisible, setModalVisible,
  whichTeam,
  teamVs, setTeamVs,
  teamScoreOut1, teamScoreOut2,
  inputValue, setInputValue
}) => {

  let scoreOut1 = teamScoreOut1.reduce((p, v) => p + v, 0),
    scoreOut2 = teamScoreOut2.reduce((p, v) => p + v, 0),
    score = teamVs[teamVs.length - 1].x,
    suit = teamVs[teamVs.length - 1].suit,
    quanche = teamVs[teamVs.length - 1].quanche,
    sharp = teamVs[teamVs.length - 1].sharp,
    max = inputValue === "0" ? 25 : 16;
  inputValue = 0 + inputValue;


  let lose = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + max + scoreOut1 / 10 + scoreOut2 / 10 + (quanche ? parseInt(score) : (sharp ? (parseInt(score) * 3) : 0)),
    teamReverse = (parseInt(inputValue[inputValue.length - 1]) > 5) ? (parseInt(inputValue.slice(0, -1)) + 1) : inputValue.slice(0, -1),
    v = 162 - inputValue + "",
    teamRight = (+v[v.length - 1] > 5) ? (+v.slice(0, -1) + 1) : v.slice(0, -1);
  let newTeamScore1, newTeamScore2;
  if (whichTeam !== parseInt(teamVs[teamVs.length - 1].team)) {
    if (teamVs[teamVs.length - 1].kaput) {
      if (!parseInt(teamVs[teamVs.length - 1].team)) {
        if (inputValue !== "00") {
          newTeamScore1 = 0;
          newTeamScore2 = lose;
        } else {
          newTeamScore2 = ((quanche || sharp) ? 0 : scoreOut2 / 10);
          newTeamScore1 = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + 25 + scoreOut1 / 10 + (quanche ? (parseInt(score) + scoreOut2 / 10) : (sharp ? (parseInt(score) * 3 + scoreOut2 / 10) : 0));
        }
      } else {
        if (inputValue !== "00") {
          newTeamScore2 = 0;
          newTeamScore1 = lose;
        } else {
          newTeamScore2 = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + 25 + scoreOut2 / 10 + (quanche ? (parseInt(score) + scoreOut1 / 10) : (sharp ? (parseInt(score) * 3 + scoreOut1 / 10) : 0));
          newTeamScore1 = ((quanche || sharp) ? 0 : scoreOut1 / 10);
        }
      }
      teamVs[teamVs.length - 1].teamScore1 = newTeamScore1;
      teamVs[teamVs.length - 1].teamScore2 = newTeamScore2;
      setTeamVs([...teamVs, {team: -1, x: 0, suit: -1, kaput: false, quanche: false, sharp: false, teamScore1: 0, teamScore2: 0 }]);
      setModalVisible(!modalVisible);
      setInputValue("");
      return;
    }
    if (!parseInt(teamVs[teamVs.length - 1].team)) {
      if ((162 - inputValue + scoreOut1) < (score * 10)) {
        newTeamScore1 = 0;
        newTeamScore2 = lose;
      } else {
        let inpValue = teamReverse;

        newTeamScore1 = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + (max - inpValue) + scoreOut1 / 10 + (quanche ? (parseInt(score) + scoreOut2 / 10 + parseInt(inpValue)) : (sharp ? (parseInt(score) * 3 + scoreOut2 / 10 + parseInt(inpValue)) : 0));
        newTeamScore2 = ((quanche || sharp) ? 0 : (parseInt(inpValue) + scoreOut2 / 10));
      }
    } else {
      if ((162 - inputValue + scoreOut2) < (score * 10)) {
        newTeamScore2 = 0;
        newTeamScore1 = lose;
      } else {
        let inpValue = teamReverse;
        newTeamScore2 = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + (max - inpValue) + scoreOut2 / 10 + (quanche ? (parseInt(score) + scoreOut1 / 10 + parseInt(inpValue)) : (sharp ? (parseInt(score) * 3 + scoreOut1 / 10 + parseInt(inpValue)) : 0));
        newTeamScore1 = ((quanche || sharp) ? 0 : (parseInt(inpValue) + scoreOut1 / 10));
      }
    }
  } else {
    if (teamVs[teamVs.length - 1].kaput) {
      if (!parseInt(teamVs[teamVs.length - 1].team)) {
        if (inputValue !== "0162") {
          newTeamScore1 = 0;
          newTeamScore2 = lose;
        } else {
          newTeamScore1 = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + 25 + scoreOut1 / 10 + (quanche ? (parseInt(score) + scoreOut2 / 10) : (sharp ? (parseInt(score) * 3 + scoreOut2 / 10) : 0));
          newTeamScore2 = ((quanche || sharp) ? 0 : scoreOut2 / 10);
        }
      } else {
        if (inputValue !== "0162") {
          newTeamScore2 = 0;
          newTeamScore1 = lose;
        } else {
          newTeamScore2 = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + 25 + scoreOut2 / 10 + (quanche ? (parseInt(score) + scoreOut1 / 10) : (sharp ? (parseInt(score) * 3 + scoreOut1 / 10) : 0));
          newTeamScore1 = ((quanche || sharp) ? 0 : scoreOut1 / 10);
        }
      }
      teamVs[teamVs.length - 1].teamScore1 = newTeamScore1;
      teamVs[teamVs.length - 1].teamScore2 = newTeamScore2;
      setTeamVs([...teamVs, {team: -1, x: 0, suit: -1, kaput: false, quanche: false, sharp: false, teamScore1: 0, teamScore2: 0 }]);
      setModalVisible(!modalVisible);
      setInputValue("");
      return;
    }
    if (!parseInt(teamVs[teamVs.length - 1].team)) {
      if (parseInt(inputValue) + scoreOut1 < (score * 10)) {
        newTeamScore1 = 0;
        newTeamScore2 = lose;
      } else {
        let inpValue = teamRight;
        newTeamScore1 = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + (max - inpValue) + scoreOut1 / 10 + (quanche ? (parseInt(score) + scoreOut2 / 10 + parseInt(inpValue)) : (sharp ? (parseInt(score) * 3 + scoreOut2 / 10 + parseInt(inpValue)) : 0));
        newTeamScore2 = ((quanche || sharp) ? 0 : (parseInt(inpValue) + scoreOut2 / 10));
      }
    } else {
      if ((parseInt(inputValue) + scoreOut2) < (score * 10)) {
        newTeamScore2 = 0;
        newTeamScore1 = lose;
      } else {
        let inpValue = teamRight;
        newTeamScore2 = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + (max - inpValue) + scoreOut2 / 10 + (quanche ? (parseInt(score) + scoreOut1 / 10 + parseInt(inpValue)) : (sharp ? (parseInt(score) * 3 + scoreOut1 / 10 + parseInt(inpValue)) : 0));
        newTeamScore1 = ((quanche || sharp) ? 0 : (parseInt(inpValue) + scoreOut1 / 10));
      }
    }
  }
  teamVs[teamVs.length - 1].teamScore1 = newTeamScore1;
  teamVs[teamVs.length - 1].teamScore2 = newTeamScore2;
  setTeamVs([...teamVs, {team: -1, x: 0, suit: -1, kaput: false, quanche: false, sharp: false, teamScore1: 0, teamScore2: 0 }]);
  setModalVisible(!modalVisible);
  setInputValue("");
}
