// Quando o usuário rolar a página, mostrar ou ocultar o botão "Voltar para o topo"
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  // Quando o usuário clicar no botão "Voltar para o topo", rolar suavemente para o topo da página
  function topFunction() {
    const htmlElement = document.documentElement; // Elemento <html> para navegadores Chrome, Firefox, IE e Opera
    const bodyElement = document.body; // Elemento <body> para navegadores Safari
  
    const scrollToTopElement = htmlElement.scrollTop ? htmlElement : bodyElement; // Escolhe o elemento apropriado
  
    // Rola suavemente até o topo da página
    scrollToTopElement.scrollTo({
      top: 0,
      behavior: "smooth" // cria uma animação suave durante a rolagem da página.
    });
  }
  
  