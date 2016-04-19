The Masterplan...
by Catherine McMahon
Date: April 7th, 2016

Objective: A website to supplement students’ preparations for the APCS exam through gamified multiple choice quizzes (like the multiple choice portion on the exam). Students can create accounts and have a personalized study journey and earn points when they complete timed multiple choice styled quizzes APCS concepts.  
Prerequisite Knowledge: What is on the test (Barron’s book), successful study techniques for the AP, backend management for users (Firebase).

Main page: 
* Study for the APCS        
* w/ ‘start learning’ button -> takes you to Sign Up page


Sign Up page:
* First + Last name, email, Password + Password confirmation
* Sign Up button -> Home page
* Sign in button -> Sign in page


Sign in page: 
* Email, Password
* Sign in button -> Home page


Home page:
* Top bar w/ Name + Logout button
* Logout button -> Main page
* Side bar:
   * points earned + achievements reached. 
   * Share buttons 
   * Instructions
* Main content:
   * Every chapter has it’s own div w/ stylized content box
   * Title + Body for each chapter 
   * “Start” Button -> Game page


Game page:
* Multiple choice 
* Hint button -> reveals hint
* Done button -> reveals right answer w/ explanation 
* Next button -> use Ajax/Jquery to pull content from server for next quiz Q
   * **When finished with last question, go to Home page but have a pop up over it.


Pop up div:
* Show score + points earned
* Exit or “X” button to close pop up and return to Home page


Tools to Use: Firebase, the Barron's Book, Bootstrap, Mixpanel & GA Dash for Inspiration.