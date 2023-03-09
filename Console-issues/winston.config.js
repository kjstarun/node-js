import winston, { format, createLogger, transports } from "winston";
const { combine, timestamp, label, printf, prettyPrint } = format;
const CATEGORY = "winston custom format";

const logger = createLogger({
  level: "debug",
  format: combine(
    label({ label: CATEGORY }),
    timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    prettyPrint()
  ),
  //transports: [new transports.Console()],
  transports: [
    //new transports:
    new transports.File({
      filename: "logs/example.log",
    }),
  ],
});

export default logger;
