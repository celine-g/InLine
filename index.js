const baseUrl = "https://shopping-lists-api.herokuapp.com/api/v1/lists/";
var listId;
var aktuellesJson;


//Funktion um bei Klick auf eine Liste, diese im Feld rechts anzeigen zu lassen
function getList(uebergebene_listId) {

    var url = baseUrl + uebergebene_listId;

    //Http-Anfrage
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    //Header für Metainformationen (Format + Permission)
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Authorization", "b96349221079c4008d434972f7b77efd");

    //Http-Anfrage prüfen -> wenn erfolgreich, dann mit For-Schleifen fortführen
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObjekt = JSON.parse(this.responseText);

            //Items-Array durchiterieren und Inhalt löschen
            for (let i = 0; i < 15; i++) {
                var htmlId = "item" + i;
                document.getElementById(htmlId).innerHTML = '';
            }

            //Items-Array durchiterieren und neue Items setzen
            for (let i = 0; i < jsonObjekt.items.length; i++) {
                var htmlId = "item" + i;
                if (jsonObjekt.items[i].name != null) {
                    //Wenn Itemstatus = true wird item mit 
                    if(jsonObjekt.items[i].bought == true){
                        document.getElementById(htmlId).innerHTML =
                        '<input type="checkbox" onclick="itemAbhaken(' + "'" + jsonObjekt.items[i]._id + "'" + ')" checked>'
                        + jsonObjekt.items[i].name + '<button onclick="itemLoeschen(' + "'" + jsonObjekt.items[i]._id + "'" + ')">löschen</button>';

                    }
                    else{
                        document.getElementById(htmlId).innerHTML =
                        '<input type="checkbox" onclick="itemAbhaken(' + "'" + jsonObjekt.items[i]._id + "'" + ')">'
                        + jsonObjekt.items[i].name + '<button onclick="itemLoeschen(' + "'" + jsonObjekt.items[i]._id + "'" + ')">löschen</button>';
                    }
                }
            }
            aktuellesJson = jsonObjekt;

            document.getElementById("listName").innerHTML = jsonObjekt.name;
            document.getElementById("standardText").innerHTML = "";
            //Hintergrundbilder dynamisch einfügen

            /*Sobald eine Liste ausgewählt wurde, wird Eingabefeld für neues Item 
            angezeigt, indem style="hidden" aufgehoben wird*/
            for (var i = 0, h1 = document.getElementsByTagName("h1"); i < h1.length; i++) {
                h1[i].style.color = "red";
            }

            //Variable listId setzen, damit ItemsHinzufuegen()-Funktion damit "arbeiten" kann
            listId = jsonObjekt._id;
            document.getElementById("main").style['backgroundImage'] = "url(bilder/" + listId + ".jpg)";
        }
    }

    request.send();

}

//Funktion, um Items der ausgewählen Liste hinzuzufügen
function itemHinzufuegen() {

    var url = baseUrl + listId + "/items";
    var request = new XMLHttpRequest();

    //Input-Feld aulesen und als der Variable name zuweisen
    var itemName = document.getElementById("itemHinzufuegen_input").value.toString();
    var item = {
        "name": itemName
    }

    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "b96349221079c4008d434972f7b77efd");

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getList(listId);
            document.getElementById("itemHinzufuegen_input").value = '';
        }
    }

    request.send(JSON.stringify(item));
}


//Funktion, um ein bestimmtes Item einer Liste zu löschen
function itemLoeschen(itemId) {

    var url = baseUrl + listId + "/items/" + itemId;
    var request = new XMLHttpRequest();

    request.open("DELETE", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "b96349221079c4008d434972f7b77efd");
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getList(listId);
        }
    }

    request.send();

}

//Funktion, um Status des Items zu ändern
function itemAbhaken(uebergebene_itemId) {
    console.log(aktuellesJson);
    var url = baseUrl + listId.toString() + "/items/" + uebergebene_itemId.toString();
    var arraystelle;
    //herausfinden, welche stelle im array die id hat
    for(let i = 0; i < aktuellesJson.items.length; i++){
        if(aktuellesJson.items[i]._id == uebergebene_itemId){
            arraystelle = i;
        }
    }
    
    if (aktuellesJson.items[arraystelle].bought == true) {
        status = false;
    }
    else {
        status = true;
    }

    var itemStatus = {
        "bought": status
    }

    var request = new XMLHttpRequest();
    request.open("PUT", url, true);
    request.setRequestHeader("Authorization", "b96349221079c4008d434972f7b77efd");
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
            getList(listId);
        }
    };

    request.send(JSON.stringify(itemStatus));

}
