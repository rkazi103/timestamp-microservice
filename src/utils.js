const isUnix = (date) => new Date(Number(date)).getTime() > 0;

module.exports = { isUnix };
