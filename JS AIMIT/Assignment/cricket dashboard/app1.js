const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let cricketData = {
  teamName: 'India',
  players: [
    { name: 'Player 1', score: 0 },
    { name: 'Player 2', score: 0 },
    // Add more players as needed
  ],
  overs: 0,
  balls: 0,
  runRate: 0,
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index1.html');
});

io.on('connection', (socket) => {
  io.emit('update', cricketData);

  socket.on('addRun', (playerIndex) => {
    cricketData.players[playerIndex].score += 1;
    cricketData.balls += 1;
    updateRunRate();
    io.emit('update', cricketData);
  });

  socket.on('addBall', () => {
    cricketData.balls += 1;
    updateRunRate();
    io.emit('update', cricketData);
  });

  function updateRunRate() {
    cricketData.runRate = (cricketData.balls === 0) ? 0 : (cricketData.players.reduce((acc, player) => acc + player.score, 0) / cricketData.balls).toFixed(2);
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
