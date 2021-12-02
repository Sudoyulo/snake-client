let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function(key) {

  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === 'q') {
    connection.write("Say: Om nom!");
  }
  if (key === 'e') {
    connection.write("Say: Go Go Go!");
  }


  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  
};

module.exports = setupInput;