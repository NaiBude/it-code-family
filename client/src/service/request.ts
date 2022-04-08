import { SERVER_PORT } from '../../config/server.config';
const request = async (cloudapi: string) => {
  return await fetch(`localhost:${SERVER_PORT}/api/${cloudapi}`);
};

export default { request };
