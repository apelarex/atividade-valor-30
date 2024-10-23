let cliente = [];

// 
function cadastrarCliente(nome, email) {
    const cliente = { nome, email };
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
            <td>${cliente.email}</td>
        `;
        tbody.appendChild(row);
    });
}