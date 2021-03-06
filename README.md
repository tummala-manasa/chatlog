## Task undertsanding

In Chatlog, we have to show the logs of chat in list form.
And as it is not a chat application, ability to send and receive messages is not considered in the scope.

# Run the application

## To run server - I have user json-server for mocking the API

1. cd chatlog/
2. npm install -g json-server
3. json-server --watch server/db.json --port 3001
4. Serve APIs are available at "http://localhost:3001/members" and "http://localhost:3001/messages"

## To run client - I have used Create-React-App

1. cd chatlog/
2. npm install
3. npm start
4. Open http://localhost:3000/ to see the changes

## To run tests - I have used Enzyme, Jest

1. cd chatlog/
2. npm run test

## Features

1. All features requested in the spec are done.
2. Sematic HTML is used. Tags like div, span are avoided.
3. Made sures the designs work for mobile and desktop.
4. Implemented lazy loading of images. If 100 images laod once, it might be performance overhead.
   API call for data is made once, but we load logs in the interval of 10.
5. Added unit test cases for each component.
6. Default avatar for null values is not provided intentianlly as it is explicitly mentioned in the spec.
