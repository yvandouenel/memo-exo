class Colonne {
  constructor(titre, tableau) {
    // propriétés de la colonne
    this.titre = titre;
    this.tableau = tableau; //passage par référence du tableau à la colonne
    this.cartes = [];

    // création du boutton add
    this.elementButton = this.createBoutonAdd();

    // dessin et stockage de la colonne
    this.sectionColonne = this.drawColonne();

    /* Gestion des événements
    Par défaut, this dans un gestionnaire d'événement
    est l'objet qui génère l'événement, c'est à dire
    ici "elementButton". Or nous voulons que addCarte
    puisse accéder au this en tant que colonne.
    D'où l'utilisation de bind() */
    this.elementButton.onclick = function() {
      this.addCarte();
    }.bind(this)
  }
  createBoutonAdd(){
    console.log("dans createButtonAdd");
    let buttonAdd = document.createElement("button");
    // Ajout du texte dans l'élément buttonAdd
    buttonAdd.textContent = "Ajouter une carte";
    return buttonAdd;
  }
  drawColonne() {
    console.log("dans drawColonne");
    // Création de la section "colonne"
    const sectionColonne = document.createElement("section");
    // Ajout de la classe "colonne" à la section
    sectionColonne.setAttribute("class","colonne");

    // Création et ajout d'un titre de niveau 2
    const titre = document.createElement("h2");
    titre.textContent = this.titre;
    sectionColonne.appendChild(titre);

    //ajout du bouton "buttonAdd" dans la colonne
    sectionColonne.appendChild(this.elementButton);

    //ajout de la section colonne dans la section "colonnes"
    const colonnes = document.getElementById("colonnes");
    colonnes.appendChild(sectionColonne);

    return sectionColonne;
  }
  addCarte(){
    console.log("dans addCarte");

    // récupération de l'index de la colonne
    let index_col = this.tableau.colonnes.indexOf(this);//index de la colonne
    const carte = new Carte("question","réponse", index_col, this.tableau);//appel du constructeur

    // Ajout de la carte à la colonne
    this.cartes.push(carte);

    // dessin de la carte
    carte.drawCarte(this.sectionColonne);


  };
}