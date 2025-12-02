const headers = document.querySelectorAll('.accordion-header') 
headers.forEach(headerButton => { 
  
  headerButton.addEventListener('click', () => { 
    const isActive = headerButton.classList.contains('active'); 
    
    headers.forEach(closeHeader => {  
      closeHeader.classList.remove('active')
      const closeContent = closeHeader.parentElement.querySelector('.accordion-content') 
      closeContent.classList.remove('show') 
    }); 
    
    if (!isActive) { 
      headerButton.classList.add('active') 
      const showContent = headerButton.parentElement.querySelector('.accordion-content') 
      showContent.classList.add('show') 
    }
    
  });
});
