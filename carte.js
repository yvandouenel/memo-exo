/*
    Le concept de base est de créer un tableau dans lequel
    on va créer des colonnes dans lesquelles on va créer des cartes
    A partir du précédent script, on va pouvoir
    - utiliser la gestion des événement clavier pour vérifier si une carte est en train d'être modifiée
    - ajouter les css
*/

"use strict";
class Carte {
  // constructeur de la carte
  constructor(question, reponse) {
    this.question = question;
    this.reponse = reponse;
    // création des éléments du DOM
    this.elementCarte = document.createElement("article");
    this.elementQuestion = document.createElement("div");
    this.elementReponse = document.createElement("div");
    this.elementDelete = document.createElement("div");
    this.elementModify = document.createElement("div");
    this.elementInputQuestion = document.createElement("input");
    this.elementInputReponse = document.createElement("input");

    // gestion des événements : le bind permet d'associer l'objet carte à ses éléments enfants
    this.elementQuestion.onclick = function(e) {
      if (this.elementReponse.style.display == "none") {
        this.elementReponse.style.display = "block";
      } else {
        this.elementReponse.style.display = "none";
      }
    }.bind(this);

    this.elementDelete.onclick = function(e) {
      const result = confirm("Sûr.e de vouloir supprimer cette carte ?");
      if (result) {
        this.deleteCarte();
      }
    }.bind(this);

    this.elementModify.onclick = function(e) {
      this.showFormElements();
    }.bind(this);

    this.elementInputReponse.onblur = function(e) {
      console.log("blur InputReponse");
      this.setReponse(this.elementInputReponse.value);
      this.elementReponse.textContent = this.elementInputReponse.value;

      // Affiche à nouveau les éléments de la carte
      const all_elements = this.elementCarte.childNodes;
      for(let i = 0; i < all_elements.length; i++) {
        all_elements[i].style.display = "block";
      }
      // Cache les éléments de formulaire
      this.elementInputQuestion.style.display = "none";
      this.elementInputReponse.style.display = "none";
    }.bind(this);


    this.elementInputQuestion.onblur = function(e) {
      console.log("blur InputQuestion");
      this.setQuestion(this.elementInputQuestion.value);
      this.elementQuestion.textContent = this.elementInputQuestion.value;

      // Affiche à nouveau les éléments de la carte
      const all_elements = this.elementCarte.childNodes;
      for(let i = 0; i < all_elements.length; i++) {
        all_elements[i].style.display = "block";
      }
      // Cache les éléments de formulaire
      this.elementInputQuestion.style.display = "none";
      this.elementInputReponse.style.display = "none";
    }.bind(this);
  }

  // Méthodes
  setQuestion(newquestion) {
    console.log("setQuestion");
    this.question = newquestion;
  };
  setReponse(newreponse) {
    console.log("setReponse");
    this.reponse = newreponse;
  };
  showFormElements() {
    console.log("showFormElements");
    // cache tous les éléments de la carte
    const all_elements = this.elementCarte.childNodes;
    for(let i = 0; i < all_elements.length; i++) {
      all_elements[i].style.display = "none";
    }
    // affiche les inputs
    this.elementInputQuestion.style.display = "block";
    this.elementInputReponse.style.display = "block";
    // Passe le tableau en mode modification
  }
  drawCarte() {
    console.log("drawCarte");
    // Carte
    this.elementCarte.setAttribute("class", "carte");
    this.elementCarte.style.minHeight = "100px";

    // bouton modification
    let text = document.createTextNode("Modifier");
    this.elementModify.appendChild(text);
    this.elementModify.setAttribute("class", "card-modify");
    this.elementCarte.appendChild(this.elementModify);

    // Question
    text = document.createTextNode(this.question);
    this.elementQuestion.appendChild(text);
    this.elementQuestion.setAttribute("class","question");
    this.elementCarte.appendChild(this.elementQuestion);
    // ajout de la carte à #cartes
    document.getElementById("cartes").appendChild(this.elementCarte);

    // réponse
    text = document.createTextNode(this.reponse);
    this.elementReponse.appendChild(text);
    this.elementReponse.setAttribute("class","reponse");
    this.elementCarte.appendChild(this.elementReponse);
    this.elementReponse.style.display = "none";

    // bouton delete
    text = document.createTextNode("- Supprimer");
    this.elementDelete.appendChild(text);
    this.elementDelete.setAttribute("class","delete-carte")
    this.elementCarte.appendChild(this.elementDelete);

    // Crée et cache les éléments du formulaire
    this.elementInputQuestion.type = "text";
    this.elementInputQuestion.className = "input-question";
    this.elementInputQuestion.style.width = "100%";
    this.elementInputQuestion.defaultValue = this.question;
    this.elementCarte.appendChild(this.elementInputQuestion);
    this.elementInputQuestion.style.display = "none";

    this.elementInputReponse.type = "text";
    this.elementInputReponse.className = "input-reponse";
    this.elementInputReponse.style.width = "100%";
    this.elementInputReponse.defaultValue = this.reponse;
    this.elementCarte.appendChild(this.elementInputReponse);
    this.elementInputReponse.style.display = "none";

  }
  deleteCarte() {
    console.log("deleteCarte");
    //supprimer l'element du dom qui correspond à cette carte
     this.elementCarte.parentNode.removeChild(this.elementCarte);
  }
}
