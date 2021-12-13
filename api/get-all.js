
const AWS = require('aws-sdk')
AWS.config.update({region: 'us-east-1'})
// const mongoose = require('mongoose')
const showEvent = require('../models/event')
const utils = require('../utils/utils')
const connectDatabase = require('../utils/databaseConnect')

exports.handler = async(event,context)=>{
    context.callbackWaitsForEmptyEventLoop = false;
    
    try{
        const db = await connectDatabase.connect();
        console.log('DATABASE--->', db.connections[0].name)
        const result = await showEvent.find()
      
        return {
            statusCode: 200,
            headers: utils.getResponseHeaders(),
            body: JSON.stringify(result)
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