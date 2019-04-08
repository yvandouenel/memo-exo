class Carte {
  constructor(question, reponse) {
    // les propriétés
    this.question = question;
    this.reponse = reponse;

    // création des éléments du DOM
    this.elementArticle = document.createElement("article");

    this.elementQuestion = document.createElement("p");
    this.elementReponse = document.createElement("p");

    this.questionForm = document.createElement("input");
    this.reponseForm = document.createElement("input");

    // Gestion des événements
    this.questionForm.onchange = function() {
      // changement de la valeur de la propriété question
      this.question = this.questionForm.value;

      // on change la valeur du texte de l'élément elementQuestion,
      // c'est à dire de l'élément du DOM correspondant à cette question
      this.elementQuestion.textContent = this.question;
    }.bind(this);// la méthode bind permet de lier à la fonction de
    // gestion de l'événement le this qui est ici la carte

    this.reponseForm.onchange = function() {
      // changement de la valeur de la propriété reponse
      this.reponse = this.reponseForm.value;

      // on change la valeur du texte de l'élément elementReponse,
      // c'est à dire de l'élément du DOM correspondant à cette réponse
      this.elementReponse.textContent = this.reponse;
    }.bind(this);// la méthode bind permet de lier à la fonction de
    // gestion de l'événement le this qui est ici la carte
  }

  /** création de la méthode drawCarte qui est ajoutée au
   * prototype du constructeur de Carte */
  drawCarte() {
    // création de l'élément texte de la question
    let textQuestion = document.createTextNode(this.question);
    // création de l'élément texte de la réponse
    let textReponse = document.createTextNode(this.reponse);

    this.elementQuestion.appendChild(textQuestion);
    this.elementReponse.appendChild(textReponse);

    this.elementArticle.appendChild(this.elementQuestion);
    this.elementArticle.appendChild(this.elementReponse);

    // Ajout des éléments du formulaire
    // on spécifie que l'élément du formulaire est un input text
    this.questionForm.type = "text";
    this.reponseForm.type = "text";

    // on ajoute à elementArticle (la carte) les éléments de formulaire
    this.elementArticle.appendChild(this.questionForm);
    this.elementArticle.appendChild(this.reponseForm);

    // Enfin on ajoute à la section d'identité "cartes" l'élément du
    // DOM qui correspond à la carte
    document.getElementById("cartes").appendChild(this.elementArticle);

  }
}