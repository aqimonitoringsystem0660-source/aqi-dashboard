const firebaseConfig = {
    apiKey: "AIzaSyA0iPOuBP0ocEU9wp3Ravh3rid9dZhMTAY",
    authDomain: "aqi-monitoring-system-947db.firebaseapp.com",
    databaseURL: "https://aqi-monitoring-system-947db-default-rtdb.firebaseio.com",
    projectId: "aqi-monitoring-system-947db",
    storageBucket: "aqi-monitoring-system-947db.firebasestorage.app",
    messagingSenderId: "940625028060",
    appId: "1:940625028060:web:54c213565e0094ef99e519",
    measurementId: "G-2TTCE8WWDX"
  };
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref("AQI_System").on("value", function(snapshot){

document.getElementById("pm25").innerHTML =
snapshot.val().PM25;

document.getElementById("co2").innerHTML =
snapshot.val().CO2;

document.getElementById("temp").innerHTML =
snapshot.val().Temperature;

document.getElementById("hum").innerHTML =
snapshot.val().Humidity;

});