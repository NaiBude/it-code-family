import WebSocket = require('ws');

export const webSocket = ({ server }) => {
  const wss = new WebSocket.Server({ server });
  let timer = null;
  wss.on('connection', (ws, req) => {
    console.log('websocketReq', req);

    console.log('连接成功');

    timer = setInterval(() => {
      ws.send('hahaha');
    }, 2000);
  });
  wss.on('close', () => {
    clearInterval(timer);
  });
};
