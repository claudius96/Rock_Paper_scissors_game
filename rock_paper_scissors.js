const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors'){
      return userInput;
    }else{
      console.log('Error enter words recognized');
    }
  };
  
  const getComputerChoice = () =>{ 
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0){
    return 'rock';
  }else if(randomNumber === 1){
    return 'paper';
  }else if(randomNumber == 2){
    return 'scissors';
  }
  };
  
  const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
      return 'game was tie';
    }
    //checking if the userChoice is Rock
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'The computer won';
      }else{
        return 'user won';
      }
    }
    //cheat codes.
    if(userChoice == 'bomb'){
      return 'The user Won';
    }
  
    //checking if the userChoice is PAPER.
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors' || computerChoice === 'rock'){return 'The computer won';
      }else{
        return 'The user won';
      }
    }
  
  //Checking if the userChoice is SCISSORS.
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock' || computerChoice == 'paper'){
      return 'The computer won';
    }else{
      return 'The user won';
    }
  }
  
  };
  function playGame(userChoice = getUserChoice('rock'), computerChoice = getComputerChoice()){
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();
  
  