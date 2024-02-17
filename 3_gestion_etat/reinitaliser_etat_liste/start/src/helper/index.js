const salesCategories = [
  "Outillage professionnel et consommables",
  "Elevation de personnes",
  "Plomberie et Genie climatique",
  "Poncage, traitement des revetements de sols et murs",
  "Traitement du beton",
  "Demolition, percage et sciage",
];

export const createRandomSalesCategory = () => {
  return salesCategories[Math.floor(Math.random() * salesCategories.length)];
};
