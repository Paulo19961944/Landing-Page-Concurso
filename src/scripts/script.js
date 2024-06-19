const bodyElement = document.querySelector('body') // Captura o Body
const menuBtn = document.getElementById('menu') // Captura o Menu
const abrirMenuMobile = document.getElementById('btnAbrirMobile') // Captura o Botão de Abrir
const fecharMenuMobile = document.getElementById('fecharMenuMobile') // Captura o Botão de Fechar

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