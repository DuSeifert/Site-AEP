atualizar();
//----------------------------------------------------------------------------------

function logar(){
    if(document.getElementById('usuario').value === "" || document.getElementById('senha').value === ""){
        document.getElementById('aviso').innerHTML = "Preencha todos os campos";
    }else{
        if(document.getElementById('usuario').value === "admin" && document.getElementById('senha').value === "admin"){
            alert("Entrando na Página de ADM");
            window.location.href = "adm.html";
        }else{
            alert("Seja bem vindo!");
            window.location.href = "treinos.html";
        }
    }
}

//----------------------------------------------------------------------------------

function atualizar(){
    const stringJson = localStorage.getItem("catalogo");
    const vetor = JSON.parse(stringJson);

    mostrar(vetor);
}

function mostrar(vetor){
    var lista = document.getElementById("catalogo");
    lista.innerHTML = "";

    if(vetor){
        for (let i = 0; i < vetor.length; i++) {
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
                    <th>Adicionar à sua lista:</th>
                    <td><button onclick="addListaTreinos(${i})" id="botao">+</button></td>
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

//----------------------------------------------------------------------------------

function addListaTreinos(item){
    const stringJson = JSON.parse(localStorage.getItem('catalogo'));
    const obj = stringJson[item];

    let ListaTreinos = JSON.parse(localStorage.getItem('ListaTreinos'))

    if(ListaTreinos){
        ListaTreinos.push(obj);
    }
    else{
        ListaTreinos = [obj];
    }

    const stringNova = JSON.stringify(ListaTreinos);
    localStorage.setItem('ListaTreinos', stringNova);
    alert("TREINO ADICIONADO");
    
    console.log(ListaTreinos);
}