class Carte {
  constructor(question, reponse) {
    // les propriétés
    this.question = question;
    this.reponse = reponse;

    // création des élément du DOM
    this.elementArticle = document.createElement("article");
    this.elementQuestion = document.createElement("p");
    this.elementReponse = document.createElement("p");
  }
  drawCarte() {
    // création de l'élément texte de la question
    let textQuestion = document.createTextNode(this.question);
    // création de l'élément texte de la réponse
    let textReponse = document.createTextNode(this.reponse);

    this.elementQuestion.appendChild(textQuestion);
    this.elementReponse.appendChild(textReponse);

    this.elementArticle.appendChild(this.elementQuestion);
    this.elementArticle.appendChild(this.elementReponse);

    document.getElementById("cartes").appendChild(this.elementArticle);

  }
}