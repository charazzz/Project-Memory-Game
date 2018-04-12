# Memory Game Project

Memory Game or Matching Game also known as Concentration Game is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards. 

## Table of Contents

* [About](#about)
* [Getting Started](#gettingStarted)
* [Prerequisites](#prerequisites)
* [Instructions](#instructions)
* [Built With](#builtWith)
* [Resources Used](#resourcesUsed)
* [Authors](#authors)
* [Contributing](#contributing)
* [Acknowledgments](#acknowledgments)
* [Useful links](#usefulLinks)


## About
This is the third project of the Google Front-End Nanodegree Program. 
The student must take the starting code (which includes some HTML and some CSS) and transform it to an interactive and responsive game by adding JavaScript code and responsiveness through CSS.


## Getting Started

Just open the HTML file in your browser and start playing.


## Prerequisites

    Browser
    Internet connection


## Instructions
- There are 8 pairs of cards (each with a different symbol on it). The player's objective is to match all 8 pairs after clicking on them piece by piece. 

- Every time a card is clicked, its symbol is revealed and remains revealed until a second card is clicked too. Then, when the two cards are open, it checks if their symbols match or not. 

1) If they match, they remain open and the player tries to match the remaining cards until he matches them all. 
2) If not, they close and the player selects another pair of cards following the same process.

- There is a restart button on the top right corner of the screen which, when pressed, resets the current game and stats and brings it to the initial condition (time, moves, stars set to zero)

- When the player hits the first card, the timer starts to count the time taken until all 16 cards are matched.

- Once the player reaches 20 moves, he loses one star. When he reaches 30, he loses another one.

- After all 16 cards are matched, a message box appears on the screen and informs the player how much time he took in order to match all the cards, the number of the  stars won and the number of the moves made.


## Built With

    HTML,
    CSS,
    Pure JavaScript

    
## Resources

    Google fonts
https://fonts.google.com/

    Font Awesome
https://fontawesome.com/

    Animations
https://daneden.github.io/animate.css/


## Authors

    Udacity Team - Starting code (basic HTML, Basic CSS),
    Chara Zogkou - JavaScript, Responsiveness, some HTML, some CSS
    

## Contributing

Please read CONTRIBUTING.md for details.


## Acknowledgments

More functions will be added to the project gradually in order to become more complex and interesting. 


## Useful links

    Udacity's Project Specification
https://review.udacity.com/#!/rubrics/591/view

    Udacity Frontend Nanodegree Style Guide
http://udacity.github.io/frontend-nanodegree-styleguide/index.html
http://udacity.github.io/frontend-nanodegree-styleguide/css.html
http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html

    Starting Code
https://github.com/udacity/fend-project-memory-game







