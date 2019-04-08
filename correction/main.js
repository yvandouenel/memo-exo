/**
 * Création l'élément bouton add <button>Ajouter une carte</button>
 */
let button_add = document.createElement("button");
// Création de l'élément texte du bouton add
let button_add_text = window.document.createTextNode("Ajouter une carte");
// Ajouter le texte au bouton
button_add.appendChild(button_add_text);
// Ajout du bouton dans le DOM : plus exactement dans le body
window.document.body.appendChild(button_add);

/**
 * Création de l'élément <section id="cartes"></section>
 */
let cartes = document.createElement("section");
cartes.setAttribute("id","cartes");
window.document.body.appendChild(cartes);

// gestion du click sur le bouton add-carte
button_add.onclick = function() {
  console.log("click sur bouton ajout carte");
  // création d'une instance de carte
  let carte = new Carte("Question", "Réponse");
  console.log("dessine la carte");
  carte.drawCarte();
  console.log(carte);
};