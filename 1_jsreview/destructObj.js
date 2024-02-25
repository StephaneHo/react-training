const personne = {
  nom: "Paris",
  prenom: "Julie",
  civilite: "MME",
};
const { nom, prenom } = personne;
console.log(nom);

const { nom: myFamilyName, prenom: firstName } = personne;
console.log(myFamilyName);
