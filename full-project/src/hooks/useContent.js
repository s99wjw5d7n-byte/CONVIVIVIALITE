import { useState, useEffect } from 'react';
import contentData from '../content.json';

/**
 * Hook personnalisé pour accéder au contenu du site
 * @param {string} section - Section du contenu à récupérer (optionnel)
 * @returns {Object} Le contenu demandé ou tout le contenu si aucune section n'est spécifiée
 */
export function useContent(section = null) {
  const [content, setContent] = useState(section ? contentData[section] : contentData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cette fonction permet de mettre à jour le contenu en temps réel
  // (utile si on implémente plus tard une interface d'édition)
  const refreshContent = async () => {
    try {
      setLoading(true);
      // Dans une version future, on pourrait charger le contenu depuis une API
      // Pour l'instant, on utilise simplement le fichier JSON importé
      setContent(section ? contentData[section] : contentData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {
    content,
    loading,
    error,
    refreshContent
  };
}

export default useContent;

