let cliente = [];

// 
function cadastrarCliente(nome, cpf, email, senha) {
    const cliente = { nome, cpf, email, senha };
    cliente.push(cliente);
    atualizarTabela();
}


function atualizarTabela() {
    const tbody = document.getElementById('tbody-cadastro');
    tbody.innerHTML = '';

    cliente.forEach((cliente, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.email}</td>
        `;
        tbody.appendChild(row);
    });
}