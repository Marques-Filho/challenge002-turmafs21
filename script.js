const form = document.getElementById('formCadastro');
const btnCadastrar = document.getElementById('btnCadastrar');
const formSuccess = document.getElementById('formSuccess');

// Função para habilitar/desabilitar o botão de cadastrar
form.addEventListener('input', () => {
    const nome = form.nome.value.trim();
    const idade = form.idade.value.trim();
    const turma = form.turma.value.trim();
    const email = form.email.value.trim();

    if (nome && idade && turma && email) {
        btnCadastrar.disabled = false;
    } else {
        btnCadastrar.disabled = true;
    }
});

// Simular submissão do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o envio do formulário
    formSuccess.style.display = 'block'; // Exibe mensagem de sucesso
    setTimeout(() => {
        formSuccess.style.display = 'none'; // Oculta a mensagem após 3 segundos
        form.reset(); // Limpa o formulário
        btnCadastrar.disabled = true; // Desabilita o botão novamente
    }, 3000);
});