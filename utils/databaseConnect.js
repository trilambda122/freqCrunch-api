'use strict';

const mongoose = require('mongoose');

let conn = null;
const uri = process.env.DB_CONNECT_STRING


exports.connect = async function() {
  if (conn == null) {
    conn = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      minPoolSize: 10,
      socketTimeoutMS: 100000
    }).then(() => mongoose);
    await conn;
   
  }
  return conn;
};