var mysql = require('mysql');

var source = {
    localhost: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '6Nodagem7!',
        database: 'burgers_db'
    }
}

var connection = mysql.createConnection(source.localhost);

connection.connect(function(err){
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);    
});

module.exports = connection;