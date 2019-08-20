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
document.getElementById('addr').innerHTML = "Voting interface running on: " + ip.address();
//const ipcRenderer = require('electron').ipcRenderer
//console.log("Votes: " + remote.getGlobal('votesA') + " " + global.votesA) // prints "pong"

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
  res.render("vote")
})

expressApp.get("/votea", function(req, res){
  a++;
  res.render("vote")
  document.getElementById('opta').innerHTML = a;
})
expressApp.get("/voteb", function(req, res){
  b++;
  res.render("vote")
  document.getElementById('optb').innerHTML = b;
})
expressApp.get("/votec", function(req, res){
  c++;
  res.render("vote")
  document.getElementById('optc').innerHTML = c;
})
expressApp.get("/voted", function(req, res){
  d++;
  res.render("vote")
  document.getElementById('optd').innerHTML = d;
})
expressApp.get("/votee", function(req, res){
  e++;
  res.render("vote")
  document.getElementById('opte').innerHTML = e;
})

expressApp.listen(8181, function(){
  console.log("Started web interface!")
})
