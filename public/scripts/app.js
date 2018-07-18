// $(document).ready(function() {

  const maze1 = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [3, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ]

       const Maze1WinningPos = {
        col: 12,
        row: 1
      }

      const maze2 = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 4, 4, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 0, 1, 4, 4, 4, 1, 1, 1, 0, 1, 0, 1],
        [3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 4, 4, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 4, 1, 0, 1, 0, 1, 4, 1, 4, 1, 0, 1],
        [1, 0, 1, 0, 4, 1, 0, 1, 1, 1, 4, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 4, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 4, 0, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ]

      const maze2WinningPos = {
        col: 15,
        row:15
      }

      const player = {
        col: 0,
        row: 7
      }

      let score = 0;


    const createMaze = (maze) => {
      console.log("Current score:", score)
      document.getElementById("current-score").innerHTML = score
      let map = document.getElementById("map")
      map.innerHTML = "";
      for (let row = 0; row < maze.length; row ++) {
        for (let col = 0; col < maze[row].length; col++) {
          if (maze[row][col] === 1) {
            map.innerHTML += `<img id='row${row}-col${col}' src='../imgs/wall.png' class='wall'></div>`;
          } else if (maze[row][col] === 0) {
            map.innerHTML += "<div id='row${row}-col${col}' class='ground'></div>";
          } else if (maze[row][col] === 3) {
            map.innerHTML += "<img id='row${row}-col${col}' src='../imgs/t-rex.jpeg' class='player'></div>";
          } else if (maze[row][col] === 4) {
            map.innerHTML += "<img id='row${row}-col${col}' src='../imgs/coin.jpg' class='coin'></div>";
          }
        }
      }
    };

  /*Create Rules:
  //player can't leave game area
  //victory image on win
  //play again doesn't repeat
  //score number of moves - jquery? - add tacos for points
  //make the game full page
  only reload player and move space, not whole maze
  */

  const playMaze = (mazeNum, winningPos) => {
    createMaze(mazeNum);
    document.onkeydown = (e) => {
      if (player.col === winningPos.col && player.row === winningPos.row) {
        console.log("you win!")
        document.getElementById("map").innerHTML = "";
        document.getElementById("map").innerHTML = "<img id='victory-img' src='imgs/win-taco.gif' />"
        document.getElementById("play-again").innerHTML += "<h1>Play again<h1>";
      } else if (e.code === "ArrowLeft" ) {
        if (mazeNum[player.row][player.col-1] !== 1) {
          if (mazeNum[player.row][player.col-1] === 4) {
            score ++;
          }
          mazeNum[player.row][player.col] = 0
          player.col --
          mazeNum[player.row][player.col] = 3
          createMaze(mazeNum)
        }
      } else if (e.code === "ArrowUp") {
        if (mazeNum[player.row-1][player.col] !== 1) {
          if (mazeNum[player.row-1][player.col] === 4) {
            score ++;
          }
          mazeNum[player.row][player.col] = 0
          player.row --;
          mazeNum[player.row][player.col] = 3
          createMaze(mazeNum)
        }
      } else if (e.code === "ArrowRight") {
          if (mazeNum[player.row][player.col+1] !== 1) {
            if (mazeNum[player.row][player.col+1] === 4) {
              score ++;
            }
          mazeNum[player.row][player.col] = 0
          player.col ++;
          mazeNum[player.row][player.col] = 3
          createMaze(mazeNum)
        }
      } else if (e.code === "ArrowDown") {
        if (mazeNum[player.row+1][player.col] !== 1) {
          if (mazeNum[player.row+1][player.col] === 4){
            score ++;
          }
          mazeNum[player.row][player.col] = 0
          player.row ++;
          mazeNum[player.row][player.col] = 3
          createMaze(mazeNum)
        }
      }
    }
  };

 playMaze(maze2, maze2WinningPos);
  // playMaze(maze1, maze1WinningPos);

// });
