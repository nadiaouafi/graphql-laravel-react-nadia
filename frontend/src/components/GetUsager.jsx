const GetUsager = () => {
  const infoUsager =
    localStorage.getItem("user") || sessionStorage.getItem("user");

  // Si rien dans le storage → pas d'usager
  if (!infoUsager || infoUsager === "undefined" || infoUsager === "null") {
    return null;
  }

  try {
    return JSON.parse(infoUsager);
  } catch (error) {
    console.error("Erreur de l'analyse des données utilisateur :", error);
    return null;
  }
};

export default GetUsager;
