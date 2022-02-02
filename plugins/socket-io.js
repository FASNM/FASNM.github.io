const io = require("socket.io-client");
const socket = io(process.env.SERVER_URL);

export default ({ app }, inject) => {
  inject("socket", socket);
};
