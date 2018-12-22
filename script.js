let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

const botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const closedDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById("start"); 

const currentlyPlaying = true; 

const playDoor = (door) => {
  numClosedDoors -= 1;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)){
      gameOver();
  }
};

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);

  if (choreDoor === 1) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 2) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
};
// randomChoreDoorGenerator();

const isBot = (door) => {
    if (door.src === botDoorPath){
        return true; 
    } else {
        return false; 
    }
}

const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};
doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage);
  }
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

const gameOver = (status) => {
    if(status === 'win'){
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false; 
};

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath; 
    doorImage3.src = closedDoorPath; 
    numClosedDoors = 3; 
    startButton.innerHTML = 'Good luck!'
    currentlyPlaying = true; 
    randomChoreDoorGenerator();

}

if (!currentlyPlaying){
    startButton.onclick = () => {
        startRound(); 
    }
}

startRound(); 


