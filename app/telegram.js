const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');

const utils = require('./utils');

const config = require('../config/config').config;
const session = require('telegraf/session');

/* Bot */
const bot = new Telegraf(config.TELEGRAM_TOKEN);
bot.use(session());


/* Errors */
bot.catch((err) => {console.warn('TELEGRAM ERR: ', err);});

/* Start */
bot.command('start', async (ctx) => {
  return ctx.replyWithMarkdown(config.strings.welcome, Markup.keyboard(config.strings.start) .oneTime() .resize() .extra());
});

/* THORNode */
bot.command('info', async (ctx) => {
  let info = config.bridge.info
  let stats = config.bridge.stats
  let jobs = config.bridge.jobs


  // info
  let bnb = `https://explorer.binance.org/address/${info.bridges.BNB}`
  let eth = `https://etherscan.io/address/${info.bridges.ETH}`
  let msg = {info: `Status: ${info.status}\nHealth: ${info.health}\n\nBNB BRIGE: ${bnb}\nETH BRIDGE: ${eth}`}

  // stats
  msg.stats = `QUEUE: ${stats.queue.txin} IN > ${stats.queue.txout} OUT\nTOTAL: ${stats.jobs.total}\nCOMPLETED: ${stats.jobs.completed}\nQUEUED: ${stats.jobs.active}\nIN PROGRESS: ${stats.jobs.pending}`
  return ctx.replyWithMarkdown(`${msg.info}\n\n${msg.stats}`, Extra.inReplyTo(ctx.message.message_id) .webPreview(false))
});

/* Actions & Listeners */
bot.hears(['about','help','⚡️ Bot Info'], async(ctx) => {
  return ctx.replyWithMarkdown(config.strings.welcome,Extra.webPreview(false));
});


/* Exports */
exports.bot = bot;
exports.Extra = Extra;
