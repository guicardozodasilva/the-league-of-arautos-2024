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
            rank: 2, team: "Caveiras Enfeitiçadas", matches: "2-1", logo: "assets/logo-cre.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-chapados.jpg" }, 
            round2: { result: "loss", opponentLogo: "assets/logo-irmas.jpg" }, 
            round3: { result: "win", opponentLogo: "assets/logo-odin.jpg" }
        },
        { 
            rank: 3, team: "Odin Young", matches: "1-2", logo: "assets/logo-odin.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-irmas.jpg" }, 
            round2: { result: "win", opponentLogo: "assets/logo-chapados.jpg" }, 
            round3: { result: "loss", opponentLogo: "assets/logo-cre.jpg" }
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
            rank: 1, team: "NEM NOÉ CARREGA", matches: "3-0", logo: "assets/logo-nnc.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-antares.jpg" }, 
            round2: { result: "win", opponentLogo: "assets/logo-hd.jpg" }, 
            round3: { result: "win", opponentLogo: "assets/logo-fox.jpg"}
        },
        { 
            rank: 2, team: "Baby HD", matches: "2-1", logo: "assets/logo-hd.jpg",
            round1: { result: "win", opponentLogo: "assets/logo-fox.jpg" }, 
            round2: { result: "loss", opponentLogo: "assets/logo-nnc.jpg" }, 
            round3: { result: "win", opponentLogo: "assets/logo-antares.jpg" }
        },
        { 
            rank: 3, team: "Antares Underdogs", matches: "1-2", logo: "assets/logo-antares.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-nnc.jpg" }, 
            round2: { result: "win", opponentLogo: "assets/logo-fox.jpg" }, 
            round3: { result: "loss", opponentLogo: "assets/logo-hd.jpg" }
        },
        { 
            rank: 4, team: "FOXHOUND JUNIOR", matches: "0-3", logo: "assets/logo-fox.jpg",
            round1: { result: "loss", opponentLogo: "assets/logo-hd.jpg" }, 
            round2: { result: "loss", opponentLogo: "assets/logo-antares.jpg" }, 
            round3: { result: "loss", opponentLogo: "assets/logo-nnc.jpg" }
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

    /*
    function substituirSpanPorImagemENome(matchSelectorAll, imageSrc1, imageAlt1, teamName1, imageSrc2, imageAlt2, teamName2) {
        var matches = document.querySelectorAll(matchSelectorAll); // Seleciona os elementos que correspondem ao seletor
    
        matches.forEach((element, index) => {
            if (index === 0) {
                substituicoes(element, imageSrc1, imageAlt1, teamName1, false); // Ordem padrão: logo antes
            }
            if (index === 3) {
                substituicoes(element, imageSrc2, imageAlt2, teamName2, true); // Ordem invertida: nome antes
            }
        });
    
        function substituicoes(element, imageSrc, imageAlt, teamName, invertOrder) {
            // Cria o elemento img
            var imgElement = document.createElement('img');
            imgElement.src = imageSrc; // Define o caminho da imagem
            imgElement.alt = imageAlt; // Define o texto alternativo
            imgElement.className = 'team-logo'; // Define a classe
    
            // Define o tamanho da imagem
            imgElement.style.width = '50px'; // Defina a largura desejada
            imgElement.style.height = 'auto'; // Mantém a proporção da altura
    
            // Cria o elemento span para o nome do time
            var teamNameElement = document.createElement('a');
            teamNameElement.textContent = teamName; // Define o texto do nome do time
            teamNameElement.className = 'team-name'; // Define a classe para o estilo
    
            // Cria um contêiner para imagem e nome
            var container = document.createElement('div');
            container.className = 'team-container'; // Define uma classe para o contêiner
    
            // Verifica a ordem de inserção
            if (invertOrder) {
                //container.appendChild(teamNameElement); // Adiciona o nome primeiro
                container.appendChild(imgElement); // Adiciona a imagem depois
            } else {
                container.appendChild(imgElement); // Adiciona a imagem primeiro
                //container.appendChild(teamNameElement); // Adiciona o nome depois
            }
    
            // Substitui o span pelo contêiner (imagem + nome)
            element.parentNode.replaceChild(container, element);
        }
    }
    
    // Substituir span por imagem e nome do time nas partidas
    substituirSpanPorImagemENome('.bracket#upper-bracket .round:nth-child(2) .match span', 'assets/logo-nnc.jpg', 'Logo NNC', 'NEM NOÉ CARREGA', 'assets/logo-cre.jpg', 'Logo CRE', 'Caveiras Enfeitiçadas');    
    */
  
});
