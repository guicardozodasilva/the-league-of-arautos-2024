document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('#mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const menuLinks = document.querySelectorAll('.navbar-link');

    // Função para alternar o menu mobile
    function toggleMenu() {
        console.log('Toggle menu clicado!'); // Verifica se o clique está funcionando
        mobileMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    }

    // Abre/fecha o menu ao clicar no ícone hambúrguer
    mobileMenu.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em qualquer item de menu no modo mobile
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarMenu.classList.contains('active')) { // Verifica se o menu está aberto
                toggleMenu(); // Fecha o menu
            }
        });
    });

    // Código para inicialização dos carrosséis e outras funcionalidades
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

    // Staff
    const staffMembers = [
        { name: 'Davi Moreira Fuzatto', role: 'Idealizador e fundador da liga, programador e jogador de dota desde 2017!', photo: 'assets/staff-davi.jpg' },
        { name: 'Antares', role: 'Streamer e comentarista de dota 2, pai da copa dos divinos que hoje ajuda muito na liga como Manager', photo: 'assets/staff-antares.jpg' },
        { name: 'Metallica (nan)', role: 'Sou o Metallica, galera também me chama de “nan”. Tenho 32 anos, Pai da Laura e sou streamer e narrador de dota 2!', photo: 'assets/staff-metallica.jpg' },
        { name: 'L7', role: 'Me chamo Luíz Fernando vulgo L7 ceo da liga Decan e staff da tla e streamer nas horas vagas', photo: 'assets/staff-l7.jpg' },
        { name: 'kALEO', role: 'Dev catarinense responsável pelo desenvolvimento desse site', photo: 'assets/staff-kALEO.jpg' }
        // Adicione mais membros da staff aqui
    ];

    const staffCarousel = document.querySelector('.staff-carousel');
    staffMembers.forEach(member => {
        const staffElement = document.createElement('div');
        staffElement.className = 'staff-card';
        staffElement.innerHTML = `
            <img src="${member.photo}" alt="Foto de ${member.name}" class="staff-photo">
            <h3 class="staff-name">${member.name}</h3>
            <p class="staff-role">${member.role}</p>
        `;
        staffCarousel.appendChild(staffElement);
    });

    const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 700,
        reset: false  // Altere de true para false
    });
    
    scrollReveal.reveal(
        '#home, #regras, #inscricao, #equipes, #staff, #contato',
        {
            interval: 100
        }
    );

    // Função para alternar a exibição dos detalhes da categoria
    function toggleDetails(event) {
        const categoriaTitulo = event.currentTarget;
        const categoriaDetalhes = categoriaTitulo.nextElementSibling;
        
        console.log('Categoria clicada:', categoriaTitulo); // Verificar o clique
        console.log('Detalhes da categoria:', categoriaDetalhes); // Verificar detalhes
    
        // Alterna a exibição dos detalhes
        if (categoriaDetalhes.style.display === "block") {
            categoriaDetalhes.style.display = "none";
            categoriaTitulo.querySelector('.icon').classList.remove('rotate');
            console.log('Escondendo detalhes'); // Log para esconder detalhes
        } else {
            categoriaDetalhes.style.display = "block";
            categoriaTitulo.querySelector('.icon').classList.add('rotate');
            console.log('Mostrando detalhes'); // Log para mostrar detalhes
        }
    }

    // Seleciona todos os títulos de categoria e adiciona o evento de clique
    document.querySelectorAll('.categoria-titulo').forEach(titulo => {
        console.log('Elemento encontrado:', titulo); // Log para verificar elementos
        titulo.addEventListener('click', toggleDetails);
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
});
