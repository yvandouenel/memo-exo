class Carte {
  constructor(question, reponse, col_index, tableau) {
    // les propriétés
    this.question = question;
    this.reponse = reponse;
    this.col_index = col_index;
    this.tableau = tableau;

    // création des éléments du DOM
    this.elementArticle = document.createElement("article");

    this.elementQuestion = document.createElement("p");
    this.elementReponse = document.createElement("p");

    this.questionForm = document.createElement("input");
    this.reponseForm = document.createElement("input");

    this.arrowRight = document.createElement("button");
    this.arrowLeft = document.createElement("button");

    // Gestion des événements
    this.questionForm.onchange = function() {
      // changement de la valeur de la propriété question
      this.question = this.questionForm.value;

      // on change la valeur du texte de l'élément elementQuestion,
      // c'est à dire de l'élément du DOM correspondant à cette question
      this.elementQuestion.textContent = this.question;
    }.bind(this); // la méthode bind permet de lier à la fonction de
    // gestion de l'événement le this qui est ici la carte

    this.reponseForm.onchange = function() {
      // changement de la valeur de la propriété reponse
      this.reponse = this.reponseForm.value;

      // on change la valeur du texte de l'élément elementReponse,
      // c'est à dire de l'élément du DOM correspondant à cette réponse
      this.elementReponse.textContent = this.reponse;
    }.bind(this); // la méthode bind permet de lier à la fonction de
    // gestion de l'événement le this qui est ici la carte

    // gestion du déplacement à droite
    this.manageMoveRight();
    // gestion du déplacement à gauche
    this.manageMoveLeft();
  }

  /** création de la méthode drawCarte qui est ajoutée au
   * prototype du constructeur de Carte */
  drawCarte(colonne) {
    // création de l'élément texte de la question
    let textQuestion = document.createTextNode(this.question);
    // création de l'élément texte de la réponse
    let textReponse = document.createTextNode(this.reponse);

    this.elementQuestion.appendChild(textQuestion);
    this.elementReponse.appendChild(textReponse);

    this.elementArticle.appendChild(this.elementQuestion);
    this.elementArticle.appendChild(this.elementReponse);

    // Ajout des flèches droites et gauches
    this.arrowLeft.textContent = "<";
    this.arrowRight.textContent = ">";
    this.arrowLeft.setAttribute("class", "fleche-gauche");
    this.arrowRight.setAttribute("class", "fleche-droite");
    this.elementArticle.appendChild(this.arrowLeft);
    this.elementArticle.appendChild(this.arrowRight);

    // Ajout des éléments du formulaire
    // on spécifie que l'élément du formulaire est un input text
    this.questionForm.type = "text";
    this.reponseForm.type = "text";

    // on ajoute à elementArticle (la carte) les éléments de formulaire
    this.elementArticle.appendChild(this.questionForm);
    this.elementArticle.appendChild(this.reponseForm);

    // Enfin on ajoute à la colonne passée en paramètre
    // l'élément du DOM qui correspond à la carte
    colonne.appendChild(this.elementArticle);
  }
  manageMoveRight() {
    console.log("Dans manageMoveRight");
    this.arrowRight.onclick = function() {
      // nombre de colonnes
      let col_length = this.tableau.colonnes.length;
      // S'il y a une colonne à droite alors on opère le déplacement
      if (this.col_index < col_length - 1) {
        // Mouvement de l'élément carte du dom vers l'élément colonne du dom
        this.tableau.colonnes[(this.col_index + 1)].sectionColonne.appendChild(
          this.elementArticle
        );

        // suprimme la carte de la colonne actuelle
        // Index de la carte
        let carte_index = this.tableau.colonnes[this.col_index].cartes.indexOf(this);
        this.tableau.colonnes[this.col_index].cartes.splice(carte_index, 1);

        // ajout de la carte dans la colonne [nexCol]
        this.tableau.colonnes[(this.col_index + 1)].cartes.push(this.carte);
        console.log("tableau après mouvement vers la droite  : ", this.tableau);

        // changmement du col_index
        this.col_index ++;
      }
    }.bind(this);
  }
  manageMoveLeft() {
    console.log("Dans manageMoveLeft");
    this.arrowLeft.onclick = function() {
      // nombre de colonnes
      let col_length = this.tableau.colonnes.length;
      // S'il y a une colonne à gauche alors on opère le déplacement
      if (this.col_index > 0) {
        // Mouvement de l'élément carte du dom vers l'élément colonne du dom
        this.tableau.colonnes[(this.col_index - 1)].sectionColonne.appendChild(
          this.elementArticle
        );

        // suprimme la carte de la colonne actuelle
        // Index de la carte
        let carte_index = this.tableau.colonnes[this.col_index].cartes.indexOf(this);
        this.tableau.colonnes[this.col_index].cartes.splice(carte_index, 1);

        // ajout de la carte dans la colonne précédente
        this.tableau.colonnes[(this.col_index - 1)].cartes.push(this.carte);
        console.log("tableau après mouvement vers la gauche : ", this.tableau);

        // changmement du col_index
        this.col_index --;
      }
    }.bind(this);
  }
}
