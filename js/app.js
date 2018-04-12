document.addEventListener('DOMContentLoaded', function () {

    // Variable Declarations 
    const deck = document.getElementById('deck'),
        moves = document.querySelector('.moves'),
        secondStar = document.getElementById('second-star'),
        thirdStar = document.getElementById('third-star'),
        restartBtn = document.getElementById('restart'),
        repeatBtn = document.querySelector('.repeat'),
        min = document.getElementById('minutes'),
        sec = document.getElementById('seconds'),
        matchCards = document.getElementsByClassName('match'),
        container = document.querySelector('.container'),
        message = document.querySelector('.message'),
        howManyMoves = document.querySelector('.how-many-moves'),
        howMuchTime = document.querySelector('.how-much-time'),
        howManyStars = document.querySelector('.how-many-stars'),

        diamond = '<i class="fa fa-diamond"></i>',
        plane = '<i class="fa fa-paper-plane-o"></i>',
        anchor = '<i class="fa fa-anchor"></i>',
        bolt = '<i class="fa fa-bolt"></i>',
        cube = '<i class="fa fa-cube"></i>',
        leaf = '<i class="fa fa-leaf"></i>',
        bomb = '<i class="fa fa-bomb"></i>',
        bicycle = '<i class="fa fa-bicycle"></i>',

        myCards = [diamond, diamond, plane, plane, anchor, anchor, bolt, bolt, cube, cube, leaf, leaf, bomb, bomb, bicycle, bicycle],
        openCards = [],

        shuffledCards = shuffle(myCards);

    let seconds = 0,
        minutes = 0,
        movesCounter = 0,
        control;

    //Run the "shuffler" everytime the page loads
    randomize();

    // Shuffle function from http://stackoverflow.com/a/2450976
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    //Function that takes the shuffled cards and converts them to inner HTML
    function randomize() {
        for (var index in shuffledCards) {
            let singleCard = document.getElementById('card' + index);
            singleCard.innerHTML = shuffledCards[index];

            //Remove all the classes that had the cards from previous game
            singleCard.classList.remove('open', 'show', 'match', 'rotate', 'reverse', 'animated', 'wobble', 'rubberBand');
        }
    }

    //Function that increments the moves by one everytime a pair of cards is opened
    function movesCounterFunc() {
        movesCounter++;
        moves.textContent = movesCounter;
    }

    //The timer function 
    function startTimer() {
        //clears the timer before starting
        if (control) {
            clearInterval(control);
        }

        control = setInterval(function () {
            seconds++;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            document.getElementById('seconds').innerHTML = ":" + seconds;

            if (seconds === 59) {
                seconds = -1;
            }
            if (seconds === 0) {
                minutes++;
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                document.getElementById('minutes').innerHTML = minutes;
            }
            if (minutes === 59) {
                minutes = -1;
            }

        }, 1000);
    }

    //The player loses the first star after the 20 first moves and the second after 30
    function starsWon() {
        if (movesCounter >= 30) {
            thirdStar.classList.remove('star');
            secondStar.classList.remove('star');
        } else if (movesCounter >= 20) {
            thirdStar.classList.remove('star');
        }
    }

    //Checks if the player has matched all 16 cards and then the game is over and a message box appears and informs him about the moves, time and stars he has won
    function gameOver() {
        if (matchCards.length === 16) {
            const stars = document.getElementById('stars').innerHTML;
            const time = min.textContent + sec.textContent;
            clearInterval(control);
            min.textContent = "00";
            sec.textContent = ":00";
            seconds = 1;
            minutes = 0;
            container.classList.add('blur');
            message.classList.remove('hide');
            howManyMoves.textContent = "Moves: " + movesCounter;
            howMuchTime.textContent = "Time: " + time;
            howManyStars.innerHTML = stars;
        }
    }

    //When the restart button is hit (top of the page), the game starts from the beginning and initializes everything
    function restart() {
        shuffle(myCards);
        randomize();
        movesCounter = 0;
        moves.textContent = movesCounter;
        secondStar.classList.add('star');
        thirdStar.classList.add('star');
        clearInterval(control);
        min.textContent = "00";
        sec.textContent = ":00";
        seconds = 1;
        minutes = 0;
    }

    //When a card is clicked the game starts
    function clickEvent(e) {
        let target = e.target,
            openCards = deck.querySelectorAll('.open');
        //only if the target is a LI
        if (target.nodeName === 'LI') {
            //the timer starts
            startTimer();
            
            //if there is no open card yet...
            if (openCards.length === 0) {
                target.classList.remove('reverse', 'animated', 'wobble');
                if (!target.classList.contains('match')) {
                    target.classList.add('open', 'show');
                }
                //gets the open cards
                openCards = deck.querySelectorAll('.open');
            
            //if there is 1 open card...
            } else if (openCards.length === 1) {
                target.classList.remove('reverse', 'animated', 'wobble');
                if (!target.classList.contains('match')) {
                    target.classList.add('open', 'show');
                }
                //gets the open cards
                openCards = deck.querySelectorAll('.open');
                
                //now that a second card has opened, check if the 2 opened cards match
                
                //if they match...
                if ((openCards.length === 2) && (openCards[0].innerHTML === openCards[1].innerHTML)) {
                    openCards[0].classList.add('animated', 'rubberBand');
                    openCards[0].classList.replace('open', 'match');
                    openCards[1].classList.add('animated', 'rubberBand');
                    openCards[1].classList.replace('open', 'match');
                    
                    //check if all 16 cards are matched
                    gameOver();
                    
                    //increments the moves and checks if the player loses a star
                    setTimeout(function () {
                        movesCounterFunc();
                        starsWon();
                    }, 100);
                    
                //if they don't match...
                } else if ((openCards.length === 2) && (openCards[0].innerHTML !== openCards[1].innerHTML)) {
                    setTimeout(function () {
                        openCards[0].classList.add('danger', 'animated', 'wobble');
                    }, 400);
                    setTimeout(function () {
                        openCards[1].classList.add('danger', 'animated', 'wobble');
                    }, 400);
                    setTimeout(function () {
                        openCards[0].classList.replace('rotate', 'reverse');
                    }, 1250);
                    setTimeout(function () {
                        openCards[1].classList.replace('rotate', 'reverse');
                    }, 1250);
                    setTimeout(function () {
                        openCards[0].classList.remove('danger', 'show', 'open');
                    }, 1200);
                    setTimeout(function () {
                        openCards[1].classList.remove('danger', 'show', 'open');
                    }, 1200);

                    //increments the moves and checks if the player loses a star
                    setTimeout(function () {
                        if ((!target.classList.contains('open')) && (!target.classList.contains('match'))) {
                            movesCounterFunc();
                            starsWon();
                        }
                    }, 1250);
                }
            }
        }
    }

    //function for the repeat btn after the previous game has finished. if hit, a new game starts
    function repeatGame() {
        container.classList.remove('blur');
        message.classList.add('hide');
        restart();
    }
    
    //event listeners
    restartBtn.addEventListener('click', restart);
    deck.addEventListener('click', clickEvent);
    repeatBtn.addEventListener('click', repeatGame);

});
