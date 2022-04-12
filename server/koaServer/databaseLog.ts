export const dataLog = {
  warn(message) {
    console.log('warn', message);
  },
  error(message) {
    console.log('error', message);
  },
  deprecate(message) {
    console.log('deprecate', message);
  },
  debug(message) {
    console.log(message.sql);
    console.log('debug', message);
  },
};
