## Task undertsanding

In Chatlog, we have to show the logs of chat in list form.
And as it is not a chat application, ability to send and receive messages is not considered in the scope.

# Run the application

## To run server, I have user json-server for mocking the API

1. npm install -g json-server
2. json-server --watch server/db.json --port 3001
3. Serve APIs are available at "http://localhost:3001/members" and "http://localhost:3001/messages"

## To run client, I have used Create-React-App

1. npm install
2. npm start
3. Open http://localhost:3000/ to see the changes

## Features

1. All features requested in the spec are done.
2. Sematic HTML is used. Tags like div, span are avoided.
3. Made sures the designs work for mobile and desktop.
4. Implemented lazy loading of images. If 100 images laod once, it might be performance overhead.
   API call for data is made once, but we load logs in the interval of 10.
5. Default avatar for null values is not provided intentianlly as it is explicitly mentioned in the spec.
