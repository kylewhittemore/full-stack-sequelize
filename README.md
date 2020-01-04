# **full-stack-sequelize Template**
This template is meant to get you up-and-running with a full-stack web application scaffolded out and ready to run using node, express, and sequelize.

### **Additional features**
* 'dotenv' environmental variables package configured for sequelize
* nodemon package configured
* ESlint package configured for Airbnb styleguide

### **How to use this template**
* Click "use template" next to the clone button, this will create a new repository on *your* github account.
* Clone the repository down to your machine.
* run &nbsp; `npm install`
* run &nbsp; `touch .env` &nbsp;in the root of your repository
* open the .env file
* add the four environmental variables that will be used to connect to the database:
    <br/>       `DB_PASSWORD=yourpassword`
    <br/>       `DB_HOST=127.0.0.1`
    <br/>       `DB_USER=root`
    <br/>       `DB_NAME=sample_db`
* run &nbsp; `npm start` to start the server with nodemon which will automatically refresh after any server-side code changes

![image](./public/assets/images/dotenv.png)