const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());


// MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'employee'
});

// Route
app.get('/', (req, res)=>{
    res.send('Welcome to my API!')
});

// all employees
app.get('/api/employees',(req,res) =>{
    const sql = 'SELECT * FROM employee';

    connection.query(sql, (error, results) =>{
        if(error) throw error;
        if(results.length>0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    });
});

app.get('/api/employees/:id',(req,res) =>{
    const {id } = req.params
    const sql = `SELECT * FROM employee WHERE id_employee = ${id}`;

    connection.query(sql, (error, results) =>{
        if(error) throw error;
        if(results.length>0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    });

});

app.post('/api/add', (req, res) =>{
    
    const sql = 'INSERT INTO employee SET ?';

    const empObj = {
        fullname: req.body.fullname,
        functio: req.body.functio
    };

    connection.query(sql, empObj, error =>{
        if(error) throw error;
        res.send('Employee created! ');
    });

});

/*
app.put('/api/update/:id', (req, res) =>{
    
    const {id } = req.params;
    const {fullname, functio} = req.body;
    const sql = `UPDATE employee SET fullname = '${fullname}', functio = '${functio}' WHERE id_employee = ${id}`;
    connection.query(sql, error =>{
        if(error) throw error;
        res.send('Employee update! ');
    });

});*/

app.delete('/api/delete/:id', (req, res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM employee WHERE id_employee = ${id}`;
    connection.query(sql, error =>{
        if(error) throw error;
        res.send('Delete employee!');
    });
})


//Check connect
connection.connect(error =>{
    if(error) throw error;
    console.log('Database server running');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));