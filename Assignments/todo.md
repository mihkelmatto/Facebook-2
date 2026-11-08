# Homework 2 requirements

- Create JSON files for 10 different posts. (1 point) 

+ Integrate  the  JSON  file  into  your  project,  and  modify  the  Fetch  code  to  retrieve/fetch  the JSON objects information from it. (1 point).
    ??? Note: do not delete the code related to fetching the data from the online source (task 4); just comment it out. 

+ validate the JSON files on an online website. (1 point)
    done using jsonlint.com

+ Create a dropdown menu [username, email, logout] that opens by clicking on the personal photo (1 point)

+ find an online host (endpoint) for JSON  files (1 point)
    done using jsonbin.io
+ Fetch the JSON data from the host's API (2 points)
+ find a solution to dynamically load photos. (1 point)
+ The overall styling of the page (1 point) 
+ Deploy your project as a GitHub Pages site (1 point)  


<<<<<<< Updated upstream
=======
## general

+ the header should be a component that appears on both "pages". (2 points)
    + it should include navigation links to both pages

- the footer should be a component that appears on both "pages". (1 point)
    - it should include some basic information that traditional footers include

## home page

- home page has a structure shown in the instructions (0 points)

- post has to be a component that relies on vuex global store to aquire/fetch its content information (3 points)
    + is a separate component
    - relies on vuex global store

- post should have a like button accompanied with the number of likes (2 points)
    + like button works and can read like data from file
    - new like data is saved to file

- add a button to the main page that resets the number of likes in all posts to zero (2 points)

## signup page
 GABI 8.11

- signup page has a structure shown in the instructions (0 points)

- the signup "page" should include a form that contains all required elements (1 point)
    - email, password, signup button
    - header, footer components

- password validation on the signup page (3 points)
    - length of 8-15 characters +
    - at least one uppercase alphabet character
    - at least two lowercase alphabet characters
    - at least one numeric value
    - starts with an uppercase letter
    - includes the character "_"
    - failed validation should display "password is not valid: {failed conditions}"

## done

+ overall styling of the app (1 point)
>>>>>>> Stashed changes

Do not forget to push all your changes to your repository.  
At least one “commit” from every team member. 


# other

- addPost submit event
- Figure out what to do with sessionStorage / localStorage
    - session init
- Session.js: use actual uid