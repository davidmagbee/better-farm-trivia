# Project Link
Project 1 GitHub Repo Url: https://github.com/davidmagbee/better-farm-trivia

# Game Link
Trivia Game Url: https://davidmaghbee.github.io/better-farm-trivia/

## Description
General Assembly SEIR-1118 Unit 1 Project: Build a game with HTML, CSS, and JavaScript.
Trivia game about Better Farm.
The starting trivia base is about the quantity of animals, people, and structures at Better Farm.

The game is a simple multiple choice trivia game. Upon answering the provided question, the game will inform the user of the accuracy of their answer, tally their score, and automatically load the next question for the user. When the user has completed the game, they will be notified that the game is over and provided with their total score out of the possible correct. 

This is the first game created by this developer. It is a humble offering, and it will grow and evolve over time. Please play the game, and hopefully enjoy it. Any questions, comments, or suggestions can be sent directly to the developer via GitHub, or provided points of contact.

## Features
### Bronze (MVP)
    • Questions
    • Answers
    • Answer Verification
    • Move on to next question
    • Score Tally

### Silver
    • Modal Introduction
    • Add Dev Social Links (page bottom)
    • Multiple Question Sets (user chooses topic)
    • Question randomization (removed from MVP for improved functionality)
    • Timer
    • Tiers of difficulty

### Gold
    • Answer randomization (location placement)
    • Residual Scoreboard (survives refresh, user competition)
    • Question Timer & Overall game play timer (to be included on Scoreboard)
    • Lifeline options (50/50, Ask the audience, Phone-a-friend)
    -- Phone-a-friend and Ask the audience will need to be modified to fit this game format (perhaps using the social media pages?)
    • Score tally animation (a growing tree, other plant, or a growing herd of alpacas?!)

## Technologies Used
    • HTML
    • CSS
    • JavaScript

## Project Issues
    • Issue A: The main overarching issue throughout this project was over-complication...
    • Issue B: When next question functionality via a button was still in place, the user could bolster their score by selecting the correct answer multiple times prior to moving on to the next question. In order to streamline the project and hit the MVP goal, the next question button was removed to prevent this issue. Instead, the current question/answer pool were removed upon answer verification and a new question/answer pool provided for the user.

## Your Error
    • Issue A: There was not enough thought initially applied to the project planning process and truly analyzing the concept to consider the requirements for MVP, and what could easily be placed in higher tiers for the game development and evolution. 
    • Issue B: There was no functionality in place to prevent multiple user inputs. This will be added for later iterations of the game, especially as the game will evolve to have randomized questions, answer placement, additional question sets, and a scoreboard.

## Why you think you're getting this error

## Code Snippet

```
<insert screenshot of deployed project>
```

## Everything you've tried
    • Question randomization - During initial build process, the questions were randomly pulled from the array of questions. This feature was moved to a later version of the game to ensure functionality for the MVP and meet the requirement of the "winning condition."
    • The game initially had start game and next question buttons, but they were removed to improve functionality and user experience. A reset game button was applied to allow users to reset the game (refresh the page) at any point, should they wish to start over or are just too frustrated to keep playing. 


## Project Log
- Idea formation issues around envisioned project type versus desired functionality. Envisioned a trivia game in the style of a flash card game - which derailed project development start a bit. Revisited KISS concepts to walk back conceptual ideas to the MVP and building out Bronze/Silver/Gold deployments.
- MVP / Adjusted functionality to loop through questions instead of randomizing questions. Questions populate starting with first array item, and after the array has been iterated, an event listener populates a score page. Still needs a great deal of adjustment for css and some code cleanup and button cleanup. Also created an alt-script file to store removed code and alternate functionality for future iterations of this game project.
