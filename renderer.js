// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var ip = require("ip");
var a = 0, b = 0, c = 0, d = 0, e = 0;
document.getElementById('opta').innerHTML = a;
document.getElementById('optb').innerHTML = b;
document.getElementById('optc').innerHTML = c;
document.getElementById('optd').innerHTML = d;
document.getElementById('opte').innerHTML = e;
document.getElementById('addr').innerHTML = "Voting interface running on: " + ip.address() + ":8080!<br><i>This is the address to give students!</i>";
//const ipcRenderer = require('electron').ipcRenderer
//console.log("Votes: " + remote.getGlobal('votesA') + " " + global.votesA) // prints "pong"

var page = '<html> <head> <meta charset="utf-8"> <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> <title></title> </head><body><div class="w3-display-container w3-light-grey" style="height:100%; width:100%"><div class="w3-display-middle"><header class="w3-container w3-white"><h1> Select an option </h1></header><div class="w3-card-2 w3-center" style="width:300px;"><a href="/votea" class="w3-button w3-red" style="width:100%">Vote A </a> <br><a href="/voteb" class="w3-button w3-blue w3-bar" style="width:100%">Vote B </a> <br><a href="/votec" class="w3-button w3-green w3-bar" style="width:100%">Vote C </a> <br><a href="/voted" class="w3-button w3-yellow w3-bar" style="width:100%">Vote D </a> <br><a href="/votee" class="w3-button w3-purple w3-bar" style="width:100%">Vote E </a><i> Ryan Buxton 2019 </i></div></div></div></body></html>'

function resetcounts(){
  a = 0
  b = 0
  c = 0
  d = 0
  e = 0
  document.getElementById('opta').innerHTML = a;
  document.getElementById('optb').innerHTML = b;
  document.getElementById('optc').innerHTML = c;
  document.getElementById('optd').innerHTML = d;
  document.getElementById('opte').innerHTML = e;
}

//setTimeout(function(){getCurrentWindow().reload()}, 2500)

const express = require("express");
const expressApp = express();
expressApp.set('view engine', 'ejs')

expressApp.get("/", function(req, res){
  res.send(page)
})

expressApp.get("/votea", function(req, res){
  a++;
  res.send(page) //res.render("vote")
  document.getElementById('opta').innerHTML = a;
})
expressApp.get("/voteb", function(req, res){
  b++;
  res.send(page) //res.render("vote")
  document.getElementById('optb').innerHTML = b;
})
expressApp.get("/votec", function(req, res){
  c++;
  res.send(page) //res.render("vote")
  document.getElementById('optc').innerHTML = c;
})
expressApp.get("/voted", function(req, res){
  d++;
  res.send(page) //res.render("vote")
  document.getElementById('optd').innerHTML = d;
})
expressApp.get("/votee", function(req, res){
  e++;
  res.send(page) //res.render("vote")
  document.getElementById('opte').innerHTML = e;
})

expressApp.listen(8080, function(){
  console.log("Started web interface!")
})
