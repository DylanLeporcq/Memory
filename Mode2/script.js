//In the order, the first grid with all the number of cards in two times. The last grid if only used after the random function.
let motifsCards=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let remainCard = motifsCards.slice(0);
let chosenCards=[];
let music = document.getElementById('song');

// Action (click = obtain +1 on each card click, it's reset when 2 cards has been discovered)
score=0;
document.getElementById('score').innerHTML=score;
//counter of click, restart at 2 with a function
click = 0;
//value of the random of each card chosen (first and second, restart after)
cardValue1 = 0;
cardValue2 = 0;
//value of the first and the second card chosen (set with the clicks.js file). First card = 1, Second card = 2, ...
card1n = 0;
card2n = 0;
//number of cards remain, -2 after a good answer
remain = 16;



function musicPlay() {
    t = setTimeout(musicPlay, 1000);
    music.play();
}


//Random card value function (between 1 and 8, delete each value after push it)
function randomCard() {
    musicPlay();
    while  (chosenCards.length<16) chosenCards.push(remainCard.splice(Math.floor(Math.random()*remainCard.length),1)[0]);
}

//I set the random on the load of the page
randomCard();

//when two cards are chosen, this function restart the click counter and check the result with the function
function twoCardClicked() {
    document.getElementById('cache').style.display="none";
    click=0;
    checkResult();
}

//checking the result, if the card value of both card are equal, the result is right. Else, it's wrong.
function checkResult() {
    if (cardValue1 === cardValue2) {
        cardValue1=0;
        cardValue2=0;
        score=score+3;
        remain=remain-2;
        document.getElementById('score').innerHTML=score;
        document.getElementById('card'+card1n).style.visibility='hidden';
        document.getElementById('card'+card2n).style.visibility='hidden';
        endGame();

    } else {
        cardValue1=0;
        cardValue2=0;
        score--;
        document.getElementById('score').innerHTML=score;
    }
    resetCardPic();
    document.getElementById('test').innerHTML=click;
    document.getElementById('test2').innerHTML=cardValue1;
    document.getElementById('test3').innerHTML=cardValue2;
}

//reset all the card on the '?'
function resetCardPic() {
    for (i = 1; i < 17; i++) {
        document.getElementById('card' + i).style.backgroundImage = 'url(pics/unknow.png)';
    }
}


//when cards 'remain' = 0, the 'game' block disappear and the end menu appear
function endGame() {
    if (remain===0) {
    clearTimeout(t);
    endStats();
    document.getElementById('end_zone').style.display='flex';
    document.getElementById('game').style.display='none';
    document.getElementById('theme').style.display='none';
    }
}

//enter the player's name
function enterName() {
    document.getElementById('name').innerHTML= " " + document.getElementById('place_name').value;
    document.getElementById('game').style.display='flex';
    document.getElementById('timer_bloc').style.display='flex';
    document.getElementById('name_bloc').style.display='flex';
    document.getElementById('score_bloc').style.display='flex';
    document.getElementById('pseudo_zone').style.display='none';
    document.getElementById('place_name').style.display='none';
    document.getElementById('begin').style.display='none';
    document.getElementById('coin').style.display='none';
    document.getElementById('title').style.marginLeft='0px';
    timeUp();
}

// minutes and seconds var
m = 0;
s = 0;

//set a timer when the player valid his name
function timeUp() {
    s++;
    convertTime();
    t = setTimeout(timeUp, 1000);
    document.getElementById('seconds').innerHTML=s;
    if (m < 10) {
        document.getElementById('minutes').innerHTML = "0" + m;
    } if (s < 10) {
        document.getElementById('seconds').innerHTML = "0" + s;
    }
}

//convert the time without using date functions
function convertTime() {
    if (s === 60) {
        s=0;
        m++;
    }
}

//Show a message with the time and the score of the player in the end div
function endStats() {
    document.getElementById('classement').innerHTML="You've finished the game in " + m + " minutes and "
    + s + " seconds. You've got a score of " + score + " points. Click on the 'Retry' button if you want to do a best score, "
    + document.getElementById('place_name').value + ".";
}


//Retry in the end of game, set all the value to 0 and refresh the Random function
function retryGame() {
    motifsCards=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    remainCard = motifsCards.slice(0);
    chosenCards=[];
    document.getElementById('game').style.display='flex';
    document.getElementById('end_zone').style.display='none';
    document.getElementById('theme').style.display='inline-block';
    s=0;
    m=0;
    score=0;
    remain=16;
    document.getElementById('score').innerHTML=score;
    timeUp();
    for (i = 1; i < 17; i++) {
        document.getElementById('card' + i).style.backgroundImage = 'url(pics/unknow.png)';
        document.getElementById('card' + i).style.zIndex = "1";
        document.getElementById('card' + i).style.zIndex = "1";
        document.getElementById('card' + i).style.visibility = 'visible';
    }
    randomCard();
}


//Check if the user choose the same card in a row.
function checkCard() {
    if (card1n === card2n){
        alert('Please, choose two different cards.');
    resetCardPic();
    click=0}
    else {
        document.getElementById('cache').style.display="block";
        setTimeout(twoCardClicked, 1000);
        click=0
    }
}