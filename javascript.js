// Apparition des blocks
let action = document.getElementById("action");
let info = document.getElementById("info");
let info_up = document.getElementById("info_up");

action.addEventListener("click", () => {
    if(getComputedStyle(info).display != "none"){
      info.style.display = "none";
      info_up.style.display ="block";
    } else {
      info.style.display = "block";
      info_up.style.display ="none";
    }
  })


// Selecteur ville
let ville = "Paris";
recevoirheure(ville);
recevoirTemperature(ville)

let changerDeVille = document.querySelector('#changer'); 
changerDeVille.addEventListener('click', () => {
  ville = prompt('Quelle ville souhaitez vous voir?');
  recevoirheure(ville);
  recevoirTemperature(ville);
});

// Date/Heure API
function recevoirheure(ville){
  
const url = "https://timezone.abstractapi.com/v1/current_time?api_key=825de8bf74634b7c9f07ae8b6f03f9bf&location="+ville ;

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();


requete.onload = function() {
  if(requete.readyState === XMLHttpRequest.DONE){
    if(requete.status === 200){
      let reponse = requete.response; 
      let datetime = reponse.datetime;
      let zone = reponse.timezone_location;
      document.querySelector('#time_label').textContent = datetime;
      document.querySelector('#zone').textContent = zone;
    
    }
    else {
      alert('Un problème est survenu, merci de revenir plus tard.');
    }
  }
}

}

// Temperature API
function recevoirTemperature(ville){
  
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ville+'&appid=5f8970250e0f03f49210a6c160a3f86e&units=metric' ;
    
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();
    
    
    requete.onload = function() {
      if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
          let reponse = requete.response; 
          let temperature = reponse.main.temp;
          document.querySelector('#temperature_label').textContent = temperature;
          document.querySelector('#ville').textContent = ville; 
        }
        else {
          alert('Un problème est survenu, merci de revenir plus tard.');
        }
      }
    }

}

