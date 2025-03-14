// Lógica do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const formMessage = document.getElementById('form-message');
        formMessage.classList.remove('d-none'); // Exibe a mensagem de sucesso
        this.reset(); // Limpa o formulário
    }
});