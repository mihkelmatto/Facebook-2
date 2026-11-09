# Homework 3 requirements
You are required to create your app using Vue + Vuex techniques
The term "page" might mean a view or a single page component (SPC).


## general

+ the footer should be a component that appears on both "pages". (1 point)
    - it should include some basic information that traditional footers include

## home page

- post has to be a component that relies on vuex global store to aquire/fetch its content information (3 points)
    + is a separate component
    - relies on vuex global store

- post should have a like button accompanied with the number of likes (2 points)
    + like button works and can read like data from file
    - new like data is saved to file

- add a button to the main page that resets the number of likes in all posts to zero (2 points)

## signup page

- signup page has a structure shown in the instructions (0 points)

- the signup "page" should include a form that contains all required elements (1 point)
    - email, password, signup button
    - header, footer components

- password validation on the signup page (3 points)
    - length of 8-15 characters
    - at least one uppercase alphabet character
    - at least two lowercase alphabet characters
    - at least one numeric value
    - starts with an uppercase letter
    - includes the character "_"
    - failed validation should display "password is not valid: {failed conditions}"

## done
+ home page has a structure shown in the instructions (0 points)
+ the header should be a component that appears on both "pages". (2 points)
    + it should include navigation links to both pages

+ overall styling of the app (1 point)

Do not forget to push all your changes to your repository.  
At least one “commit” from every team member. 

# Vue migration
- config.js
- Use real data instead of placeholders