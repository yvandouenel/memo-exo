class Tableau {
  constructor(titre){
    //propriétés
    this.titre = titre;
    this.colonnes = [];//[] = tableau ...vide au départ

    // éléments du dom
    this.sectionTableau = this.drawTableau(); // Stockage de l'élément du dom qui correspond
    // à la section qui a pour class tableau.

    // ajout des 4 colonnes :
    this.addColonnes();
  }
  // Méthodes
  drawTableau() {
    // création de l'élément section "tableau" au dom
    const sectionTableau = document.createElement("section");
    // Ajout d'une identité au à la section du tableau
    sectionTableau.setAttribute("id","tableau");
    // Création de l'élément titre du tableau
    const titleTableau = document.createElement("h1");
    titleTableau.textContent = this.titre;

    // Ajout du titre à la section tableau
    sectionTableau.appendChild(titleTableau);

    // Création de l'élément section "colonnes" au dom
    const sectionColonnes = document.createElement("section");
    // Ajout d'une identité à la section des colonnes
    sectionColonnes.setAttribute("id","colonnes");
    sectionTableau.appendChild(sectionColonnes);


    // Ajout de la section au body
    document.body.appendChild(sectionTableau);

    return sectionTableau;// renvoie l'élément du DOM section
  }
  addColonnes(){
    console.log("dans addColonnes");
    // création des colonnes
      const col1 = new Colonne("En cours d'apprentissage", this);
      const col2 = new Colonne("Je sais un peu", this);
      const col3 = new Colonne("Je sais bien", this);
      const col4 = new Colonne("Je sais très bien", this);

    // ajout des colonnes au tableau de colonnes
    this.colonnes = [col1, col2, col3, col4];
    console.log(this.colonnes);

  }
}