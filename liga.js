document.addEventListener('DOMContentLoaded', () => {
    // Dados para o Grupo A
    const groupA = [
        { 
            rank: 1, team: "IrmãsDePau.Gaming", matches: "3-0", logo: "assets/logo-irmas.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-odin.jpg" }, 
            round2: { result: "win", opponentLogo: "assets/logo-cre.jpg" }, 
            round3: { result: "win", opponentLogo: "assets/logo-chapados.jpg"}
        },
        { 
            rank: 2, team: "Caveiras Enfeitiçadas", matches: "1-1", logo: "assets/logo-cre.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-chapados.jpg" }, 
            round2: { result: "loss", opponentLogo: "assets/logo-irmas.jpg" }, 
            round3: { result: "n", opponentLogo: "assets/logo-odin.jpg" }
        },
        { 
            rank: 3, team: "Odin Young", matches: "1-1", logo: "assets/logo-odin.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-irmas.jpg" }, 
            round2: { result: "win", opponentLogo: "assets/logo-chapados.jpg" }, 
            round3: { result: "n", opponentLogo: "assets/logo-cre.jpg" }
        },
        { 
            rank: 4, team: "Chapados", matches: "0-3", logo: "assets/logo-chapados.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-cre.jpg" }, 
            round2: { result: "loss", opponentLogo: "assets/logo-odin.jpg" }, 
            round3: { result: "loss", opponentLogo: "assets/logo-irmas.jpg" }
        }
    ];

    // Dados para o Grupo B
    const groupB = [
        { 
            rank: 1, team: "NEM NOÉ CARREGA", matches: "2-0", logo: "assets/logo-nnc.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-antares.jpg" }, 
            round2: { result: "win", opponentLogo: "assets/logo-hd.jpg" }, 
            round3: { result: "n", opponentLogo: "assets/logo-fox.jpg"}
        },
        { 
            rank: 2, team: "Baby HD", matches: "1-1", logo: "assets/logo-hd.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-fox.jpg" }, 
            round2: { result: "loss", opponentLogo: "assets/logo-nnc.jpg" }, 
            round3: { result: "n", opponentLogo: "assets/logo-antares.jpg" }
        },
        { 
            rank: 3, team: "Antares Underdogs", matches: "1-1", logo: "assets/logo-antares.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-nnc.jpg" }, 
            round2: { result: "WIN", opponentLogo: "assets/logo-fox.jpg" }, 
            round3: { result: "n", opponentLogo: "assets/logo-hd.jpg" }
        },
        { 
            rank: 4, team: "FOXHOUND JUNIOR", matches: "0-2", logo: "assets/logo-fox.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-hd.jpg" }, 
            round2: { result: "loss", opponentLogo: "assets/logo-antares.jpg" }, 
            round3: { result: "n", opponentLogo: "assets/logo-nnc.jpg" }
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
            for (let i = 1; i <= 3; i++) {
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
  
});
