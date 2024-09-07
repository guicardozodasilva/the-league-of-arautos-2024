// liga.js

document.addEventListener('DOMContentLoaded', () => {
    const teamsData = [
        { logo: 'assets/logo-antares.jpg', played: 5, wins: 3, losses: 2 },
        { logo: 'assets/logo-nncc.jpg', played: 6, wins: 4, losses: 2 },
        { logo: 'assets/logo-cre.jpg', played: 4, wins: 2, losses: 2 },
        { logo: 'assets/logo-punhas.jpg', played: 7, wins: 5, losses: 2 }
        // Adicione mais equipes aqui
    ];

    const tabelaBody = document.getElementById('liga-tabela-body');

    if (!tabelaBody) {
        console.error('Erro: elemento tbody com ID "liga-tabela-body" não encontrado.');
        return;
    } else {
        console.log('Elemento tbody encontrado:', tabelaBody);
    }

    teamsData.forEach(team => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${team.logo}" alt="Logo da ${team.name}" class="team-logo"></td>
            <td>${team.played}</td>
            <td>${team.wins}</td>
            <td>${team.losses}</td>
        `;
        console.log('Adicionando linha à tabela:', row); // Log para verificar a adição de linhas
        tabelaBody.appendChild(row);
    });

    console.log('Finalizado o preenchimento da tabela.');
});
