// SIMPLE DEMO LOGIC

let adminUser = "admin";
let adminPass = "15281528";

// LOGIN
function login(){
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if(u === adminUser && p === adminPass){
    window.location.href = "admin.html";
  } 
  else {
    window.location.href = "home.html";
  }
}

// TEMP STORAGE (later Firebase use කරනවා)
let videos = [];

function addVideo(){
  let title = document.getElementById("vtitle").value;
  let link = document.getElementById("vlink").value;

  videos.push({title, link});
  document.getElementById("adminMsg").innerText = "Video Added!";
}

function addStudent(){
  document.getElementById("adminMsg").innerText = "Student Added (Firebase later connect)";
}

// SHOW VIDEOS
window.onload = function(){
  let container = document.getElementById("videoList");
  if(container){
    container.innerHTML = videos.map(v =>
      `<div class="card">
        <h3>${v.title}</h3>
        <a href="${v.link}" target="_blank">▶ Watch</a>
      </div>`
    ).join("");
  }
}