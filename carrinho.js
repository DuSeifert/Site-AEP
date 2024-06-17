const carrinho = [];
criarcarrinho();

function criarcarrinho(){
    const stringJson = localStorage.getItem('carrinho');
    const vetor = JSON.parse(stringJson);

    for(let i=0; i<vetor.length; i++){
        carrinho.push(vetor[i]);
    }
    mostrar(vetor);
}

function atualizar(){
    const stringJson = localStorage.getItem("carrinho");
    const vetor = JSON.parse(stringJson);

    mostrar(vetor);
}

function mostrar(vetor){

    var lista = document.getElementById("carrinho");
    lista.innerHTML = "";

    for(let i=0; i<vetor.length; i++){
        let obj = vetor[i];

        let tabela = document.createElement("table");
        tabela.innerHTML =
        `<tr>
            <th>Treino:</th>
            <td>${obj.nome}</td>
        </tr>
        <tr>
            <th>Descrição:</th>
            <td>${obj.descricao}</td>
            
        </tr>
        <tr>
            <th></th>
            <td><button onclick="removercarrinho(${i})" id="botao">Feito</button></td>
        </tr>`;

        lista.appendChild(tabela);

    
    }
    console.log(vetor);
}


function removercarrinho(item){
    carrinho.splice(item, 1);
    localStorage.removeItem('carrinho');

    const stringJson = JSON.stringify(carrinho);
    localStorage.setItem('carrinho', stringJson);
    atualizar();
    checarcarrinho();
}



function checarcarrinho(){
    if(carrinho.length == 0){
        document.getElementById('aviso').innerHTML = "Sua lista está vazia";
    }else{
        document.getElementById('aviso').innerHTML = "";
    }

}

function limparcarrinho(){
    carrinho.splice(0, carrinho.length);
    localStorage.removeItem('carrinho');
}

