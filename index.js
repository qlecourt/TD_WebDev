
import axios from "axios"

console.log("Hello world")
var myNumber = 42
myNumber += 1
var otherNumber

function fonction1() {
    return 2
}

//Fait parti de l'API dom//

var message1Elt = document.querySelector("#texte")
var message2Elt = document.querySelector("#texte2") //Quand on met des # on fait référence aux id mais on peut mettre des . pour faire référence aux class -- et une balise peut avoir plusieurs classes//
var discussionElementElt = document.querySelector(".discussion")

document.querySelector("#submit")
    .addEventListener("click",function writeToChat(event) 
    {
        var message1 = message1Elt.value
        var message2 = message2Elt.value //Quand on met des # on fait référence aux id mais on peut mettre des . pour faire référence aux class -- et une balise peut avoir plusieurs classes//
        var discussionElement = discussionElementElt
        //document.querySelector("#texte2").value = message1//
        discussionElement.innerHTML += "<p>" + message2 + " : " + message1 + "</p>"
        console.log(event)

        axios.post('/api/message', {
            pseudo: 'Fred',
            message: 'Salut'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });





    })
























