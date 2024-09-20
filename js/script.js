// Array para armazenar os alunos
let alunos = [
    { id: 1, nome: "Ana Silva", idade: 20, turma: "A", email: "ana.silva@email.com" },
    { id: 2, nome: "Bruno Souza", idade: 22, turma: "B", email: "bruno.souza@email.com" },
    { id: 3, nome: "Carla Oliveira", idade: 19, turma: "C", email: "carla.oliveira@email.com" },
    { id: 4, nome: "Daniel Costa", idade: 21, turma: "D", email: "daniel.costa@email.com" },
    { id: 5, nome: "Eduarda Lima", idade: 23, turma: "E", email: "eduarda.lima@email.com" },
    { id: 6, nome: "Felipe Alves", idade: 20, turma: "F", email: "felipe.alves@email.com" }
];

// Função para renderizar a lista de alunos na tabela
function renderizarAlunos() {
    const alunoLista = document.getElementById('aluno-lista');
    alunoLista.innerHTML = '';

    alunos.forEach(aluno => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.turma}</td>
            <td>${aluno.email}</td>
            <td class="text-center action-buttons">
                <button class="btn btn-sm btn-warning me-1" onclick="editarAluno(${aluno.id})">
                    <i class="bi bi-pencil-square"></i> Editar
                </button>
                <button class="btn btn-sm btn-danger" onclick="excluirAluno(${aluno.id})">
                    <i class="bi bi-trash"></i> Excluir
                </button>
            </td>
        `;
        alunoLista.appendChild(row);
    });
}

// Função para excluir um aluno
function excluirAluno(id) {
    alunos = alunos.filter(aluno => aluno.id !== id);
    renderizarAlunos();
}

// Função para carregar os dados de um aluno no formulário
function editarAluno(id) {
    const aluno = alunos.find(aluno => aluno.id === id);
    if (aluno) {
        document.getElementById('nome').value = aluno.nome;
        document.getElementById('idade').value = aluno.idade;
        document.getElementById('turma').value = aluno.turma;
        document.getElementById('email').value = aluno.email;

        // Substituir o botão de cadastrar pelo botão de atualizar
        const submitBtn = document.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Atualizar Aluno';
        submitBtn.onclick = function () {
            atualizarAluno(id);
        };
    }
}

// Função para atualizar um aluno
function atualizarAluno(id) {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const turma = document.getElementById('turma').value;
    const email = document.getElementById('email').value;

    alunos = alunos.map(aluno => {
        if (aluno.id === id) {
            return { id, nome, idade, turma, email };
        }
        return aluno;
    });

    // Resetar o formulário e o botão
    document.getElementById('form-aluno').reset();
    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Cadastrar Aluno';
    submitBtn.onclick = function (event) {
        event.preventDefault();
        cadastrarAluno();
    };

    renderizarAlunos();
}

// Função para cadastrar um novo aluno
function cadastrarAluno(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const turma = document.getElementById('turma').value;
    const email = document.getElementById('email').value;

    const novoAluno = {
        id: alunos.length ? alunos[alunos.length - 1].id + 1 : 1,
        nome,
        idade,
        turma,
        email
    };

    alunos.push(novoAluno);
    renderizarAlunos();
    document.getElementById('form-aluno').reset();
}

// Associar a função ao evento de submit do formulário
document.getElementById('form-aluno').addEventListener('submit', cadastrarAluno);

