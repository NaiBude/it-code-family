"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = require("../../config/server.config");
const request = async (cloudapi) => {
    return await fetch(`localhost:${server_config_1.SERVER_PORT}/api/${cloudapi}`);
};
exports.default = { request };
//# sourceMappingURL=request.js.map