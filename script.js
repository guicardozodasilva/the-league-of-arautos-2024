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
        { name: 'Antares Underdogs', logo: 'assets/logo-antares.jpg', players: ['Antares', '<br>Pacheco', '<br>Feioso', '<br>Sant', '<br>Braia', '<br>CGaura', '<br>Xuulinha'] },
        { name: 'Baby HD', logo: 'assets/logo-hd.jpg', players: ['m e t a l l i c a ', '<br>clovis', '<br>RENAN POSSUIDÃO', '<br>Bonsai da Montanha', '<br>blackbox', '<br>ARKYN 雨~', '<br>WwN-', '<br>COACH: Joninhas'] },
        { name: 'Caveiras Enfeitiçadas', logo: 'assets/logo-cre.jpg', players: ['CaveiraRosa', '<br>Vidal', '<br>Metabee', '<br>Kenux', '<br>Calunga', '<br>Rato'] },
        { name: 'Chapados', logo: 'assets/logo-chapados.jpg', players: ['Desistiram da liga'] },
        { name: 'FoxHound Junior', logo: 'assets/logo-fox.jpg', players: ['Bagdendi', '<br>FAKE NATTY', '<br>Nego_Fenix', '<br>AlTeRad0x1', '<br>Vampagaio', '<br>PlayerDu'] },
        { name: 'IrmãsDePau.Gaming', logo: 'assets/logo-irmas.jpg', players: ['PAREDÃO_KRN', '<br>JHOON', '<br>DINNAH', '<br>GONKAY', '<br>CHASEIRA', '<br>KEEPDRUNKA', '<br>DANGER', '<br>DINO.KILLER', '<br>COACH: RUFO'] },
        { name: 'NNC', logo: 'assets/logo-nnc.jpg', players: ['Jaguá', '<br>Tears', '<br>Seu Cledson', '<br>Mosca', '<br>#blackbison', '<br>kALEO', '<br>Lambaio Véio', '<br>COACH: Hermione'] },
        { name: 'Odin', logo: 'assets/logo-odin.jpg', players: ['Ignel@Neoxa', '<br>Bigode', '<br>PoKaS', '<br>sinteil', '<br>L7deAngra', '<br>Kael'] }
        // Adicione mais equipes aqui
    ];

    const carousel = document.querySelector('.carousel');

    teams.forEach(team => {
        const teamElement = document.createElement('div');
        teamElement.className = 'team-card';
        teamElement.innerHTML = `
            <img src="${team.logo}" alt="Logo da ${team.name}" class="team-logo">
            <h3>${team.name}</h3>
            <p>${team.players.join(', ')}</p>
        `;
        carousel.appendChild(teamElement);
    });

    // Staff
    const staffMembers = [
        { name: 'Davi Moreira Fuzatto', role: 'Idealizador e fundador da liga, programador e jogador de dota desde 2017!', photo: 'assets/staff-davi.jpg' },
        { name: 'Antares', role: 'Streamer e comentarista de dota 2, pai da copa dos divinos que hoje ajuda muito na liga como Manager', photo: 'assets/staff-antares.jpg' },
        { name: 'Metallica (nan)', role: 'Sou o Metallica, galera também me chama de “nan”. Tenho 32 anos, Pai da Laura e sou streamer e narrador de dota 2!', photo: 'assets/staff-metallica.jpg' },
        { name: 'L7', role: 'Me chamo Luíz Fernando vulgo L7 ceo da liga Decan e staff da tla e streamer nas horas vagas', photo: 'assets/staff-l7.jpg' },
        { name: 'Gabriel Aragão Souza (Lagaum)', role: 'Co-fundador do TLA, iniciado no mundo do Dota por volta de 2006, doteiro antes mesmo de ser gente. Comentarista do primeiro TLA. Streamer e youtuber de ambos Dota e Deadlock.', photo: 'assets/staff-lagaum.jpg' },
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
