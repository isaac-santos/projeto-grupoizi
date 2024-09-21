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
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function openTeam(){
    var menu = document.getElementById('equipe-resp');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function openOrde(){
    var menu = document.getElementById('especialidades-resp');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}