// "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"


if (!localStorage.getItem("channels")){
  
  var array = [];
  localStorage.setItem("channels", JSON.stringify(array));
}

var input = document.querySelector(".form__input");
var inputbutton = document.querySelector(".form__button");

inputbutton.onclick = function(){

  if (input.value.length != 0){
    var unserialArr = JSON.parse(localStorage.getItem("channels"));
    unserialArr.push(String(input.value));
    localStorage.setItem("channels", JSON.stringify(unserialArr));
    alert("Добавлено");
    getChannelsInfo();
  } 

  else{
    alert("Введите название канала");
  }
}


var online = document.querySelector(".online");
var offline = document.querySelector(".offline");

var control = document.querySelector(".control");

control.onclick = function(event){

  var elem = event.target;

  if (elem != '[object HTMLButtonElement]') return;

  if (elem.dataset.category == 'online'){

    offline.classList.add("hidden");
    online.classList.remove("hidden");
  }

  else if (elem.dataset.category == 'offline'){

    online.classList.add("hidden");
    offline.classList.remove("hidden");  
  }

  else{
    online.classList.remove("hidden");
    offline.classList.remove("hidden");
  }
}

getChannelsInfo();

function makeURL(type, item){
  return `https://api.twitch.tv/kraken/${type}/${item}?client_id=lidc475jqml0yp0gdrg41zv7g2hj4g`;
}

function getChannelsInfo(){

  let channels = JSON.parse(localStorage.getItem("channels"));

  online.innerHTML = '';
  offline.innerHTML = '';

  channels.forEach(function(item){

    var game,status;

    var req = new XMLHttpRequest();

    req.open('GET', makeURL("streams", item), true);

    req.onload = function(){

      if (req.status >= 200 && req.status < 400){

        var data = JSON.parse(req.responseText);

        if (data.stream == null){
          game = 'offline';
          status = 'offline';
        }

        else if (data.stream == undefined){
          game = 'Account Closed';
          status = 'offline';
        }

        else{
          game = data.stream.game;
          status = 'online';
        }

        req.open('GET', makeURL("channels", item), true)

        req.onload = function(){

          if (req.status >= 200 && req.status < 400){

            var data = JSON.parse(req.responseText);

            if (status === 'online'){
              var elem = document.createElement("div");
              elem.classList.add("online__card");
              elem.innerHTML = `<div class="img-container"><img src="${data.logo}" alt="logo" class="img"></div><a href="${data.url}" class="link">${item}</a><p class="status">${game}</p>`;
              online.appendChild(elem);
            }

            else if (status == 'offline'){
              var elem = document.createElement("div");
              elem.classList.add("offline__card");
              elem.innerHTML = `<div class="img-container"><img src="${data.logo}" alt="logo" class="img"></div><a href="${data.url}" class="link">${item}</a><p class="status">${game}</p>`;
              offline.appendChild(elem);         
            }
          }
        }

        req.send();
      }
    }

    req.send();      
  })
}