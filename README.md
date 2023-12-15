# Midwestern Tech Challenge

**_Please be aware, this project is still in development and parts of it may be changed in the near future._**

My mono-repo solution for the Midwestern Tech Challenge.  
Currently, the solution consists of these projects:

1. client - A React application that serves as the front-end for the solution.
2. server - A Node.js application using Express that serves as the back-end for the solution (**_Currently only used to POST the contact form_**).
3. database - A MySql database that stores the data for the solution (**_Currently only storing contact form information_**).

## Getting Started

First things first... navigate to the directory of your choice and clone the repo:

```bash
git clone https://github.com/KleinMason/midwestern-tech-challenge.git
```

Then, navigate into the newly created directory and run the following commands:

```bash
npm install &&
npm run restore
```

This will install all of the dependencies for the solution and all of its projects. The restore command will also run the build command for each project. With that, were almost ready to go! We just need to provide our database and server project access to a MySql database. Lets start with the database...

### Configure the Database

1. Open up the database project in your favorite editor and navigate to the `mysql-shaman.sample.json` file.
2. Copy this file and rename the copy to `mysql-shaman.json`.
   - Note: This file will contain some sensitive information. This file is ignored by git so you don't have to worry about accidentally committing it.
3. Open up the `mysql-shaman.json` file and replace the values for the `host`, `user`, `password`, and `database` properties with the values for your MySql database.
   - Note: The `database` property should be the name of the database you want to use for this solution. **_This database must already exist._** You can create it using MySql Workbench or any other such tool.
4. Finally, run the following command from the database project directory:

```bash
npm run scaffold
```

Your database should now contain all the tables we need! Now we just need to configure the server project to use the database.

### Configure the Server

This is very similar to configuring the database. Lets get started:

1. Open up the server project and navigate to the `app\config\app.config.sample.json` file.
2. Copy this file and rename the copy to `app.config.json`.
   - Note: This file will also contain some sensitive information. But, you guessed it, it's ignored by git so you don't have to worry about accidentally committing it.
3. Open up the `app.config.json` file and replace the values for the `host`, `user`, `password`, and `database` properties with the values for your MySql database.

That's it! Now we're ready to run the solution.

### Run that Solution 🎊🎉

To run the solution, simply run the following command from the root directory of the solution:

```bash
npm run serve
```

This will start the server and the client. The client will be available at `http://localhost:5173` and the server will be available at `http://localhost:3000`.
