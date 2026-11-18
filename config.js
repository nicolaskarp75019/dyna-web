// config.js — Source unique de vérité pour l'URL du backend DYNA.
//
// Pour changer d'URL de production (ex. futur nom de domaine),
// modifier UNIQUEMENT la constante PROD_URL ci-dessous.
//
// Bascule locale pour le développement (l'un des trois suffit) :
//   - ajouter ?local=true dans l'URL de la page, OU
//   - ouvrir la page depuis localhost, OU
//   - ouvrir la page en file://
// Dans ces cas, le backend ciblé est http://localhost:3000.
//
// En production (vrai domaine + https, sans ?local=true) : PROD_URL.
(function () {
  'use strict';

  const PROD_URL  = 'https://dyna-backend-production.up.railway.app';
  const LOCAL_URL = 'http://localhost:3000';

  const params   = new URLSearchParams(window.location.search);
  const useLocal = params.get('local') === 'true'
                || window.location.hostname === 'localhost'
                || window.location.protocol === 'file:';

  window.DYNA_CONFIG = {
    BACKEND_URL: useLocal ? LOCAL_URL : PROD_URL,
    useLocal: useLocal
  };
})();
