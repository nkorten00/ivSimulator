var displayStartLed = document.getElementById("startLed");
var displayHoldLed = document.getElementById("holdLed");
var displayIvState = document.getElementById("ivState");
var result = "incorrect";
var ivState = "off";
var rate = 0;
var volume = 0;
var duration = 0;
var booRate;
var booVolume;
var booDuration;
var displayRate = document.getElementById("displayRate");
var displayDuration = document.getElementById("displayDuration");
var displayVolume = document.getElementById("displayVolume");

var displayRateLabel = document.getElementById("displayRateLabel");
var displayRateLabel2 = document.getElementById("displayRateLabel2");
var displayVolumeLabel   = document.getElementById("displayVolumeLabel");
var displayVolumeLabel2 = document.getElementById("displayVolumeLabel2");
var displayDurationLabel = document.getElementById("displayDurationLabel");
var displayDurationLabel2 = document.getElementById("displayDurationLabel2");

var inputVolume;
var inputDuration;
var inputRate;
var checkVolume;
var checkDuration;
var checkRate;
var roundVolume;
var inputCheckRate = document.getElementById("inputRate");
var inputCheckHours = document.getElementById("inputHours");
var inputCheckMinutes = document.getElementById("inputMinutes");
var inputCheckVolume = document.getElementById("inputVolume");

var counterSchedule;
var counter = 1;
var pumpBars;
var displaySpanAnimation = document.getElementById("pumpAnimation");



function welcomeAlert() {
    alert("Welcome!\nPlease enter 2 values into the measurements box and press submit."
    + "\nTurn the IV on and enter the 3 values.\n Press start to check your calculations."
    +"\nClick the ? button to see these instruction again.");
  }


function start(){
    if(ivState == "off"){
        return;
    }
    if(rate == checkRate && duration == checkDuration && volume == checkVolume){
        var result = "correct";
    }
    else{incorrect();}

    if(result == "correct"){
        console.log("correct");
        displayStartLed.src = "green.png";
        displayIvState.innerHTML = "IV Running";
        displayHoldLed.src = "blue.png";
        startAnimation();
    }

}

function hold(){
    if(ivState == "off"){
        return;
    }
         displayStartLed.src = "blue.png";
        displayIvState.innerHTML = "IV On Hold";
        displayHoldLed.src = "red.png";
        stopAnimation();
}

function reset(){
    inputCheckHours.value = "";
    inputCheckMinutes.value = "";
    inputCheckRate.value = "";
    inputCheckVolume.value = '';
    displayDuration.innerHTML = "";
    displayRate.innerHTML = "";
    displayVolume.innerHTML = "";


}

    function startAnimation(){
        counterSchedule = setInterval(displayAnimation,1000);

    }

    function displayAnimation(){
      if(counter == 1){
        pumpBars = " || ";
       displaySpanAnimation.innerHTML = pumpBars;
       
        
      }
      if(counter == 2){
        
        pumpBars = " || ||  ";
        displaySpanAnimation.innerHTML = pumpBars;
         
       }
       if(counter == 3){
        
        pumpBars = " ||  ||  || ";
        displaySpanAnimation.innerHTML = pumpBars;
         
       }
       if(counter == 4){
        
        pumpBars = " ||  ||  ||  || ";
        displaySpanAnimation.innerHTML = pumpBars;
         
       }
       if(counter == 5){
        pumpBars = " ||  ||  || ";
       displaySpanAnimation.innerHTML = pumpBars;
       
        
      }
      if(counter == 6){
        
        pumpBars = " || ||  ";
        displaySpanAnimation.innerHTML = pumpBars;
         
       }
       if(counter == 7){
        
        pumpBars = " ||  ";
        displaySpanAnimation.innerHTML = pumpBars;
         
       }
       if(counter == 8){
        
        pumpBars = "  ";
        displaySpanAnimation.innerHTML = pumpBars;
        counter = 0;
         
       }

      counter++;

    }

    function stopAnimation(){
             clearInterval(counterSchedule);
    }


function onOffFunct(){
    var displayOnLed = document.getElementById("onOffLed");
    if(ivState == "off"){
        rate= 0;
        volume = 0;
        duration = 0;
        ivState = "on";
        displayIvState.innerHTML = "Powered On - Set State";
      displayOnLed.src = "green.png";
      displaySpanAnimation.innerHTML = "";
      displayLabelsOn();
      stopAnimation();
    }
    else{
    ivState = "off";
    displayIvState.innerHTML = " ";
    displayRate.innerHTML = " ";
    displayDuration.innerHTML = " ";
    displayVolume.innerHTML = " ";
    displayOnLed.src = "blue.png";
    displaySpanAnimation.innerHTML = "";
    displayLabelsOff();
    stopAnimation();
}
    
}

function displayLabelsOn(){
displayRateLabel.innerHTML = "RATE";
displayRateLabel2.innerHTML = "mls/hr";
displayVolumeLabel.innerHTML   =  "VBTI";
displayVolumeLabel2.innerHTML = "ml";
displayDurationLabel.innerHTML = "DURATION";
displayDurationLabel2.innerHTML =  "minutes";
displayVolume.style.border = "solid 1px";
displayRate.style.border = "solid 1px";
displayDuration.style.border = "solid 1px";



}

function displayLabelsOff(){
displayRateLabel.innerHTML = "";
displayRateLabel2.innerHTML = "";
displayVolumeLabel.innerHTML   =  "";
displayVolumeLabel2.innerHTML = "";
displayDurationLabel.innerHTML = "";
displayDurationLabel2.innerHTML =  "";
displayVolume.style.border = "none";
displayRate.style.border = "none";
displayDuration.style.border = "none";

}


function incorrect(){
    displayIvState.innerHTML = "Please Check Values & Submit Button";
}


function setRate(){
    booRate = true;
    booVolume = false;
    booDuration = false;
}


function setVolume(){
    booRate = false;
    booVolume = true;
    booDuration = false;
    
}

function setDuration(){
    booRate = false;
    booVolume = false;
    booDuration = true;
    
}

function up10(){
    if(ivState == "off"){
        return;
    }

    if(booRate == true){
        rate +=10;
        displayRate.innerHTML = rate;

    }

    if(booVolume == true){
        volume +=10;
        displayVolume.innerHTML = volume;
        
    }

    if(booDuration == true){
        duration +=10;
        displayDuration.innerHTML = duration;
    }

}

function up1(){
    if(ivState == "off"){
        return;
    }
    if(booRate == true){
        rate +=1;
        displayRate.innerHTML = rate;
    }

    if(booVolume == true){
        volume +=1;
        displayVolume.innerHTML = volume;
        
    }

    if(booDuration == true){
        duration +=1;
        displayDuration.innerHTML = duration;
    }

}

function down10(){
    if(ivState == "off"){
        return;
    }
    if(booRate == true){
        rate -=10;
        displayRate.innerHTML = rate;
    }

    if(booVolume == true){
        volume -=10;
        displayVolume.innerHTML = volume;
        
    }

    if(booDuration == true){
        duration -=10;
        displayDuration.innerHTML = duration;
    }

}

function down1(){
    if(ivState == "off"){
        return;
    }
    if(booRate == true){
        rate -=1;
        displayRate.innerHTML = rate;
    }

    if(booVolume == true){
        volume -=1;
        displayVolume.innerHTML = volume;
        
    }

    if(booDuration == true){
        duration -=1;
        displayDuration.innerHTML = duration;
    }

}

function calculateCheck(){
   

    inputVolume = Number(inputCheckVolume.value);
    inputDuration = Number(inputCheckMinutes.value) + Number(inputCheckHours.value/60);
    inputRate = Number(inputCheckRate.value);
   
     if(inputVolume == 0){
         roundVolume = inputRate * (inputDuration/60);
         checkVolume = Math.round(roundVolume);
         checkRate = inputRate;
         checkDuration = inputDuration;
         console.log(checkVolume);
         

     }
     if(inputDuration == 0){
         checkDuration = inputVolume/inputRate;
         checkRate = inputRate;
         checkVolume = inputVolume;
        
    }
    if(inputRate == 0){
        checkRate = (inputVolume/inputDuration)*60;
        checkVolume = inputVolume;
        checkDuration = inputDuration;
        
    }

}

