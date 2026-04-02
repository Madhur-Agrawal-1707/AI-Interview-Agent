1. first i created a package.json file using npm init and then i added the follwoing code in the package.json file to run the server using node index.js command. I also added "type": "module" to use ES6 modules in my project.

2. then i installed all the required dependies using npm i express mongoose cors dotenv nodemon cookie-parser jsonwebtoken   
    <!-- i can download all the dependies separately but i prefer to download all the dependies at once using npm i command. -->

3. after i created a index.js file and added the following code to create a server using express. i also added dotenv to use environment variables in my project. i created a .env file and added the PORT variable to it.

4. finally i ran the server using npm run dev command and the server is running on the specified port.

5.  after this i created a new folder named config and inside that folder i created a file named connectDB.js and added the following code to connect to the MongoDB database using mongoose. i also added the MONGODB_URL variable to the .env file to store the connection string for the database. i set the IP address to 0.0.0.0/0 to allow connections from any IP address from the MongoDB Atlas cluster. i also added the connectDb function to the index.js file to connect to the database when the server starts.


