import { SERVER_PORT } from '../../config/server.config';

const request = (cloudapi: string): Promise<Response> => {
  return fetch(`localhost:${SERVER_PORT}/api/${cloudapi}`);
};

export { request };
