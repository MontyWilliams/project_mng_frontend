# Running the application
install dependencies 
set up mongo db
npm run start in root folder
in another terminal npm run start in client folder

## Using Apollo
The appolo client is just like any state manager in react. Just wrap it around
a component like you would use context!

## Coors issue
There is a cross acces issue between react app and server as appollo tries to acces the data base with graphiql
- for this reason cors is imported within the index.js file in the server so that the app is initialized with cors access


