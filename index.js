/*
GET Funktion + Liste anzeigen
Items hinzufügen 
Items löschen
Items abhaken
*/
const baseUrl = "https://shopping-lists-api.herokuapp.com/api/v1/lists/";

function getList(listenId){


    var url = baseUrl + listenId;
    console.log(url);
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Authorization", "b96349221079c4008d434972f7b77efd");

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            var jsonObjekt = JSON.parse(this.responseText);
            document.getElementById("test").innerHTML = jsonObjekt.name;
        }
    }

    request.send();

}
