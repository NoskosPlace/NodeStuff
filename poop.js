var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mysql = require('mysql');
const { response } = require('express');
const e = require('express');
// Create the database connection
// =============================================================================
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'storee'
});
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8500;        // set our port
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


router.delete('/contestant', (req,res) => {
    // what we need to pass to delete
    let recordId = req.body.contestantId;

    if(recordId === '') {
        console.log('If 1');
        console.log('empty id');
        res.status(404).json('Contestant Id must not be blank');
        return;
    }

    //check that the recordId is an integer
    // console.log(typeof Number(recordId)); //number
    // console.log(typeof (recordId));  //string
    // console.log(recordId);   //po
    // console.log(typeof Number.isInteger(recordId));  //boolean
    // console.log(Number.isInteger(recordId));  //false
    // console.log(isNaN(recordId));  //true
    // check if not a number and bail the fuck out
    if(isNaN(recordId) === true) {
        console.log('If 2');
        console.log('contestant id is not a number');
        res.status(404).json('Contestant Id must be a number');
        return;
    } else{
        recordId = Number(recordId);
        console.log('contestant id is a number');
        console.log(recordId);
        console.log(typeof (recordId));
    
    // drop contact record
    let mysqlDelete = `DELETE FROM contestant WHERE id = ${recordId}`;
    connection.query(mysqlDelete, (error, result) => {
        //error loging
        //Contestant id= nothing, empty
        if(error){
            console.log('If 3');
            console.log('Error response thrown ' + error.stack);
            res.status(400).json(error.sql);
        //Successfully deleted 1 row in the database    
        } 
        
        if(result.affectedRows === 0) {
            console.log('If 4');
            console.log("Id doesnt exist, Number of records deleted: " + result.affectedRows);
            res.status(418);
            res.statusMessage = 'Id Not Found';
            res.json(`Id=${recordId} doesnt exist`);
        //attempt delete id that doesnt exist
        } else {
            console.log('else 5');
            console.log("Successfully deleted id, Number of records deleted: " + result.affectedRows);
            res.status(200).json(`Contestant Id=${recordId} sexessfully deleted`);
        }
    });
    }
});
//((Discuss the correct order of if statements for memory usage))


// var interval = setInterval(function(){ 
//     console.log('Big poops'); 
//   }, 1000);
//   setTimeout(function() { 
//     clearInterval(interval); 
//   }, 999999999);

app.use('/api', router);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Serving on port ' + port);