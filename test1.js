///more idea+++  
/// let the user input their age and the age they want to retire and calculate the amount of time they can spend after retirement

var http = require('http');
var fs = require('fs');
var body = require("body-parser");
var express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
const ip = '------';
//cmd -> ipconfig -> ipv4
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



app.get('/' ,(req , res) => {
  res.sendFile('C:\\Users\\thank\\OneDrive\\Documents\\project\\Templates\\login.html');
});

function ret( age , expen , save , bonus){
  if (age) {
      if (age > 85){
          year = 100 - age;
          var life = 100;

      }else{
          year = 85 - age;
          var life = 85;
      }
  }
  if (age && expen && save) {
      let PMT = expen * 12;
      let r = 0.02; // Assuming a real rate of return of 2%
      let n = year;
      let PV = PMT * (1 - Math.pow(1 + r, -n)) / r;
      let money = PV - bonus - save;
      money = money + money * 10 / 100;
      money = parseInt(money);
      if (money > 0) {
        return`With a life expectancy of ${life} years, you will need approximately ฿${money} to retire from this moment with a 6% inflation rate.`;
    } else {
        return `With a life expectancy of ${life} years, you're currently fine with your current savings and bonus considering your monthly expenses with a 6% inflation rate.`;
    }
  }else{
    return'please enter all of the important info(expenses age saved money)'

  }
}

app.post('/redirecte',(req,res) => {
  res.render("C:\\Users\\thank\\OneDrive\\Documents\\project\\Templates\\eng.html" , {massage: ''});
});

app.post('/redirectt',(req,res) => {
  res.render("C:\\Users\\thank\\OneDrive\\Documents\\project\\Templates\\thai.html" , {massage:''});
});

app.post('/cale', (req,res)=>{
  let age = req.body.age;
  let expen = req.body.expen;
  let save = req.body.save;
  let bonus = req.body.bonus;
  const massage = ret(age , expen , save , bonus);
  res.render("C:\\Users\\thank\\OneDrive\\Documents\\project\\Templates\\eng.html" , {massage: massage});
});

app.post('/calt', (req,res)=>{
  let age = req.body.age;
  let expen = req.body.expen;
  let save = req.body.save;
  let bonus = req.body.bonus;
  const massage = ret(age , expen , save , bonus);
  res.render("C:\\Users\\thank\\OneDrive\\Documents\\project\\Templates\\thai.html" , {massage: massage});
});

console.log('http://'+ip+":5287")

app.listen(5287 ,ip);