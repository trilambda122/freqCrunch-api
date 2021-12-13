'use strict';

const mongoose = require('mongoose');

let conn = null;
const uri = process.env.DB_CONNECT_STRING


exports.connect = async function() {
  if (conn == null) {
    conn = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    }).then(() => mongoose);
    await conn;
   
  }
  return conn;
};