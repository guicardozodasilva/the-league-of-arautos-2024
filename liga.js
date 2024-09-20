document.addEventListener('DOMContentLoaded', () => {
    // Dados para o Grupo A
    const groupA = [
        { 
            rank: 1, team: "IrmãsDePau.Gaming", matches: "2-0", logo: "assets/logo-irmas.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-odin.jpg" }, 
            round2: { result: "win", opponentLogo: "assets/logo-cre.jpg" }, 
            round3: { result: "n", opponentLogo: ""}, 
            round4: { result: "n", opponentLogo: "" }, 
            round5: { result: "n", opponentLogo: "" }
        },
        { 
            rank: 2, team: "Caveiras Enfeitiçadas", matches: "1-1", logo: "assets/logo-cre.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-chapados.jpg" }, 
            round2: { result: "loss", opponentLogo: "assets/logo-irmas.jpg" }, 
            round3: { result: "n", opponentLogo: "" }, 
            round4: { result: "n", opponentLogo: "" }, 
            round5: { result: "n", opponentLogo: "" }
        },
        { 
            rank: 3, team: "Odin Young", matches: "0-1", logo: "assets/logo-odin.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-irmas.jpg" }, 
            round2: { result: "n", opponentLogo: "" }, 
            round3: { result: "n", opponentLogo: "" }, 
            round4: { result: "n", opponentLogo: "" }, 
            round5: { result: "n", opponentLogo: "" }
        },
        { 
            rank: 4, team: "Chapados", matches: "0-1", logo: "assets/logo-chapados.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-cre.jpg" }, 
            round2: { result: "n", opponentLogo: "" }, 
            round3: { result: "n", opponentLogo: "" }, 
            round4: { result: "n", opponentLogo: "" }, 
            round5: { result: "n", opponentLogo: "" }
        }
    ];

    // Dados para o Grupo B
    const groupB = [
        { 
            rank: 1, team: "NEM NOÉ CARREGA", matches: "1-0", logo: "assets/logo-nnc.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-antares.jpg" }, 
            round2: { result: "n", opponentLogo: "" }, 
            round3: { result: "n", opponentLogo: ""}, 
            round4: { result: "n", opponentLogo: "" }, 
            round5: { result: "n", opponentLogo: "" }
        },
        { 
            rank: 2, team: "Baby HD", matches: "1-0", logo: "assets/logo-hd.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-fox.jpg" }, 
            round2: { result: "n", opponentLogo: "" }, 
            round3: { result: "n", opponentLogo: "" }, 
            round4: { result: "n", opponentLogo: "" }, 
            round5: { result: "n", opponentLogo: "" }
        },
        { 
            rank: 3, team: "Antares Underdogs", matches: "0-1", logo: "assets/logo-antares.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-nnc.jpg" }, 
            round2: { result: "n", opponentLogo: "" }, 
            round3: { result: "n", opponentLogo: "" }, 
            round4: { result: "n", opponentLogo: "" }, 
            round5: { result: "n", opponentLogo: "" }
        },
        { 
            rank: 4, team: "FOXHOUND JUNIOR", matches: "0-1", logo: "assets/logo-fox.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-hd.jpg" }, 
            round2: { result: "n", opponentLogo: "" }, 
            round3: { result: "n", opponentLogo: "" }, 
            round4: { result: "n", opponentLogo: "" }, 
            round5: { result: "n", opponentLogo: "" }
        }
    ];

    // Função para gerar as linhas da tabela com logos
    function populateTable(groupData, tableId) {
        const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
        
        groupData.forEach(team => {
            const row = tableBody.insertRow();

            // Criação da linha com os dados da equipe
            row.innerHTML = `
                <td>${team.rank}</td>
                <td>
                    <img src="${team.logo}" alt="Logo da ${team.team}" class="team-logo">
                    <div class="team-name">${team.team}</div>
                </td>
                <td>${team.matches}</td>
            `;

            // Adicionando rounds 1 a 5 dinamicamente
            for (let i = 1; i <= 5; i++) {
                const round = team[`round${i}`];
                const roundCell = row.insertCell();

                if (round.opponentLogo) {
                    roundCell.innerHTML = `<img src="${round.opponentLogo}" alt="Logo Adversário">`;
                    roundCell.classList.add('round', round.result); // Adiciona a classe win, loss, etc.
                } else {
                    roundCell.innerHTML = ''; // Deixa a célula vazia
                    roundCell.classList.add('round', round.result); // Apenas adiciona a classe sem conteúdo
                }
            }
        });
    }

    // Populando as tabelas dos grupos A e B
    populateTable(groupA, 'groupA');
    populateTable(groupB, 'groupB');


 
    /* Código antigos
    const teamsData = [
        { name: 'Antares Underdogs', logo: 'assets/logo-antares.jpg', played: 0, wins: 0, losses: 0 },
        { name: 'Baby HD', logo: 'assets/logo-hd.jpg', played: 0, wins: 0, losses: 0 },
        { name: 'Caveiras Enfeitiçadas', logo: 'assets/logo-cre.jpg', played: 0, wins: 0, losses: 0 },
        { name: 'FoxHound Junior', logo: 'assets/logo-fox.jpg', played: 0, wins: 0, losses: 0 },
        { name: 'IrmãsDePau.Gaming', logo: 'assets/logo-irmas.jpg', played: 0, wins: 0, losses: 0 },
        { name: 'Nem Noé Carrega', logo: 'assets/logo-nnc.jpg', played: 0, wins: 0, losses: 0 },
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
    */
});
