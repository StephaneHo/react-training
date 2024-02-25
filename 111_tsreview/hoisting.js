function parent() {
  enfant(); // OK
  //erreur(); // KO => exception

  function enfant() {}
  const erreur = () => true;
  console.log(erreur()); // OK
}

console.log(parent());
