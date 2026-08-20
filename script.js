const btnCadastrar = document.getElementById("btnCadastrar");
const Alunos = [];
const metricasTurma = {
    totalAlunos: 0,
    mediaTurma: 0,
    maiorNota: 0,
};

function adicionarAluno(iptNome, iptNota1, iptNota2) {
    const iptMedia = (Number(iptNota1) + Number(iptNota2)) / 2;
    let iptSituacao = "Não Verificado";

    if (iptMedia > 6) {
        iptSituacao = "Aprovado";
    } else {
        iptSituacao = "Reprovado";
    }

    return {
        nome: iptNome,
        iptNota1: iptNota1,
        iptNota2: iptNota2,
        iptMedia: iptMedia,
        iptSituacao: iptSituacao,
    };
}

function insercaoTabela(iptNome, iptNota1, iptNota2, iptMedia, iptSituacao) {
    const containerTabela = document.getElementById("tblAlunos");

    const novaTabela = document.createElement("tr");

    novaTabela.innerHTML = `
        <tr>
            <td>${iptNome}</td>
            <td>${iptNota1}</td>
            <td>${iptNota2}</td>
            <td>${iptMedia}</td>
            <td>${iptSituacao}</td>
        </tr>
    `;

    containerTabela.appendChild(novaTabela);
}

function atualizarMetricasTurma() {

    // Atualizar total de alunos
    metricasTurma.totalAlunos = Alunos.length;

    // Calcular média da turma e maior nota
    metricasTurma.calcMedia = (totalAlunos) => {
        let notaTotalTurma = 0;

        for (let i = 0; i < totalAlunos; i++) {
            notaTotalTurma += Number(Alunos[i].iptMedia);
        }

        return notaTotalTurma / metricasTurma.totalAlunos;
    };

    metricasTurma.mediaTurma = metricasTurma.calcMedia(
        metricasTurma.totalAlunos
    );

    // Maior nota
    metricasTurma.maiorNota = (() => {
        let maiorNota = 0;

        for (let i = 0; i < metricasTurma.totalAlunos; i++) {
            if (Alunos[i].iptMedia > maiorNota) {
                maiorNota = Alunos[i].iptMedia;
            }
        }

        return maiorNota;
    })();

    // realizar a inserção na tela
    const txtTotalAlunos = document.getElementById("txtTotalAlunos");
    const txtMediaGeral = document.getElementById("txtMediaGeral");
    const txtMaiorGeral = document.getElementById("txtMaiorMedia");

    txtTotalAlunos.innerHTML = `Total de Alunos: ${metricasTurma.totalAlunos}`
    txtMediaGeral.innerHTML = `Média Geral da Turma: ${metricasTurma.mediaTurma}`
    txtMaiorGeral.innerHTML = `Melhor Desempenho: ${metricasTurma.maiorNota}`
}

// Botão de cadastrar
btnCadastrar.addEventListener("click", function () {
    const iptNome = document.querySelector("#iptNome").value;
    const iptNota1 = document.querySelector("#iptNota1").value;
    const iptNota2 = document.querySelector("#iptNota2").value;

    Alunos.push(adicionarAluno(iptNome, iptNota1, iptNota2));

    const iptMedia = Alunos[Alunos.length - 1].iptMedia;
    const iptSituacao = Alunos[Alunos.length - 1].iptSituacao;

    insercaoTabela(
        iptNome,
        iptNota1,
        iptNota2,
        iptMedia,
        iptSituacao
    );

    atualizarMetricasTurma();

    console.log(metricasTurma);
});