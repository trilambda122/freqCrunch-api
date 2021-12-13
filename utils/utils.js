const mongoose = require('mongoose')

const getResponseHeaders = ()=> {
    return {
        'Access-Control-Allow-Origin' : '*'
    }
}

module.exports ={
    getResponseHeaders,
 

}