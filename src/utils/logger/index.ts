import dayjs from "dayjs";
import pino from "pino";

const log = pino({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
