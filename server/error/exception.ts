export = class extends Error {
  code = 0;

  statusCode = 200;

  asJson = true;

  showRawMessage = false;

  constructor(message, code, statusCode = 10000, showRawMessage = false) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.showRawMessage = showRawMessage;
  }
};
