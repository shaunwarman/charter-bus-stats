const CBdata = require('./data');


const playerIndex = (player) => {
  return CBdata['players'].indexOf(player);
};

const find = (player, source) => {
  const index = playerIndex(player);

  return CBdata[source][index];
};

const findHistory = (player, opponent) => {
  const pIndex = playerIndex(player);
  const oIndex = playerIndex(opponent);

  return CBdata['matchupHistory'][pIndex][oIndex];
};

const findByYear = (year, player, source) => {
  const yIndex = year % 2010;
  const pIndex = playerIndex(player);

  return CBdata[source][yIndex][pIndex];
};

const getFacts = () => {
  return CBdata['fact'];
};

module.exports = {
  find,
  findHistory,
  findByYear,
  getFact
}
