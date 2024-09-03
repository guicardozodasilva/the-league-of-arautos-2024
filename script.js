document.addEventListener('DOMContentLoaded', () => {
    const teams = [
        { name: 'Antares Underdogs', logo: 'assets/logo-antares.jpg', players: ['Jogador 4', 'Jogador 5', 'Jogador 6'] },
        { name: 'NNCC', logo: 'assets/logo-nncc.jpg', players: ['Jaguá', 'Tears', 'Seu Cledson', 'Mosca', 'Anderson', 'kALEO'] },
        { name: 'CRE', logo: 'assets/logo-cre.jpg', players: ['Jogador 4', 'Jogador 5', 'Jogador 6'] },
        { name: 'É os Punhas', logo: 'assets/logo-punhas.jpg', players: ['Jogador 4', 'Jogador 5', 'Jogador 6'] }
        // Adicione mais equipes aqui
    ];

    const carousel = document.querySelector('.carousel');

    teams.forEach(team => {
        const teamElement = document.createElement('div');
        teamElement.className = 'team-card';
        teamElement.innerHTML = `
            <img src="${team.logo}" alt="Logo da ${team.name}" class="team-logo">
            <h3>${team.name}</h3>
            <p>Jogadores: ${team.players.join(', ')}</p>
        `;
        carousel.appendChild(teamElement);
    });

    const toggleButton = document.querySelector('.toggle-button');
    const hiddenRules = document.querySelector('.hidden-rules');

    toggleButton.addEventListener('click', () => {
        if (hiddenRules.style.display === 'none' || hiddenRules.style.display === '') {
            hiddenRules.style.display = 'block';
            toggleButton.textContent = 'Ver Menos Regras';
        } else {
            hiddenRules.style.display = 'none';
            toggleButton.textContent = 'Ver Mais Regras';
        }
    });

    const toggleButton2 = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    toggleButton2.addEventListener('click', () => {
        navbarMenu.style.display = navbarMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Script para esconder e mostrar o menu ao rolar a página
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Rola para baixo - Oculta o menu
            navbar.style.top = '-80px';
        } else {
            // Rola para cima - Mostra o menu
            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});
