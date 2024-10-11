function animateCSS(element, animation, prefix = 'animate__') {
    return new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
}

window.onload = function() {
    animateCSS('#logo', 'fadeInRightBig');
};

function openNav(){
    var menu = document.getElementById('camadas-resp');
    
    if (menu.style.display === 'none' || menu.style.display === '') {
        // Mostra o menu primeiro para permitir a transição
        menu.style.display = 'block';
        
        // Usa um pequeno delay para garantir que o display: block seja aplicado antes da transição
        setTimeout(function() {
            menu.classList.add('show');
        }, 10);  // Delay curto para a transição funcionar
    } else {
        // Remove a classe para começar a animação de recolher
        menu.classList.remove('show');
        
        // Aguarda a transição terminar e então esconde o menu
        setTimeout(function() {
            menu.style.display = 'none';
        }, 500);  // Tempo igual ao da transição no CSS (0.5s)
    }
}

function openClinic(){
    var menu = document.getElementById('clinica-resp');
    var button = document.querySelector('button[onclick="openClinic()"]');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        button.innerHTML = 'Clinica ▲';
    } else {
        menu.style.display = 'none';
        button.innerHTML = 'Clinica ▼';
    }
}

function openTeam(){
    var menu = document.getElementById('equipe-resp');
    var button = document.querySelector('button[onclick="openTeam()"]');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        button.innerHTML = 'Equipe ▲';
    } else {
        menu.style.display = 'none';
        button.innerHTML = 'Equipe ▼';
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const cardList = document.querySelector('.card-list');
    const cardItems = document.querySelectorAll('.card-item');
    const prevBtn = document.querySelector('.espcialidade-ant');
    const nextBtn = document.querySelector('.especialidade-sub');

    if (!cardList || !cardItems.length || !prevBtn || !nextBtn) {
        console.error("Um ou mais elementos não foram encontrados.");
        return; // Sai se não encontrar os elementos
    }

    let counter = 0;
    const size = cardItems[0].offsetWidth + parseInt(getComputedStyle(cardItems[0]).marginRight);

    // Função para avançar
    function proximo() {
        if (counter < cardItems.length - 1) {
            counter++;
        } else {
            counter = 0; // Reseta para o início
        }
        cardList.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // Função para voltar
    function movePrev() {
        if (counter > 0) {
            counter--;
        } else {
            counter = cardItems.length - 1; // Vai para o final
        }
        cardList.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // Configurando os botões
    prevBtn.onclick = movePrev;
    nextBtn.onclick = proximo;
});