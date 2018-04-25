# QuickChat

QuickChat is a web application that allows users to post messages on a wall from wherever they are in the world.

QuickChat was built in Node.js and Express, with messages stored in a Postgres database. Bootstrap is used to add a degree of usability and responsiveness, so you can use QuickChat on mobile, tablet or desktop devices.

Our chat application offers an intuitive and incredibly simple way for people around the world to communicate without barriers. Let's all have a QuickChat :)

# Walkthrough

- When you land on the QuickChat homepage you are greeted with an introduction to what we're all about
- Simply navigate to the chat wall by clicking 'View chat'.
- Add your name and message by filling in the form at the top of the page and clicking submit.


# Usage

1. Clone the repo to your machine
1. Install the dependencies by running `npm install`
1. Start up Postgres and create databases called blocipedia-dev and blocipedia-test by running the code below (recommend installing Postgres using homebrew if you don't have it)
```
$ pg_ctl -D /usr/local/var/postgres start
$ createdb -U postgres -w blocipedia-dev
$ createdb -U postgres -w blocipedia-test
```
4. Start the application by running `npm start`
5. Navigate to http://localhost:3000/ in your browser
6. Message to your heart's content!

# Technical choices

Node and express were used because they make it easy to create scalable web applications and to manage storage and CRUD behaviours for the messages.

# With more time...
The application is completely barebones at the moment, I focussed only on getting the essential plumbing of creating and viewing the messages working within the time limit. If I had more time some things I would do are:
- increase test coverage
- deploy to heroku to allow users anywhere to use the chats
- allow editing, deleting and updating messages
- add user authentication
- allow users to add profile images
- improve visual styling so that the message form is more compact and perhaps sticky to the bottom of the screen
- general branding and styling improvements
- scroll users to the bottom of the page when they load the messages page, so that they always see the most recent messages on load
- allow the creation of individual chat rooms
- allow users to use emojis and upload images

