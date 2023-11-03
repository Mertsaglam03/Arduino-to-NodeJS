const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// Set up the serial port connection
const port = new SerialPort({
  path: "COM9",
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});

// Use the Readline parser
const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

parser.on("data", function (data) {
  console.log("Data from Arduino:", data);
});

port.on("error", function (err) {
  console.error("Error with the serial port:", err.message);
});
