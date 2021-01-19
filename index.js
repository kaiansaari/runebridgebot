/**
 * Local Imports
 */
require('dotenv').config()

const config = require('./config/config').config
const telegram = require('./app/telegram');
const express  = require('express');
const bridge = require('./app/bridge');

/* Start */
const startBot = async() => {
    try{
        express().listen(config.EXPRESS_PORT)
        telegram.bot.launch();
        console.log('>STARTED')
    } catch(err){
        console.log(err)
        return false;
    }
}

startBot();
