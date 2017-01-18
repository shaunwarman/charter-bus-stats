const CBdata = require('./data');

const playerIndex = (player) => {
  return CBdata['players'].indexOf(player.toLowerCase());
};

const find = (player, source) => {
  const index = playerIndex(player.toLowerCase());

  return CBdata[source][index];
};

const findHistory = (player, opponent) => {
  const pIndex = playerIndex(player.toLowerCase());
  const oIndex = playerIndex(opponent.toLowerCase());

  return CBdata['matchupHistory'][pIndex][oIndex];
};

const findByYear = (year, player, source) => {
  const yIndex = year % 2010;
  const pIndex = playerIndex(player.toLowerCase());

  return CBdata[source][yIndex][pIndex];
};

const getFacts = () => {
  return CBdata['fact'];
};

module.exports = {
  find,
  findHistory,
  findByYear,
  getFacts
}
