const headers = document.querySelectorAll('.accordion-header') // Déclare une constante (const) appelée (headers) + interroge la page (document) + sélectionne tous les éléments avec la classe (accordion-header). Notre constante contient une liste de tous les éléments possédant cette classe.

headers.forEach(headerButton => { // Pour chaque élément dans la liste (headers), exécute une fonction. Chaque élément est temporairement appelé (headerButton).
  
  headerButton.addEventListener('click', () => { // Écoute les événements de clic sur (headerButton) et exécute tout ce qui est présent dans les accolades.
    
    const isActive = headerButton.classList.contains('active'); // Déclare une constante (isActive) qui est égale à (true) si (headerButton) contient la classe (active), sinon (false).
    
    // Dans le code ci-dessous on enlève les classes (active) et (show) lors du clic sur un header pour fermer tous les autres qui seraient ouverts.
    headers.forEach(closeHeader => { // Pour chaque élément dans la liste (headers), exécute une fonction. Chaque élément est temporairement appelé (closeHeader).
      
      closeHeader.classList.remove('active') // Enlève la classe (active) de (closeHeader).
      
      const closeContent = closeHeader.parentElement.querySelector('.accordion-content') // Déclare une constante (closeContent) + remonte à l'élément parent de (closeHeader) + cherche dedans un élément avec la classe (accordion-content). Notre constante est égale à l'élément possédant cette classe.
      
      closeContent.classList.remove('show') // Enlève la classe (show) de la constante (closeContent).
    
    }); // On ferme ce code pour terminer la fermeture de tous les items.
    
    // Dans le code ci-dessous, si (headerButton) n'a PAS la classe (active) lors du clic, on ajoute les classes (active) et (show).
    if (!isActive) { // Si la variable (isActive) est (false), c'est-à-dire si le header n'était PAS actif.
      
      headerButton.classList.add('active') // Ajoute à (headerButton) la classe (active).
      
      const showContent = headerButton.parentElement.querySelector('.accordion-content') // Déclare une constante (showContent) + remonte à l'élément parent de (headerButton) + cherche dedans un élément avec la classe (accordion-content). Notre constante est égale à l'élément possédant cette classe.
      
      showContent.classList.add('show') // Ajoute la classe (show) à la constante (showContent).
    }
  });
});