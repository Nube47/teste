const btnCadastrar = document.getElementById("btnCadastrar")

const Alunos = [];
const metricasTurma = {
    totalAlunos: 0,
    mediaTurma: 0,
    maiorNota: 0,
};

function adicionarAluno(iptNome, iptNota1, iptNota2) {
    const iptMedia = (Number(iptNota1) + Number(iptNota2)) / 2;
    let iptSituacao;

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

function insercaoTabela(iptNome, iptNota1, iptNota2, iptMedia, iptSituacao, iptIdentificador) {
    const containerTabela = document.getElementById("tblAlunos")

    const novaTabela = document.createElement(`tr`)
    novaTabela.dataset.id = iptIdentificador

    novaTabela.innerHTML = `
            <td">${iptIdentificador}</td>
            <td>${iptNome}</td>
            <td>${iptNota1}</td>
            <td>${iptNota2}</td>
            <td>${iptMedia}</td>
            <td> <span class="situacao ${iptSituacao}">${iptSituacao}</span></td>
            <button class="btn-excluir" type="button" id="btnDeletar">Excluir</button>
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
    let iptNota1 = document.querySelector("#iptNota1").value;
    let iptNota2 = document.querySelector("#iptNota2").value;

    if (iptNota1 == "" || iptNota1 == "e"
    || iptNota2 == "" || iptNota2 == "e"){
        alert("Digite valores!")
        return
    }
    iptNota1 = Number(iptNota1)
    iptNota2 = Number(iptNota2)

    if(
        !Number.isFinite(iptNota1) || !Number.isFinite(iptNota2)
        || iptNota1 < 0 || iptNota1 > 10
        || iptNota2 < 0 || iptNota2 > 10
    ) {
        alert("Digite valores corretos!")
        return
    }

    Alunos.push(adicionarAluno(iptNome, iptNota1, iptNota2));

    const iptIdentificador = Alunos.length - 1;
    const iptMedia = Alunos[iptIdentificador].iptMedia;
    const iptSituacao = Alunos[iptIdentificador].iptSituacao;

    insercaoTabela(
        iptNome,
        iptNota1,
        iptNota2,
        iptMedia,
        iptSituacao,
        iptIdentificador
    );

    atualizarMetricasTurma();

    console.log(metricasTurma);
});

const btnDeletar = document.getElementById("btnDeletar")
btnDeletar.addEventListener("click", function(){
    const tr = this.closest("tr");
    const iptIdentificador = rt.dataset.id;
    Alunos[iptIdentificador].
    tr.remove();
})