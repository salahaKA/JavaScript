// ... (previous code)

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let cricketData = {
    teamName: 'India',
    players: [
      { name: 'Rohit Sharma (c)', score: 0 },
      { name: 'Shubman Gill', score: 0 },
      { name: 'Virat Kohli', score: 0 },
      { name: 'Shreyas Iyer', score: 0 },
      { name: 'KL Rahul (wk)', score: 0 },
      { name: 'Suryakumar Yadav', score: 0 },
      { name: 'Ravindra Jadeja', score: 0 },
      { name: 'Mohammed Shami', score: 0 },
      { name: 'Jasprit Bumrah', score: 0 },
      { name: 'Kuldeep Yadav', score: 0 },
      { name: 'Mohammed Siraj', score: 0 },
      { name: 'Devduth Padikal', score: 0 },
      // Add more players as needed
    ],
    overs: 0,
    balls: 0,
    runRate: 0,
  };

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index5.html');
});

io.on('connection', (socket) => {
  io.emit('update', cricketData);

  socket.on('addRun', (playerIndex, score) => {
    cricketData.players[playerIndex].score += score;
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
    cricketData.runRate = (cricketData.balls === 0) ? 0 : (cricketData.players.reduce((acc, player) => acc + player.score, 0) / Math.ceil(cricketData.balls / 6)).toFixed(2);
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



  
  // ... (rest of the code)
  