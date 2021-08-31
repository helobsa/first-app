const express = require("express");
const router = express.Router();

router.use(express.static('public'));

router.get('/',(req,res)=>{
    res.render('pages/home');
});

router.get('/about',(req,res)=>{

    res.render('pages/about');
});

router.get('/cadastro',(req,res)=>{ 

    res.render('pages/cadastro',{users:users}); 
});


module.exports = router;