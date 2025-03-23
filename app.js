const express =(require('express'));
const app=express();
const port=3001;

app.get('/',(reg,res)=>{
    res.send('Hello express JS');
});


app.get('/msg',(reg,res)=>{
    res.send('Hello IT Students');
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});