var openModalButtons = document.querySelectorAll('.btnabrirmodal');

var closeButtons = document.querySelectorAll('.fechar');

var modals = document.querySelectorAll('.modal');

openModalButtons.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = this.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }
});

closeButtons.forEach(function(btn) {
    btn.onclick = function() {
        var modal = this.closest('.modal');
        modal.style.display = 'none';
    }
});