import express from "express";
import path from "path";
import mongoose from 'mongoose';
import { apiRouter } from './routes/api';
import { json } from 'body-parser';
import { dbUrl } from './settings/config';
//database connection
mongoose.connect(dbUrl, )
.then((res) => {
    console.log(
        'Connected to Distribution API Database - Initial Connection'
    );
})
.catch((err) => {
    console.log(
        `Initial Distribution API Database connection error occured -`,
        err
    );
});


const app = express();
const port = 8080; // default port to listen

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });

  //Header access
  // app.use(function (req, res, next) {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader("Access-Control-Allow-Credentials", "true");
  //   res.setHeader(
  //     "Access-Control-Allow-Methods",
  //     "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  //   );
  //   res.setHeader(
  //     "Access-Control-Allow-Headers",
  //     "Access-Control-Allow-Headers, Origin,Accept," +
  //     "X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  //   );
  //   res.setHeader("Cache-Control", "no-cache");
  //   next();
  // });
  
// define a route handler for the default home page
app.use(json());
app.use(apiRouter);
app.get( "/", ( req, res ) => {
    // render the index template
    res.json({"status":"working"})
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );