export const Encryption = str => {
  const buf = Buffer.from(str);
  const bufStr = buf.toString('base64');
  let editorStr = '';
  for (let i = 0; i < bufStr.length; i++) {
    editorStr += bufStr[Math.floor(Math.random() * bufStr.length)];
    editorStr += bufStr[i];
    // if ((i + 1) % 4 === 0) {
    // }
  }
  return editorStr;
};
export const Decryption = token => {
  let beDecoded = '';
  for (let i = 0; i < token.length; i++) {
    if ((i + 1) % 2 === 0) {
      beDecoded += token[i];
    }
  }
  const buf = Buffer.from(beDecoded, 'base64');
  return buf.toString();
};
