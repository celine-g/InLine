/*const baseUrl = "https://shopping-lists-api.herokuapp.com/api/v1/"

var auto = [].name;
$("#replace").click(function () {
    $('.content').replaceWith("<h1>Text</h1>");
});



//GET
fetch(baseUrl + "lists/5da717aa7736ad00170dd8f7")
    .then(
        function (getName) {
            return getName.json();
        })
    .then(
        function (json) {
            console.log(json["name"])
        });

function getItems() {

listId = document.getElementById('12345').value;
fetch(baseUrl + "lists/" + listId)
    .then(
        function (getItems) {
            return getItems.json();
        })
    .then(
        function (json) {
            document.write(json["items"]);
            var anzeige = document.createElement('p');
            anzeige.innerHTML = json["items"];
            anzeige.body.appendChild(anzeige);
        });
    }

//POST    
const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch("https://shopping-lists-api.herokuapp.com/api/v1/lists/5da717aa7736ad00170dd8f7/items", {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify({
            "name": "Butter"
        })
    }).then(function (response) {
        return response.json();
    }).then(function (text) {
        console.log(text);
    })
    // .catch(function (error) {
    //     console.error(error); 
    // })
});*/