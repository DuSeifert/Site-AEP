let nome = document.getElementById("nome");
let descricao = CKEDITOR.instances.descricao; // Usar CKEDITOR para acessar o textarea

const catalogo = [];
criarcatalogo();

function criarcatalogo() {
    const stringJson = localStorage.getItem('catalogo');
    const vetor = JSON.parse(stringJson) || [];

    for (let i = 0; i < vetor.length; i++) {
        catalogo.push(vetor[i]);
    }
    mostrar(catalogo);
}

function adicionar() {
    let descricaoValue = CKEDITOR.instances.descricao.getData(); // Obter valor do CKEditor

    if (nome.value === "" || descricaoValue === "") {
        document.getElementById('aviso').innerHTML = "Preencha todos os campos";
    } else {
        document.getElementById('aviso').innerHTML = "";
        const obj = {
            nome: nome.value,
            descricao: descricaoValue,
        };
        add(obj);
    }
}

function add(obj) {
    catalogo.push(obj);
    const stringJson = JSON.stringify(catalogo);
    localStorage.setItem("catalogo", stringJson);
    atualizar();
}

function atualizar() {
    const stringJson = localStorage.getItem("catalogo");
    const vetor = JSON.parse(stringJson) || [];
    mostrar(vetor);
}

function mostrar(vetor) {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < vetor.length; i++) {
        let obj = vetor[i];

        let tabela = document.createElement("table");
        tabela.innerHTML =
            `<tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Editar</th>
                <th>Deletar</th>
            </tr>
            <tr>
                <td>${obj.nome}</td>
                <td>${obj.descricao}</td>
                <td><button onclick="editar(${i})" id="botao">Editar</button></td>
                <td><button onclick="deletar(${i})" id="botao" class="vermelho">Deletar</button></td>
            </tr>`;

        lista.appendChild(tabela);
    }
    console.log(vetor);
}

function editar(item) {
    let edit = JSON.parse(localStorage.getItem('catalogo')) || [];

    document.getElementById('nome').value = edit[item].nome;
    CKEDITOR.instances.descricao.setData(edit[item].descricao); // Usar CKEDITOR para definir o valor
    deletar(item);
}

function deletar(item) {
    catalogo.splice(item, 1);
    localStorage.setItem('catalogo', JSON.stringify(catalogo));
    atualizar();
}

// Expor funções globais
window.adicionar = adicionar;
window.editar = editar;
window.deletar = deletar;
