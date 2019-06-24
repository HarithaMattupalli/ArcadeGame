# Classic Arcade Game Project

Arcade game sets the goal of the player to reach water without colliding enemies. This project has basic game functionality but covers Advanced Object-Oriented JavaScript concepts and HTML5 Canvas.

## Table of Contents

- [Instructions](#instructions)
- [Download the Scratch](#download-the-scratch)
- [How to Run](#how-to-run)
- [How to Play](#how-to-play)
- [Tools/Techniques](#tools/techniques)
- [Project Dependencies](#project-dependencies)
- [Project Content](#project-content)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Download the Scratch
- To complete the project you need not develop it from scratch.
- The starter code can be downloaded from GitHub repository.
  - Arcade Game project repository on GitHub : <https://github.com/udacity/frontend-nanodegree-arcade-game>
- The starter project has some HTML and CSS styling to display a static version of the Arcade Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the JavaScript file primarily.
- To get started, open `js/app.js` and start building out the app's functionality.

## How to Run

- To start the game, open the index.html file in your browser. For this your browser must support HTML5.
- We can also run index.html file using servers such as `Web Server(eg.200 OK)`,`Python Server`.

## How to Play
- The user can choose any of the four keys to move the player:
  - `Up` arrow
  - `Down` arrow
  - `Left` arrow
  - `Right` arrow
- The objective is to get your character safely to the top of the screen using the four keys Up, Down, Left, Right in any random manner. The game ends if your character collides with the moving bugs.
- If you win or lose, the game resets with the player at the bottom of the screen. The game runs continuously until you close the page.
- You can have fun with the game [here](https://harithamattupalli.github.io/ArcadeGame/)

## Tools/Techniques

- Object-Oriented JavaScript
- Constructor functions to create multiple Enemy instances
- HTML5 Canvas API
- Resource loading via Immediately-Invoked Function Expressions (IIFE)

## Project Dependencies

-  Modern Web browser : Which supports HTML5 to play this game.
-  Keyboard : To move the player around the screen.
-  Sweet Alert : [Check link here](https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css)

## Project Content

-  The project consists following files:
   -  `index.html` :  load this file in a web browser to play the game
   -  `css/style.css` : style sheet for the web page holding the game
   -  `images/` : directory containing images required in the game
   -  `js/app.js` : main JS file that instantiates the enemy and player objects
   -  `js/engine.js` : contains the main game loop and manages game rendering
   -  `js/resources.js` :  handles the loading and caching of graphics

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
