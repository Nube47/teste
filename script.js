const btnCadastrar = document.getElementById("btnCadastrar");
const Alunos = [];

let objeto = {

}

function adicionarAluno(iptNome, iptNota1, iptNota2) {
    return {
        nome: iptNome,
        iptNota1: iptNota1,
        iptNota2: iptNota2
    }
}

function insercaoTabela(iptNome, iptNota1, iptNota2, iptMedia, iptSituacao){
    const containerTabela = document.getElementById(tblAlunos);
    containerTabela.innerHTML(`
        <tr>
        <td>${iptNome}</td>
        <td>${iptNota1}</td>
        <td>${iptNota2}</td>
        <td>${(iptNota1, iptNota2) => {
            const media = (iptNota1 + iptNota2) / 2;
        if(media > 6){iptSituacao = "Aprovado"}
    else {iptSituacao = "Reprovado"}}}</td>
        <td></td>
        </tr>
        `)
}

//botão de cadastrar
btnCadastrar.addEventListener("click", function () {
    const iptNome = document.querySelector("#iptNome").value;
    const iptNota1 = document.querySelector("#iptNota1").value;
    const iptNota2 = document.querySelector("#iptNota2").value;

    Alunos.push(adicionarAluno(iptNome, iptNota1, iptNota2, ));


})