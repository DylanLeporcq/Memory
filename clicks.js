// all card function click, change the background into a random animal with the random value. Contain the click counter et card values.
function test(index) {
    let b = index+1;
    document.getElementById('card'+b).style.backgroundImage='url(pics/card'+chosenCards[index]+'.png)';
    if (click===0) {
        click++;
        cardValue1=chosenCards[index];
        card1n=b;
    }else if (click===1) {
        click++;
        cardValue2=chosenCards[index];
        card2n=b;
        checkCard()
    }
}

function test2(param) {
    let a = param+1;
        document.getElementById('card'+a).addEventListener('click', function () {
            test(param);
        });
}

for (n=0; n<17; n++) {
    test2(n);
}