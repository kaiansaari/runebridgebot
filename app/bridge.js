/**
 * Local Imports
 */
const config = require('../config/config').config;
const utils = require('./utils');
const axios = require('axios');

/* Poll backlog of transactions */
const pollBridge = async() =>{
    setInterval(async()=> {
        try{
            let url = `${config.RUNEBRIDGE_API}`
            let {data:info} = await axios.get(url)
            let {data:stats} = await axios.get(`${url}/stats`)
            let {data:jobs} = await axios.get(`${url}/jobs`)

            return config.bridge = {info: info, stats: stats, jobs: jobs}
        } catch (err) {
            console.log(err)
            return config.bridge = { state: "offline"}
        }
    }, 1000);
}

pollBridge()
