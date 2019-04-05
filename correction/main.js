// Récupère l'élément bouton add
let button_add = document.getElementById("add-carte");

// gestion du click sur le bouton add-carte
button_add.onclick = function() {
  console.log("click sur bouton ajout carte");
  // création d'une instance de carte
  let carte = new Carte("Question", "Réponse");
  console.log("dessine la carte");
  carte.drawCarte();
};