(function(){
  console.log("Main.js");
  /**
   * Récupération du bouton "Ajouter une carte"
   */
  let button_add = document.getElementById("add-carte");

  /**
   * Gestion de l'événement click sur le bouton add-carte
   */
  button_add.onclick = function() {
    console.log("création d'une carte après click sur le bouton");
    // création de la carte
    let carte = new Carte("Quelle est l'abbréviation de javascript ?","js");
    // affichage de la carte
    carte.drawCarte();
  };
})();