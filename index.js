/*
Items hinzufügen 
Items löschen
Items abhaken
*/
const baseUrl = "https://shopping-lists-api.herokuapp.com/api/v1/lists/";
var listId;

function getList(listenId) {

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

            for(let i = 0; i < 13; i++){
                var id = "item" + i;
                document.getElementById(id).innerHTML = '';
            }

            for(let i = 0; i < jsonObjekt.items.length; i++){
                var id = "item" + i;
                if (jsonObjekt.items[i].name != null){
                document.getElementById(id).innerHTML = jsonObjekt.items[i].name + '<button onclick="itemLoeschen('+ "'" + jsonObjekt.items[i]._id  + "'" + ')">löschen</button>';
                }
            }
            document.getElementById("listName").innerHTML = jsonObjekt.name;
            document.getElementById("standardText").innerHTML = "";
            listId = jsonObjekt._id;
        }
    }

    request.send();

}

function itemHinzufuegen() {

    var url = baseUrl + listId + "/items";
    var request = new XMLHttpRequest();
    var itemName = document.getElementById("itemHinzufuegen_input").value.toString();
    var item = {
        "name": itemName
    }

    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "b96349221079c4008d434972f7b77efd");

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            getList(listId);
            document.getElementById("itemHinzufuegen_input").value = '';
        }
    }

    request.send(JSON.stringify(item));
}

function itemLoeschen(itemId){

    var url = baseUrl + listId + "/items/" + itemId;
    var request = new XMLHttpRequest();

    request.open("DELETE", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "b96349221079c4008d434972f7b77efd");
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            getList(listId);
            
        }
    }

    request.send();

}


