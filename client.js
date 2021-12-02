const net = require('net');
const setupInput = require('./input');
const { IP, PORT } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected.")

    conn.write("Name: KEV")
    
  });

  return conn;
};

const conn = connect();
setupInput(conn);
module.exports = connect;