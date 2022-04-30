# Quizzio

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.
* Link to the site: https://quizzio-2daf3.firebaseapp.com/

## Register form
* Reactive form
* Validations: email, password security level, password and repeat password are equal
* Register button disabled if form is not valid
* Toggle visibility icon for the password and repeat password field
* Toast messages received upon registration success/fail

## Login form
* Model driven form
* Separate field validation (email/password) and form submission validation (if logged in successfully))
* Login button disabled if form is not valid
* Toggle visibility icon for the password field
* Toast message upon successful/unsuccessful login

## Quizzes
* All quizes are public and can be taken
* Expand all and collapse all funcionality
* Test result dialog appears on test submission and shows how many correct answers are given.
* If correct answers are more than 50% sucess message appears in the dialog, otherwise 'Try again!' message appears
* User can't take more actions on the quiz and need to use the 'Back to quizzes' button to go to the homepage
* Creators can delete and edit quizzes

## Homepage
* Logged in user can like or dislike quizz
* Liked quizzess will apper in the Favourite section in the user provfile
* Star icon will appear for liked quizzed
* Share button copu the quiz link to the clipboard
* Toast messages confirming actions

## Profile
* User can see quizzes created by them
* User can see quizzes they liked under favourites
* User can unlock achievements

## Add quiz
* Can add true/false question
* Can delete and edit questions before saving the quiz
* Validations for the inputs 


## Route guarding
* Can activate guard for Profile and Create Quiz to be available only to logged in users

