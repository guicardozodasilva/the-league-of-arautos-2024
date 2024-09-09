document.addEventListener('DOMContentLoaded', () => {
    const teamsData = [
        { name: 'Antares Underdogs', logo: 'assets/logo-antares.jpg', played: 0, wins: 0, losses: 0 },
        { name: 'Nem Noé Carrega', logo: 'assets/logo-nnc.jpg', played: 0, wins: 0, losses: 0 },
        { name: 'Caveiras Enfeitiçadas', logo: 'assets/logo-cre.jpg', played: 0, wins: 0, losses: 0 },
        { name: 'Punhas', logo: 'assets/logo-punhas.jpg', played: 0, wins: 0, losses: 0 },
        { name: 'Odin Young', logo: 'assets/logo-odin.jpg', played: 0, wins: 0, losses: 0 }
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
            <td>
                <img src="${team.logo}" alt="Logo da ${team.name}" class="team-logo">
                <div class="team-name">${team.name}</div> <!-- Nome do time embaixo do logo -->
            </td>
            <td>${team.played}</td>
            <td>${team.wins}</td>
            <td>${team.losses}</td>
        `;
        console.log('Adicionando linha à tabela:', row); // Log para verificar a adição de linhas
        tabelaBody.appendChild(row);
    });

    console.log('Finalizado o preenchimento da tabela.');
});
