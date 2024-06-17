atualizar();

function atualizar(){
    const stringJson = localStorage.getItem("ListaTreinos");
    const vetor = JSON.parse(stringJson);

    mostrar(vetor);
}

function mostrar(vetor){

    var lista = document.getElementById("ListaTreino");
    lista.innerHTML = "";

    if(vetor){
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
                <td><button onclick="removerListaTreino(${i})" id="botao">Feito</button></td>
            </tr>`;
    
            lista.appendChild(tabela);
        }
    }
    else{
        let tabela = document.createElement("table");
        tabela.innerHTML =`
            Lista de treinos vazia
        `;
        lista.appendChild(tabela);
    }
    console.log(vetor);
}


function removerListaTreino(item){
    let obj = JSON.parse(localStorage.getItem('ListaTreinos'))

    obj.splice(item, 1);
    localStorage.removeItem('ListaTreinos');

    const stringJson = JSON.stringify(obj);
    localStorage.setItem('ListaTreinos', stringJson);
    atualizar();
    checarListaTreino();
}



function checarListaTreino(){
    const listaTreinos = JSON.parse(localStorage.getItem('ListaTreinos'));

    if(listaTreinos.length === 0    ){
        document.getElementById('aviso').innerHTML = "Sua lista está vazia";
    }else{
        document.getElementById('aviso').innerHTML = "";
    }
    atualizar();
}