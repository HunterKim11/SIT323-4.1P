const express = require('express');
const app = express();

app.get('/add', (req, res) => {
    try{
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        const result = num1 + num2;
        res.status(200).json({statuscode:200, data:result});

    }catch(error){
        console.log(error);
        res.status(500).json({statuscode:500,msg:error.toString()});
    }
});

app.get('/subtract',(req,res)=>{
    try{
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        const result = num1 - num2;
        res.status(200).json({statuscode:200, data:result});

    }catch(error){
        console.log(error);
        res.status(500).json({statuscode:500,msg:error.toString()});
    }
});

app.get('/multiply',(req,res) => {
    try{
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if(isNaN(num1)){
            throw new error("number 1 is not a number");
        }
        if(isNaN(num2)){
            throw new error("number 2 is not a number");
        }

        const result = num1 * num2;
        res.status(200).json({statuscode:200, data:result});

    }catch(error){
        console.log(error);
        res.status(500).json({statuscode:500,msg:error.toString()});
    }
});

app.get('/divide', (req,res) => {
    try{
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        const result = num1 / num2;
        res.status(200).json({statuscode:200, data:result});

    }catch(error){
        console.log(error);
        res.status(500).json({statuscode:500,msg:error.toString()});
    }

});

app.listen(3040, () => {
    console.log('Calculator is listening on port 3000!');
});