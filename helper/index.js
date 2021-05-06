/* eslint-disable no-plusplus */
function makeid(length) {
  const result = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(
        Math.floor(
          Math.random() * charactersLength,
        ),
      ),
    );
  }
  return result.join('');
}

const stringUnix = () => `${makeid(8)}_${makeid(16)}`;
module.exports = stringUnix;
