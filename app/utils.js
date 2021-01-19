/**
 * Local Imports
 */
const config = require('../config/config').config;
const format = require('string-format');
const winston = require('winston');

winston.add(new winston.transports.File({ filename: 'logfile.log' }))
winston.add(new winston.transports.Console())

const errorList = {
  ADDR_BAD:"You need to provide a valid testnet binance chain address.",
  USER_BAD:"Start the bot `/start` first so I can register your telegram account.",
  DB_FAIL: "There was an issue updating the database. Try again later",
  BAL_BAD: "I don't have enough balance.",
  ERR: "There was an error, sorry! No deal.",
  USER_GREEDY: "You've been greedy. No more RUNES for you!"
}

format.extend(String.prototype, {})

/* Get User from DB */
const grabUser = (userObj) => {
  let filter = userObj.id ? userObj.id : userObj.userid ? userObj.userid : userObj.from.id
  let userInfo = config.users.filter(x => x.userid == filter);
  return userInfo[0] && userInfo.length > 0 ? userInfo[0] : false
}


/* Helpers */
const updateUserArray = (userInfo) => {
  config.users = config.users.filter(x => x.userid != userInfo.userid);
  config.users.push(userInfo)
 }

const isUser = (userObj) => {
  return grabUser(userObj) ? true : false
}

const sexyError = (error) => {
  return errorList[error];
}


/* Exports */
exports.isUser = isUser
exports.grabUser = grabUser
exports.sexyError = sexyError;
exports.format = format;
exports.updateUserArray = updateUserArray
