export default ({
  modalVisible,
  setModalVisible,
  setTeamScore1,
  setTeamScore2,
  teamScore1,
  teamScore2,
  whichTeam,
  teamVs,
  setTeamVs,
  teamScoreOut1,
  teamScoreOut2,
  setTeamScoreOut1,
  setTeamScoreOut2,
  inputValue,
  setInputValue
}) => {

  let scoreOut1 = teamScoreOut1.reduce((p, v) => p + v, 0),
    scoreOut2 = teamScoreOut2.reduce((p, v) => p + v, 0),
    score = teamVs[teamVs.length - 1].x,
    suit = teamVs[teamVs.length - 1].suit,
    quanche = teamVs[teamVs.length - 1].quanche,
    sharp = teamVs[teamVs.length - 1].sharp,
    max = inputValue === "0" ? 25 : 16;
  inputValue = 0 + inputValue;

  teamScore1.pop();
  teamScore2.pop();

  let lose = (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + max + scoreOut1 / 10 + scoreOut2 / 10 + (quanche ? parseInt(score) : (sharp ? (parseInt(score) * 3) : 0)),
    teamReverse = (parseInt(inputValue[inputValue.length - 1]) > 5) ? (parseInt(inputValue.slice(0, -1)) + 1) : inputValue.slice(0, -1),
    v = 162 - inputValue + "",
    teamRight = (+v[v.length - 1] > 5) ? (+v.slice(0, -1) + 1) : v.slice(0, -1);

  if (whichTeam !== parseInt(teamVs[teamVs.length - 1].team)) {
    if (teamVs[teamVs.length - 1].kaput) {
      if (!parseInt(teamVs[teamVs.length - 1].team)) {
        if (inputValue !== "00") {
          setTeamScore1([...teamScore1, 0, 0]);
          setTeamScore2([...teamScore2, lose, 0])
        } else {
          setTeamScore1([...teamScore1, (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + 25 + scoreOut1 / 10 + (quanche ? (parseInt(score) + scoreOut2 / 10) : (sharp ? (parseInt(score) * 3 + scoreOut2 / 10) : 0)), 0]);
          setTeamScore2([...teamScore2, ((quanche || sharp) ? 0 : scoreOut2 / 10), 0])
        }
      } else {
        if (inputValue !== "00") {
          setTeamScore2([...teamScore2, 0, 0]);
          setTeamScore1([...teamScore1, lose, 0])
        } else {
          setTeamScore2([...teamScore2, (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + 25 + scoreOut2 / 10 + (quanche ? (parseInt(score) + scoreOut1 / 10) : (sharp ? (parseInt(score) * 3 + scoreOut1 / 10) : 0)), 0]);
          setTeamScore1([...teamScore1, ((quanche || sharp) ? 0 : scoreOut1 / 10), 0])
        }
      }
      setTeamVs([...teamVs, {team: -1, x: 0, suit: -1}]);
      setModalVisible(!modalVisible);
      setTeamScoreOut1([]);
      setTeamScoreOut2([]);
      return;
    }
    if (!parseInt(teamVs[teamVs.length - 1].team)) {
      if ((162 - inputValue + scoreOut1) < (score * 10)) {
        setTeamScore1([...teamScore1, 0, 0]);
        setTeamScore2([...teamScore2, lose, 0])
      } else {
        let inpValue = teamReverse;
        setTeamScore1([...teamScore1, (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + (max - inpValue) + scoreOut1 / 10 + (quanche ? (parseInt(score) + scoreOut2 / 10 + parseInt(inpValue)) : (sharp ? (parseInt(score) * 3 + scoreOut2 / 10 + parseInt(inpValue)) : 0)), 0]);
        setTeamScore2([...teamScore2, ((quanche || sharp) ? 0 : (parseInt(inpValue) + scoreOut2 / 10)), 0])
      }
    } else {
      if ((162 - inputValue + scoreOut2) < (score * 10)) {
        setTeamScore2([...teamScore2, 0, 0]);
        setTeamScore1([...teamScore1, lose, 0])
      } else {
        let inpValue = teamReverse;
        setTeamScore2([...teamScore2, (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + (max - inpValue) + scoreOut2 / 10 + (quanche ? (parseInt(score) + scoreOut1 / 10 + parseInt(inpValue)) : (sharp ? (parseInt(score) * 3 + scoreOut1 / 10 + parseInt(inpValue)) : 0)), 0]);
        setTeamScore1([...teamScore1, ((quanche || sharp) ? 0 : (parseInt(inpValue) + scoreOut1 / 10)), 0])
      }
    }
  } else {
    if (teamVs[teamVs.length - 1].kaput) {
      if (!parseInt(teamVs[teamVs.length - 1].team)) {
        if (inputValue !== "0162") {
          setTeamScore1([...teamScore1, 0, 0]);
          setTeamScore2([...teamScore2, lose, 0])
        } else {
          setTeamScore1([...teamScore1, (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + 25 + scoreOut1 / 10 + (quanche ? (parseInt(score) + scoreOut2 / 10) : (sharp ? (parseInt(score) * 3 + scoreOut2 / 10) : 0)), 0]);
          setTeamScore2([...teamScore2, ((quanche || sharp) ? 0 : scoreOut2 / 10), 0])
        }
      } else {
        if (inputValue !== "0162") {
          setTeamScore2([...teamScore2, 0, 0]);
          setTeamScore1([...teamScore1, lose, 0])
        } else {
          setTeamScore2([...teamScore2, (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + 25 + scoreOut2 / 10 + (quanche ? (parseInt(score) + scoreOut1 / 10) : (sharp ? (parseInt(score) * 3 + scoreOut1 / 10) : 0)), 0]);
          setTeamScore1([...teamScore1, ((quanche || sharp) ? 0 : scoreOut1 / 10), 0])
        }
      }
      setTeamVs([...teamVs, {team: -1, x: 0, suit: -1}]);
      setModalVisible(!modalVisible);
      setTeamScoreOut1([]);
      setTeamScoreOut2([]);
      return;
    }
    if (!parseInt(teamVs[teamVs.length - 1].team)) {
      if (parseInt(inputValue) + scoreOut1 < (score * 10)) {
        setTeamScore1([...teamScore1, 0, 0]);
        setTeamScore2([...teamScore2, lose, 0])
      } else {
        let inpValue = teamRight;
        setTeamScore1([...teamScore1, (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + (max - inpValue) + scoreOut1 / 10 + (quanche ? (parseInt(score) + scoreOut2 / 10 + parseInt(inpValue)) : (sharp ? (parseInt(score) * 3 + scoreOut2 / 10 + parseInt(inpValue)) : 0)), 0]);
        setTeamScore2([...teamScore2, ((quanche || sharp) ? 0 : (parseInt(inpValue) + scoreOut2 / 10)), 0])
      }
    } else {
      if ((parseInt(inputValue) + scoreOut2) < (score * 10)) {
        setTeamScore2([...teamScore2, 0, 0]);
        setTeamScore1([...teamScore1, lose, 0])
      } else {
        let inpValue = teamRight;
        setTeamScore2([...teamScore2, (suit === 4 ? parseInt(score) * 2 : parseInt(score)) + (max - inpValue) + scoreOut2 / 10 + (quanche ? (parseInt(score) + scoreOut1 / 10 + parseInt(inpValue)) : (sharp ? (parseInt(score) * 3 + scoreOut1 / 10 + parseInt(inpValue)) : 0)), 0]);
        setTeamScore1([...teamScore1, ((quanche || sharp) ? 0 : (parseInt(inpValue) + scoreOut1 / 10)), 0])
      }
    }
  }
  setTeamVs([...teamVs, {team: -1, x: 0, suit: -1}]);
  setModalVisible(!modalVisible);
  setTeamScoreOut1([]);
  setTeamScoreOut2([]);
  setInputValue("");
}
