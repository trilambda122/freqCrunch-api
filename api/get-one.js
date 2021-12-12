
const AWS = require('aws=sdk')
AWS.config.update({region: 'us-east-1'})

const showEvent = require('../models/event')
const utils = require('../utils/utils')

exports.handler = async(event)=>{
    try{
        return {
            statusCode: 200,
            headers: utils.getResponseHeaders(),
            body: JSON.stringify('')
        }
    }catch(err){
        console.log("Error", err)
        return {
            statusCode: err.statusCode ? err.statusCode : 500,
            headers: utils.getResponseHeaders(),
            body: JSON.stringify({
                error: err.name ? err.name : "Expection!",
                message: err.message ? err.message : "UNKNOWN Error"
            })
        }
    }
}