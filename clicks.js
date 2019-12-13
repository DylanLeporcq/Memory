// all card function click, change the background into a random animal with the random value. Contain the click counter et card values.
document.getElementById('card1').addEventListener('click', function () {
    document.getElementById('card1').style.backgroundImage='url(pics/card'+chosenCards[0]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[0];
        card1n=1;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[0];
        card2n=1;
        checkCard()
    }
});

document.getElementById('card2').addEventListener('click', function () {
    document.getElementById('card2').style.backgroundImage='url(pics/card'+chosenCards[1]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[1];
        card1n=2;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[1];
        card2n=2;
        checkCard()
    }
});

document.getElementById('card3').addEventListener('click', function () {
    document.getElementById('card3').style.backgroundImage='url(pics/card'+chosenCards[2]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[2];
        card1n=3;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[2];
        card2n=3;
        checkCard()
    }

});

document.getElementById('card4').addEventListener('click', function () {
    document.getElementById('card4').style.backgroundImage='url(pics/card'+chosenCards[3]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[3];
        card1n=4;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[3];
        card2n=4;
        checkCard()
    }

});

document.getElementById('card5').addEventListener('click', function () {
    document.getElementById('card5').style.backgroundImage='url(pics/card'+chosenCards[4]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[4];
        card1n=5;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[4];
        card2n=5;
        checkCard()
    }

});

document.getElementById('card6').addEventListener('click', function () {
    document.getElementById('card6').style.backgroundImage='url(pics/card'+chosenCards[5]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[5];
        card1n=6;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[5];
        card2n=6;
        checkCard()
    }

});

document.getElementById('card7').addEventListener('click', function () {
    document.getElementById('card7').style.backgroundImage='url(pics/card'+chosenCards[6]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[6];
        card1n=7;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[6];
        card2n=7;
        checkCard()
    }

});

document.getElementById('card8').addEventListener('click', function () {
    document.getElementById('card8').style.backgroundImage='url(pics/card'+chosenCards[7]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[7];
        card1n=8;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[7];
        card1n=8;
        checkCard()
    }

});

document.getElementById('card9').addEventListener('click', function () {
    document.getElementById('card9').style.backgroundImage='url(pics/card'+chosenCards[8]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[8];
        card1n=9;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[8];
        card2n=9;
        checkCard()
    }

});

document.getElementById('card10').addEventListener('click', function () {
    document.getElementById('card10').style.backgroundImage='url(pics/card'+chosenCards[9]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[9];
        card1n=10;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[9];
        card2n=10;
        checkCard()
    }

});

document.getElementById('card11').addEventListener('click', function () {
    document.getElementById('card11').style.backgroundImage='url(pics/card'+chosenCards[10]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[10];
        card1n=11;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[10];
        card2n=11;
        checkCard()
    }

});

document.getElementById('card12').addEventListener('click', function () {
    document.getElementById('card12').style.backgroundImage='url(pics/card'+chosenCards[11]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[11];
        card1n=12;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[11];
        card2n=12;
        checkCard()
    }

});

document.getElementById('card13').addEventListener('click', function () {
    document.getElementById('card13').style.backgroundImage='url(pics/card'+chosenCards[12]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[12];
        card1n=13;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[12];
        card2n=13;
        checkCard()
    }

});

document.getElementById('card14').addEventListener('click', function () {
    document.getElementById('card14').style.backgroundImage='url(pics/card'+chosenCards[13]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[13];
        card1n=14;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[13];
        card2n=14;
        checkCard()
    }

});
document.getElementById('card15').addEventListener('click', function () {
    document.getElementById('card15').style.backgroundImage='url(pics/card'+chosenCards[14]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[14];
        card1n=15;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[14];
        card2n=15;
        checkCard()
    }
});

document.getElementById('card16').addEventListener('click', function () {
    document.getElementById('card16').style.backgroundImage='url(pics/card'+chosenCards[15]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[15];
        card1n=16;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[15];
        card2n=16;
        checkCard()
    }
});







/*let testA = document.getElementsByClassName('col-sm');
for (n=0; n<testA.length; n++) {
    testA[n].addEventListener('click', function () {
        document.getElementById('card'+n).style.backgroundImage='url(pics/card'+chosenCards[n]+'.png)';
        if (click===0) {
            click++;
            cardValue1=chosenCards[n];
            document.getElementById('card'+n).style.zIndex="-1";
            
    
    
        }else if (click===1) {
            click++;
            cardValue2=chosenCards[n];
            document.getElementById('card'+n).style.zIndex="-1";
            setTimeout(twoCardClicked, 400);
            
    
        }
    });
}*/