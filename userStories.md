# Register

As an unauthorized user, I want to be able to create an account, so that I can use the application's services.

## Questions

-   Will the user enter a username and an email to signup?
    -   Both a username and email will be required
-   Will we confirm their password during signup?
    -   Yes
-   What routes should we use for signup?
    -   None, the signup form will be a modal that pops up when called upon
-   Where should the user be redirected after signup?
    -   The user will be redirected to their profile.
-   Will we allow OAuth authentication via a third party?
    -   Not yet
-   What happens if the user with the username or email already exists?
    -   The form will render the error upon submission.
-   What happens if the user enters the wrong password confirmation?
    -   The form will render the error upon submission.

## Acceptance Criteria

**Given that I'm a user who has not signed up yet and**

-   When I first want to Register
    -   I will see a form within the initial splash page with an email/username and password field with a "Log In" button to submit the form.

**Given that I'm a user trying to make an account,**

-   When I try to fill out the form with an email or username that already exists with a valid password and press Enter or press the "Register" button

    -   At the top of the form, I will see a message that says, "User with that username already exists or User with that email already exists."

-   When I try to fill out the form with a valid email, username, and \* password and press Enter or press the "Register" button,

I'll be redirected to the Homepage at "JemyCake.com/"

**Given that I'm a user that just signed up**

-   When I refresh the homepage at the / route

    -   I'll be logged in

-   As an unauthorized user, I want to be able to login to the website via a form, so that I can access my private information.
    -   If your credentials are in the database, you'll be permitted access.

## Questions

-   Will the user use a username or email address to log in?
    -   User can use either their username or email address to log in.
-   What routes should we use for log in?
    -   User will log in via the log in modal that will pop up when called upon.
-   Where should the user be redirected after login?
    -   User will be redirected to / route home page.
-   Will we allow OAuth authentication via a third party?
    -   Nope.
-   What happens if the user doesn't exist yet or the user enters a field with the wrong credentials?
    -   Display the message Invalid Login with the wrong credentials.
-   Will the user be able to reset their password?
    -   Maybe.
-   Should logging in use session-based or token-based authentication?
    -   Token-based authentication.

## Acceptance Criteria

**Given that I'm a logged-out user:**

-   When I access the Splash page

    -   There will be a login form with a "Username or Email" field, a password field, and a "Login" button to submit the form.

-   When I try to fill out the form with an invalid email/username and \* password combination and press Enter or press the "Login" button

    -   Then at the top of the form, I will see the message: Invalid Login.

-   When I try to fill out the form with a valid username/email and \* password combination and press Enter or press the "Login" button

        - Then I will be redirected to the '/' route homepage

    **Given that I'm a logged in user**

-   When I refresh the homepage at the / route

    -   Then I will be logged in

-   As an authorized user, I want to be able to log out of my account, so that I can hide my account information from others using a public device.
    -   Your account information will be protected from unauthorized users upon logging out.

## Questions

-   What happens when the user logs out?
    -   User will be redirected to the splash page.
-   How will the user log out?
    -   User will click the Log out button in the User menu that is accessible from the the navigation menu.

## Acceptance Criteria

**Given that I'm a logged-in user and**

-   When I'm on any route
    -   Then I should be able to access the home, direct messages, feed, likes on the homepage and log off whenever.
-   When I click the Log out button

        - Then I will be redirected back to the splash page to login or create a new account.

    **Demo User**

-   As a prospective user who wants to demo the functionality of Jemy Cake, I want access as a demo user by a single click on the splash page.
    -   Demo Login will be a functional.

## Questions

-   Will the user enter a username or an email address to login?
    -   User will can login via the "Demo User Login" button if they want.
-   What routes should should we use for login?
    -   User will log in via splash page login forms.
-   Where should the user be redirected after login?
    -   User will be redirected to /.

## Acceptance Criteria

**Given that I am a logged-out user**

-   When I'm on the splash page - There will be a button that will let me login as a demo user
    **Given that I am logged in as the demo user**
-   When I refresh any page
    -   Then I should be logged in as the demo user

## Questions

-   What route will show all of the recipes on my feed?
    -   In the profile route /<username> you'll view the access of your digital user history.

## Acceptance Criteria

**Given that I am a logged in user**

-   When I'm on the / route

    -   Then I will see altered version of the splash page, with a profile picture and leader boards of trending recipes and insights into accounts that I follow.

-   When I'm on my friend's page

    -   Then I will see the details of their biography, username, profile picture and photos for their corresponding username

**Post recipes**

-   As a logged in user, I want to be able to post recipes witha a photo or video to my profile, so that I can selectively share my recipes updates with everyone!
    -   This feauture is included.

## Questions

-   What route will show the form to create a recipe?
    -   /<username>

## Acceptance Criteria

**Given that I am a logged in user**

-   When I navigate to /<username> try to post a new recipe
    -I'll see a rolling-hover tab with a "New Recipe?" button on a the bottom of the page that will give access to a form for designated content.
-   When I successfully submit my recipe - Then I will be redirected to my profile where that post will be in the first slot of my recipe list.
    **Delete Post**
-   As a logged in user, I want to be able to delete or archive one of my recipes whenever I feel like it.
    -This feature is available as a part of the CRUD format for features on Jemy.

## Questions

-   How will a user delete one of their recipes?
    -   There will be a "Delete" option hidden within the ellipses button on top-right corner of the post.
-   Where will the app redirect to when a recipe is deleted successfully?
    -   The app will redirect to the /<username> profile page with their most recent recipe in the first slot of the media portion of the page.

## Acceptance Criteria

**Given that I am a logged in user and and just posted**

-   When I navigate to my profile
    -   Then I will see the most recent recipe with the option to delete it
-   When I click on the delete button on the post - Then I will get rerouted my profile page with a message notifying me that the recipe was deleted.
    **Given that I am a logged in user and not the owner of a post**

-   When I navigate to the user's profile page - Then I will not get the option to delete the post when clicking on the ellipses.
    **Update a Post**
-   As a logged in user, I want to be able to edit the caption of one of my recipes.

## Questions

-   How will a user edit one of their recipes?
    -   There will be an "Edit" button on within the ellipses of a recipe on that profile page.
-   Where will the app redirect when the "Edit" button is clicked?
    -   The user will stay on the profile page, and the name and description fields will change into input fields.
-   Where will the app redirect when the "Edit" form is submitted?
    -   The user will be redirected back to the profile page.

## Acceptance Criteria

**Given that I am a logged in user**

-   When I navigate to my profile page

    -   Then I will see the option to edit it.

-   When I click on the edit button on the recipe

    -   Then I will see edit forms with the fields I am able to change.

-   When I submit that edit form
    -   Then I will see the updated recipe.

**Given that I am a logged in user and not the owner of a recipe**

-   When I navigate to that recipe
    -   Then I will not see the option to edit it

**Create a Like**

-   As a logged in user, I want to be able to like a recipe, so that I can share random opinions.
    -   A like feature for recipes will be included in the functionality of this app.

## Questions

-   How will a logged in user make a comment for a post?
    -   On the /<usename> profile page or feed that corresponds to that post users will be able to comment.

## Acceptance Criteria

**Given that I am a logged in user**

-   When I navigate to a user profile

    -   Then I will see a button "add a comment" portion under the recipe

-   When I click the "Add a comment" field on a recipe

    -   Then I will see an input field that lets me type out my comment and submit.

-   When I submit my comment
    -   Then I will see my comment on that recipe

**See all the likes for a Recipe**

-   As a logged in user, I want to be able to see all the users who liked the recipe, so I can pinpoint popular users.

## Questions

-   Where will all the likes be shown for a recipe?
    -   On that user's recipe

## Acceptance Criteria

**Given that I am a logged in user**

-   When I navigate to a recipes detail page - Then I will be able to see all likes made on a recipe.
    **Delete your comments for a recipe**
-   As a logged in user, I want to be able to delete one of my comments, so that I can remove an old content.
    -   Users can unlike recipes if they change their minds.

## Questions

-   How will a user be able to delete one of their like on my recipe?
    The user may click the like button a second time to "unlike" a recipe.

## Acceptance Criteria

**Given that I am a logged in user**

-   When I am on a user's recipe where I have left a like

    -   Then I can click the like button to unlike a recipe.

-   When I click on a "Like" icon a second time.
    -   The like will be removed
