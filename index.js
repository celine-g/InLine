const baseUrl = "https://shopping-lists-api.herokuapp.com/api/v1/lists/";
var listId;
var aktuellesJson;


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
                    //Wenn Itemstatus = true wird item mit checked erzeugt, bei Itemstatus= false mit unchecked
                    if (jsonObjekt.items[i].bought == true) {
                        document.getElementById(htmlId).innerHTML =
                            '<div id="checked" class="listenelement" onclick="itemAbhaken(' + "'" + jsonObjekt.items[i]._id + "'" + ')" >'
                            + '<input type="checkbox" checked >'
                            + '<p id="listenelement_content">' + jsonObjekt.items[i].name + '</p>'
                            + '<button id="loeschButton" title="Item löschen" onclick="itemLoeschen(' + "'" + jsonObjekt.items[i]._id + "'" + ')"> x </button>';
                        + '</div>'
                    }
                    else {
                        document.getElementById(htmlId).innerHTML =
                            '<div id="unchecked" class="listenelement" onclick="itemAbhaken(' + "'" + jsonObjekt.items[i]._id + "'" + ')" >'
                            + '<input type="checkbox">'
                            + '<p id="listenelement_content">' + jsonObjekt.items[i].name + '</p>'
                            + '<button id="loeschButton" title="Item löschen" onclick="itemLoeschen(' + "'" + jsonObjekt.items[i]._id + "'" + ')"> x </button>';
                        + '</div>'
                    }
                }
            }
            //Listenname (Überschrift) setzen und Wilkommenstext zurücksetzen
            aktuellesJson = jsonObjekt;
            document.getElementById("listName").innerHTML = jsonObjekt.name;
            document.getElementById("standardText").innerHTML = "";

            //Auf Startseite ist Itemeingabefeld verborgen, beim Aufrufen der getList-Funktion, wird dieses wieder angezeigt
            var x = document.getElementById("itemHinzufuegen");
            x.style.display = "block";

            //Variable listId global setzen, damit ItemsHinzufuegen()-Funktion damit "arbeiten" kann
            listId = jsonObjekt._id;

            //Hintergrundbilder dynamisch einfügen
            document.getElementById("main").style['backgroundImage'] = "url(bilder/" + listId + ".jpg)";

            //Style der aktiven Liste - Leider sehr redundant :/ 
           switch (listId) {
                case "5da717aa7736ad00170dd8f7":
                    var a = document.getElementById("5da717aa7736ad00170dd8f7");
                    a.style.color = "#c06c84";
                    a.style.transform = "scale(1.2)";
                    var b = document.getElementById("5da717b87736ad00170dd8f9");
                    var c = document.getElementById("5da717bf7736ad00170dd8fa");
                    var d = document.getElementById("5da717af7736ad00170dd8f8");
                    var e = document.getElementById("5da717c57736ad00170dd8fb");
                    var f = document.getElementById("5da717de7736ad00170dd8fc");
                    b.style.color = "#fff";
                    b.style.transform = "scale(1)";
                    c.style.color = "#fff";
                    c.style.transform = "scale(1)";
                    d.style.color = "#fff";
                    d.style.transform = "scale(1)";
                    e.style.color = "#fff";
                    e.style.transform = "scale(1)";
                    f.style.color = "#fff";
                    f.style.transform = "scale(1)";
                    break;
                case "5da717b87736ad00170dd8f9":
                    var a = document.getElementById("5da717b87736ad00170dd8f9");
                    a.style.color = "#c06c84";
                    a.style.transform = "scale(1.2)";
                    var b = document.getElementById("5da717aa7736ad00170dd8f7");
                    var c = document.getElementById("5da717bf7736ad00170dd8fa");
                    var d = document.getElementById("5da717af7736ad00170dd8f8");
                    var e = document.getElementById("5da717c57736ad00170dd8fb");
                    var f = document.getElementById("5da717de7736ad00170dd8fc");
                    b.style.color = "#fff";
                    b.style.transform = "scale(1)";
                    c.style.color = "#fff";
                    c.style.transform = "scale(1)";
                    d.style.color = "#fff";
                    d.style.transform = "scale(1)";
                    e.style.color = "#fff";
                    e.style.transform = "scale(1)";
                    f.style.color = "#fff";
                    f.style.transform = "scale(1)";
                    break;
                case "5da717bf7736ad00170dd8fa":
                    var a = document.getElementById("5da717bf7736ad00170dd8fa");
                    a.style.color = "#c06c84";
                    a.style.transform = "scale(1.2)";
                    var b = document.getElementById("5da717aa7736ad00170dd8f7");
                    var c = document.getElementById("5da717b87736ad00170dd8f9");
                    var d = document.getElementById("5da717af7736ad00170dd8f8");
                    var e = document.getElementById("5da717c57736ad00170dd8fb");
                    var f = document.getElementById("5da717de7736ad00170dd8fc");
                    b.style.color = "#fff";
                    b.style.transform = "scale(1)";
                    c.style.color = "#fff";
                    c.style.transform = "scale(1)";
                    d.style.color = "#fff";
                    d.style.transform = "scale(1)";
                    e.style.color = "#fff";
                    e.style.transform = "scale(1)";
                    f.style.color = "#fff";
                    f.style.transform = "scale(1)";
                    break;
                case "5da717af7736ad00170dd8f8":
                    var a = document.getElementById("5da717af7736ad00170dd8f8");
                    a.style.color = "#c06c84";
                    a.style.transform = "scale(1.2)";
                    var b = document.getElementById("5da717aa7736ad00170dd8f7");
                    var c = document.getElementById("5da717b87736ad00170dd8f9");
                    var d = document.getElementById("5da717bf7736ad00170dd8fa");
                    var e = document.getElementById("5da717c57736ad00170dd8fb");
                    var f = document.getElementById("5da717de7736ad00170dd8fc");
                    b.style.color = "#fff";
                    b.style.transform = "scale(1)";
                    c.style.color = "#fff";
                    c.style.transform = "scale(1)";
                    d.style.color = "#fff";
                    d.style.transform = "scale(1)";
                    e.style.color = "#fff";
                    e.style.transform = "scale(1)";
                    f.style.color = "#fff";
                    f.style.transform = "scale(1)";
                    break;
                case "5da717c57736ad00170dd8fb":
                    var a = document.getElementById("5da717c57736ad00170dd8fb");
                    a.style.color = "#c06c84";
                    a.style.transform = "scale(1.2)";
                    var b = document.getElementById("5da717aa7736ad00170dd8f7");
                    var c = document.getElementById("5da717b87736ad00170dd8f9");
                    var d = document.getElementById("5da717bf7736ad00170dd8fa");
                    var e = document.getElementById("5da717af7736ad00170dd8f8");
                    var f = document.getElementById("5da717de7736ad00170dd8fc");
                    b.style.color = "#fff";
                    b.style.transform = "scale(1)";
                    c.style.color = "#fff";
                    c.style.transform = "scale(1)";
                    d.style.color = "#fff";
                    d.style.transform = "scale(1)";
                    e.style.color = "#fff";
                    e.style.transform = "scale(1)";
                    f.style.color = "#fff";
                    f.style.transform = "scale(1)";
                    break;
                case "5da717de7736ad00170dd8fc":
                    var a = document.getElementById("5da717de7736ad00170dd8fc");
                    a.style.color = "#c06c84";
                    a.style.transform = "scale(1.2)";
                    var b = document.getElementById("5da717aa7736ad00170dd8f7");
                    var c = document.getElementById("5da717b87736ad00170dd8f9");
                    var d = document.getElementById("5da717bf7736ad00170dd8fa");
                    var e = document.getElementById("5da717af7736ad00170dd8f8");
                    var f = document.getElementById("5da717c57736ad00170dd8fb");
                    b.style.color = "#fff";
                    b.style.transform = "scale(1)";
                    c.style.color = "#fff";
                    c.style.transform = "scale(1)";
                    d.style.color = "#fff";
                    d.style.transform = "scale(1)";
                    e.style.color = "#fff";
                    e.style.transform = "scale(1)";
                    f.style.color = "#fff";
                    f.style.transform = "scale(1)";
                    break;
            }
        }

    }

    request.send();

}


function itemHinzufuegen() {

    var url = baseUrl + listId + "/items";
    var request = new XMLHttpRequest();

    //Input-Feld auslesen und der Variable als name zuweisen
    var itemName = document.getElementById("itemHinzufuegen_input").value.toString();
    var item = {
        "name": itemName
    }

    if (aktuellesJson.items.length <= 14) { 
    
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

    else {
        alert ("Mehr als 15 Einkäufe kannst du sowieso nicht tragen - Leider können keine weiteren Listenelemente hinzugefügt werden!");
    }
}



function itemLoeschen(itemId) {

    var url = baseUrl + listId + "/items/" + itemId;
    var request = new XMLHttpRequest();

    //Http_Anfrage
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


function itemAbhaken(uebergebene_itemId) {
    console.log(aktuellesJson);
    var url = baseUrl + listId.toString() + "/items/" + uebergebene_itemId.toString();
    var arraystelle;
    //Herausfinden, welche Stelle im Array die Id hat
    for (let i = 0; i < aktuellesJson.items.length; i++) {
        if (aktuellesJson.items[i]._id == uebergebene_itemId) {
            arraystelle = i;
        }
    }
 
    //Abfragen wie der aktuelle Status von bought ist und dementsprechend umsetzen
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

    //Http-Anfrage
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
