let numRollAmt = 0
let arrDieValues = []
let numDieOneRollFactor = 1
let numDieTwoRollFactor = 1
let numDieThreeRollFactor = 1
let numDieFourRollFactor = 1
let numDieFiveRollFactor = 1
let numValue = 0
let numValueTwo = 0
let numValueThree = 0
let numValueFour = 0
let numValueFive = 0
let numOneTotal = 0
let numTwoTotal = 0
let numThreeTotal = 0
let numFourTotal = 0
let numFiveTotal = 0
let numSixTotal = 0
let numOneTotalScore = 0
let numTwoTotalScore = 0
let numThreeTotalScore = 0
let numFourTotalScore = 0
let numFiveTotalScore = 0
let numSixTotalScore = 0
let numRoundsPlayed = 0
let numFinalScore = 0


function rollDie(numHoldValue) {
  //roll amount
  numRollAmt++

  if (numDieOneRollFactor == 1) {
    numValue = Math.floor((Math.random() * 6)) + 1; document.getElementById('die1').src = "images/" + numValue + ".png"
  }
  if (numDieTwoRollFactor == 1) {
    numValueTwo = Math.floor((Math.random() * 6)) + 1; document.getElementById('die2').src = "images/" + numValueTwo + ".png"
  }
  if (numDieThreeRollFactor == 1) {
    numValueThree = Math.floor((Math.random() * 6)) + 1; document.getElementById('die3').src = "images/" + numValueThree + ".png"
  }
  if (numDieFourRollFactor == 1) {
    numValueFour = Math.floor((Math.random() * 6)) + 1; document.getElementById('die4').src = "images/" + numValueFour + ".png"
  }
  if (numDieFiveRollFactor == 1) {
    numValueFive = Math.floor((Math.random() * 6)) + 1; document.getElementById('die5').src = "images/" + numValueFive + ".png"
  }


  //die values array
  arrDieValues = [numValue, numValueTwo, numValueThree, numValueFour, numValueFive]
  console.log(arrDieValues)





  //roll limit
  if (numRollAmt == 3) {
    document.getElementById('rollButton').disabled = true
    document.getElementById('scoreButtons1').style = "display: inline;"
    document.getElementById('scoreButtons2').style = "display: inline;"
    document.getElementById('scoreButtons3').style = "display: inline;"
    document.getElementById('scoreButtons4').style = "display: inline;"
    document.getElementById('scoreButtons5').style = "display: inline;"
    document.getElementById('scoreButtons6').style = "display: inline;"
  }


}



function holdDie(numDieHeld) {
  document.getElementById('hold' + numDieHeld).disabled = true
  document.getElementById('hold' + numDieHeld).style = "display: none;"
  if (numDieHeld == 1) {
    numDieOneRollFactor = 0
  }

  if (numDieHeld == 2) {
    numDieTwoRollFactor = 0
  }

  if (numDieHeld == 3) {
    numDieThreeRollFactor = 0
  }

  if (numDieHeld == 4) {
    numDieFourRollFactor = 0
  }

  if (numDieHeld == 5) {
    numDieFiveRollFactor = 0
  }
}



function scoreTotal(numScore) {
  console.log(numScore)
  numRoundsPlayed++
  document.getElementById('scoreButtons' + numScore).disabled = true




  if (numScore == 1) {
    for (i = 0; i < arrDieValues.length; i++) {
      if (arrDieValues[i] == 1) {
        numOneTotal++
        numOneTotalScore = numOneTotal * 1
        console.log(numOneTotal)
      }
    }
  } if (numOneTotal == 5) {
    // alert("Congrats!! You got Yahtzee on Ones!!")
    numOneTotalScore = 50
  }



  if (numScore == 2) {
    for (a = 0; a < arrDieValues.length; a++) {
      if (arrDieValues[a] == 2) {
        numTwoTotal++
        numTwoTotalScore = numTwoTotal * 2
      }
    }
  } if (numTwoTotal == 5) {
    // alert("Congrats!! You got Yahtzee on Twos!!")
    numTwoTotalScore = 50
  }



  if (numScore == 3) {
    for (b = 0; b < arrDieValues.length; b++) {
      if (arrDieValues[b] == 3) {
        numThreeTotal++
        numThreeTotalScore = numThreeTotal * 3
      }
    }
  } if (numThreeTotal == 5) {
    // alert("Congrats!! You got Yahtzee on Threes!!")
    numThreeTotalScore = 50
  }



  if (numScore == 4) {
    for (c = 0; c < arrDieValues.length; c++) {
      if (arrDieValues[c] == 4) {
        numFourTotal++
        numFourTotalScore = numFourTotal * 4
      }
    }
  } if (numFourTotal == 5) {
    // alert("Congrats!! You got Yahtzee on Fours!!")
    numFourTotalScore = 50
  }



  if (numScore == 5) {
    for (d = 0; d < arrDieValues.length; d++) {
      if (arrDieValues[d] == 5) {
        numFiveTotal++
        numFiveTotalScore = numFiveTotal * 5
      }
    }
  } if (numFiveTotal == 5) {
    // alert("Congrats!! You got Yahtzee on Fives!!")
    numOneTotalScore = 50
  }



  if (numScore == 6) {
    for (e = 0; e < arrDieValues.length; e++) {
      if (arrDieValues[e] == 6) {
        numSixTotal++
        numSixTotalScore = numSixTotal * 6
      }
    }
  } if (numSixTotal == 5) {
    // alert("Congrats!! You got Yahtzee on Sixes!!")
    numSixTotalScore = 50
  }

  numFinalScore = numOneTotalScore + numTwoTotalScore + numThreeTotalScore + numFourTotalScore + numFiveTotalScore + numSixTotalScore

  if (numRoundsPlayed = 5) {
    document.getElementById('finalScore').innerHTML = "<i>Your current score is:  <b>" + numFinalScore + "</b></i>"
  }


  document.getElementById('score1').innerHTML = numOneTotalScore
  document.getElementById('score2').innerHTML = numTwoTotalScore
  document.getElementById('score3').innerHTML = numThreeTotalScore
  document.getElementById('score4').innerHTML = numFourTotalScore
  document.getElementById('score5').innerHTML = numFiveTotalScore
  document.getElementById('score6').innerHTML = numSixTotalScore


  numDieOneRollFactor = 1
  numDieTwoRollFactor = 1
  numDieThreeRollFactor = 1
  numDieFourRollFactor = 1
  numDieFiveRollFactor = 1
  numValueOne = 0
  numValueTwo = 0
  numValueThree = 0
  numValueFour = 0
  numValueFive = 0

  document.getElementById('die1').src = "images/blank_die.png"
  document.getElementById('die2').src = "images/blank_die.png"
  document.getElementById('die3').src = "images/blank_die.png"
  document.getElementById('die4').src = "images/blank_die.png"
  document.getElementById('die5').src = "images/blank_die.png"

  document.getElementById('rollButton').disabled = false
  numRollAmt = 0
  document.getElementById("hold1").disabled = false
  document.getElementById("hold2").disabled = false
  document.getElementById("hold3").disabled = false
  document.getElementById("hold4").disabled = false
  document.getElementById("hold5").disabled = false

  document.getElementById("hold1").style = "display: inline;"
  document.getElementById("hold2").style = "display: inline;"
  document.getElementById("hold3").style = "display: inline;"
  document.getElementById("hold4").style = "display: inline;"
  document.getElementById("hold5").style = "display: inline;"

  document.getElementById('scoreButtons1').style = "display: none;"
  document.getElementById('scoreButtons2').style = "display: none;"
  document.getElementById('scoreButtons3').style = "display: none;"
  document.getElementById('scoreButtons4').style = "display: none;"
  document.getElementById('scoreButtons5').style = "display: none;"
  document.getElementById('scoreButtons6').style = "display: none;"
}



function resetDie() {
    alert('If you some how managed to click this... CONGRATS!! YOU BROKE MY CODE!!')
}