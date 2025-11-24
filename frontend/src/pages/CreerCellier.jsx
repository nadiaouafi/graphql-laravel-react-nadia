import { useState } from "react";
import axios from "axios";

export default function CreerCellier() {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [erreurs, setErreurs] = useState({});

  // 👉 Remplace 1 par l'ID réel lorsque l'auth sera en place
  const idUsager = 1;

  const envoyerFormulaire = async (e) => {
    e.preventDefault();
    setMessage("");
    setErreurs({});

    try {
      await axios.post("http://localhost:8000/api/celliers", {
        nom,
        id_usager: idUsager,
      });

      setMessage(" Votre cellier a été créé avec succès !");
      setNom("");
    } catch (error) {
      if (error.response?.data?.errors) {
        setErreurs(error.response.data.errors);
      } else {
        setMessage("Une erreur est survenue lors de la création du cellier.");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-6 bg-white shadow-md rounded-lg border border-gray-200">

      <h1 className="text-3xl font-serif text-red-950 mb-6">
        Ajouter un nouveau cellier
      </h1>

      {message && (
        <p className="mb-4 text-center font-semibold text-red-700">
          {message}
        </p>
      )}

      <form onSubmit={envoyerFormulaire} className="flex flex-col gap-4">

        {/* Champ : Nom du cellier */}
        <div>
          <label className="block text-red-950 font-semibold mb-1">
            Nom du cellier
          </label>

          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Ex : Cellier principal"
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
              erreurs.nom ? "border-red-900 ring-red-900" : "border-red-200 focus:ring-red-800"
            }`}
          />

          {erreurs.nom && (
            <p className="text-red-600 text-sm mt-1">
              {erreurs.nom[0]}
            </p>
          )}
        </div>

        {/* Bouton d’envoi */}
        <button
          type="submit"
          className="w-full bg-red-950 text-white py-2 rounded-lg hover:bg-red-300 transition"
        >
          Créer le cellier
        </button>
      </form>
    </div>
  );
}
