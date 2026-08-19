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

function insercaoTabela(iptNome, iptNota1, iptNota2){
    const containerTabela = document.getElementById("tblAlunos");
    const iptMedia = (Number(iptNota1) + Number(iptNota2)) / 2;
    let iptSituacao = "Não Verificado";

    if (iptMedia  > 6) iptSituacao = "Aprovado";
        else iptSituacao = "Reprovado";

    const novaTabela = document.createElement ('tr');
    novaTabela.innerHTML = `
        <tr>
        <td>${iptNome}</td>
        <td>${iptNota1}</td>
        <td>${iptNota2}</td>
        <td>${iptMedia}</td>
        <td>${iptSituacao}</td>
        </tr>
        `

    containerTabela.appendChild(novaTabela)
}
//botão de cadastrar
btnCadastrar.addEventListener("click", function () {
    const iptNome = document.querySelector("#iptNome").value;
    const iptNota1 = document.querySelector("#iptNota1").value;
    const iptNota2 = document.querySelector("#iptNota2").value;

    Alunos.push(adicionarAluno(iptNome, iptNota1, iptNota2, ));
    insercaoTabela(iptNome, iptNota1, iptNota2)

})