const bodyElement = document.querySelector('body') // Captura o Body
const menuBtn = document.getElementById('menu') // Captura o Menu
const abrirMenuMobile = document.getElementById('btnAbrirMobile') // Captura o Botão de Abrir
const fecharMenuMobile = document.getElementById('fecharMenuMobile') // Captura o Botão de Fechar
const menuLinks = document.querySelectorAll('#menu ul li a')

// Fecha o menu ao clicar nos links do menu
for(const link of menuLinks){
    // Adiciona evento de click no link do menu
    link.addEventListener('click', (event) => {
        fecharMenu() // Fecha o menu
    })
}

// Função para Abrir Menu
const abrirMenu = () => {
    menuBtn.classList.add('menu-mobile') // Adiciona classe no Menu
    abrirMenuMobile.classList.add('abrir-menu-responsive') // Adiciona Classe no Botão de Abrir
    fecharMenuMobile.classList.add('fechar-menu-responsive') // Adiciona Classe no Botão de Fechar
    bodyElement.style.overflow = 'hidden' // Trava a Tela
}

// Função para Fechar Menu
const fecharMenu = () => {
    menuBtn.classList.remove('menu-mobile') // Remove Classe no Menu
    abrirMenuMobile.classList.remove('abrir-menu-responsive') // Remove Classe no Botão Abrir
    fecharMenuMobile.classList.remove('fechar-menu-responsive') // Remove Classe no Botão Fechar
    bodyElement.style.overflow = 'auto' // Volta ao Normal
}

abrirMenuMobile.addEventListener('click', abrirMenu) // Adiciona Evento no Botão Abrir
fecharMenuMobile.addEventListener('click', fecharMenu) // Adiciona Evento no Botão Fechar