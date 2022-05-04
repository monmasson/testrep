# github.io
Project #1: The Game
v Building a Java script quiz game with HTML, CSS, JavaScript (this game will be played using the DOM, not the console.

v Hosted on netlify / vercel / githubpage.


v Game Objective: Test you JS skills based on a quiz style game. The goal is to choose between the two options (true/false) correct answers by choosing from the given two options. NEED TO DECIDE IF GOING WITH TRUE/FALSE OR TWO OPTIONS. MAYBE MIX.

v Players Required- 2 players

v Scoring: Each correct answer receives a 2-point score.

v Win state: Maximum score 20. Player with the maximum score out of 20 wins!

v Loose state: Player with the lowest score out of 20 loses.


v Technologies used:

.HTML

.JS

·CSS

Resources to be used : Eloquent Javascript, Khan Academy, Codesmith, pythontutor.com,developer.mozilla.org
https://livebook.manning.com/book/get-programming-with-javascript

 

 

 

 

 

 

 

v Approach taken

·      Listed the requirements of the game

·      Created a pseudocode

·      Designed the page display for every stage of game.

Start of the game

1.     opening page (background color: two tones-black on left and yellow on right to represent JS.

2.     Logo of JS (steaming cup on the right bottom end)

3.     Display: How well do you know your JavaScript?

4.     Display: Player 1 name box and Player 2 name box

5.     Display : choose your level ===>>>> drop down menu when hoovered to choose from :  Beginner , Intermediate, Advanced. At present will only attempt 10 questions on EASY level

6.     Display: Start Game BUTTON and button for Game rules/scoring instructions (pop up)

7.     Need to style all the buttons, have hoover effect on buttons, add drop down option on ‘level’ button, create a form with HTML for player name info.

Second page display:

1.     On top at headline display Player 1 score on left, question number in the middle (eg: 1/10) and Player 2 score on the right

2.     Below display who’s turn is it. : Player 1 your turn OR Player 2 your turn

3.     Question block

4.     Answer options (right now will have two responses)

5.     JS logo at bottom on right corner

6.     Style each block

7.     Click/Hoover option on answer block to submit

8.     Event listener to move to next page once the answer has been clicked.

Following pages display

1.     Layout will be the same.

2.     Score board need to change based on the response.

3.     Questions and answer block will change.

4.     Will toggle between the player’s turn based on who started first.

Last Page

1.     Display scoreboard: Player 1 and Player 2

2.     Display Player----- is the winner! Player ------ keep brushing your skills.

3.     Option to : End game    OR  Reload

4.     Continue with the color theme and logo.

                                         

                                         

 

Broke down the coding requirements such as class, buttons, ids, several functions, event listeners (where and when to use), Math functions,   
Possible CLASSES required :   1. Start game.
                              2. Game rules (need to make it pop up)
                              3. questions
                              4. answers (true/false)
                              5. selector for difficulty level (first will only have Easy as working . Future goal to add to intermediate and advanced )
                              6. scoreboard
                              7. Player1
                              8.Player 2
                              
                              
 Possible BUTTONS required :   1. Start button
                               2. anwer choice buttons with event listener to move to next page on "click"
                               3. Restart button
                               
                               
Possible FUNCTIONS required within the CLASS
                                1. Function- select answers (need to attach true/false method to it AND math function to change the scoreboard)???? NEED TO FIGURE OUT?
                                2. Function - check answer  (need to have if METHOD to add scores to the scoreboard to the player class .
                                3. Function - reset game
                                4. Function - Display ( need information of the two players to add their names, 

 

 

 

 

 

v link to live site

 

 

 

 

 

v Installation instructions

 

 

 

 

 

 

 

 

v unsolved problems 

 

 

 

 

 

 

 

v Challenges
Following DRY - especially in the CSS code . 
For example: I had a lot of Buttons on my code. I wanted all to look uniform so the styling was the same. Instead of compiling all the changes under one common '.btn', I had every single'btn' element listed out untill I followed DRY.

Ran into a lot of error" addListner not working: reading null" on JS. Figured out following troubleshootings.
1. Check the <script> tag positioning on HTML. Make sure it is either right after    at top or just above the ending </body> section at bottom.
2. Try adding 'defer' at the end such as : <script src="projectgame.js" defer></script>  
3. 3. If still having trouble then try putting addListner inside the appropriate function. Why???? There could be a lag between the JS and HTML file running so if we have an ampty function such as addListner 'click' startGame(), It might read it as null. 

Check for spellings, case sensitivity, "" vs '', pairing of the bracets () [] {}, ; in CSS after each line.
 

 

 

 

 

 

 

 

v Future improvements

 
