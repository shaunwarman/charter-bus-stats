const CBdata = require('./data');

const clean = (player) => {
  return player.replace('\'s', '').toLowerCase()
}

const playerIndex = (player) => {
  return CBdata['players'].indexOf(clean(player));
};

const find = (player, source) => {
  const index = playerIndex(clean(player));

  return CBdata[source][index];
};

const findHistory = (player, opponent) => {
  const pIndex = playerIndex(clean(player));
  const oIndex = playerIndex(clean(opponent));

  return CBdata['matchupHistory'][pIndex][oIndex];
};

const findByYear = (year, player, source) => {
  const yIndex = year % 2010;
  const pIndex = playerIndex(clean(player));

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
