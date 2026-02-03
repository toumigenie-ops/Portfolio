// Données des articles
const articles = [
    {
        id: 'projet-1',
        title: 'Projet et Réalisations Techniques',
        category: 'projets',
        date: '2025-2026',
        excerpt: 'Présentation de mes projets techniques réalisés durant mon parcours académique et personnel.',
        content: 'Description détaillée de mes projets techniques réalisés depuis Septembre 2025.',
        image: 'assets/vignetteideee62655.jpg',
        projects: [
            {
                name: 'Conception d\'un Space Invader',
                description: 'Développement d\'un jeu Space Invader en groupe en utilisant Python.',
                image: 'assets/IMG_4299.jpg'
            },
            {
                name: 'CTF CyberSécurité',
                description: 'Participation à un Capture The Flag (CTF) en cybersécurité, résolution de divers challenges.',
                image: 'assets/cyber.png'
            },
            {
                name: 'Conception d\'une Application To-Do List',
                description: 'Développement d\'une application To-Do List en groupe sur le thème de la gestion de taches de cuisine.',
                image: 'assets/etodo.png'
            }
        ]
    },
    {
        id: 'exp-1',
        title: 'Employé Polyvalent - LIDL',
        category: 'experiences',
        date: 'Juin 2025 - Actuel',
        excerpt: 'Job d\'été prolongé en contrat étudiant de 14h.',
        content: 'Premier CDI qui m\'a permis de développer mes compétences en relation client et m\'adapter à un environnement professionnel impitoyable.\n\nMissions:\n• Accueil et conseil client\n• Gestion de la caisse\n• Réception et gestion des stocks\n• Mise en rayon et organisation du magasin',
        image: 'assets/Lidl.jpeg'
    },
    {
        id: 'exp-2',
        title: 'Préparateur de Commande Drive - Leclerc',
        category: 'experiences',
        date: '2024-2025 - 3 mois',
        excerpt: 'Premier job en tant que préparateur de commande drive.',
        content: 'Missions:\n• Préparation des commandes clients\n• Livraison des courses jusqu\'au véhicule\n• Accueil et renseignement du client',
    },
    {
        id: 'exp-3',
        title: 'Employé Libre-Service - Leclerc',
        category: 'experiences',
        date: '2024 - 2 mois',
        excerpt: 'Prolongation de mon contrat en tant qu\'employé libre-service.',
        content: 'Missions:\n• Accueil et conseil client\n• Gestion des rayons de marchandises\n• Gestion des stocks\n• Rangement et organisation de la réserve'
    },
    {
        id: 'about-1',
        title: 'Génie Toumi - Étudiant en Informatique',
        category: 'a-propos',
        date: 'Portfolio 2026',
        excerpt: 'Étudiant en Bachelor Informatique à Epitech Bordeaux, à la recherche d\'un stage pour développer mes compétences...',
        content: 'Étudiant en Bachelor Informatique à Epitech Bordeaux, je recherche un stage de 1 à 3 mois entre juin et août 2026. Motivé et curieux, je souhaite découvrir le milieu professionnel et développer mes compétences techniques.\n\nContact:\n📞 07 69 71 53 90\n📧 toumi.genie@gmail.com\n📍 Bordeaux\n',
        image: 'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwcm9ncmFtbWluZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc2ODIxMTc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        skills: {
            professional: [
                { name: 'Accueil et conseil client', level: 85 },
                { name: 'Gestion de la caisse', level: 80 },
                { name: 'Travail en équipe', level: 90 },
                { name: 'Gestion des commandes', level: 75 }
            ],
            technical: [
                { name: 'Python', level:55 },
                { name: 'HTML/CSS', level: 85 },
                { name: 'JavaScript', level: 75 },
                { name: 'Git', level: 70 },
                
            ],
            languages: [
                { name: 'Français', level: 100 },
                { name: 'Anglais', level: 80 },
                { name: 'Espagnol', level: 50 }
            ]
        },
        education: [
            {
                year: 2018,
                title: 'Brevet des collèges',
                school: 'Collège Georges Rayet, Floirac',
                description: 'Diplôme national des collèges',
                status: 'completed'
            },
            {
                year: 2021,
                title: 'Baccalauréat Général',
                school: 'Lycée François Mauriac',
                description: 'Spécialités: SES, HGGSP et LLCE',
                status: 'completed'
            },
            {
                year: 2024,
                title: 'Licence AES',
                school: 'Université Bordeaux 3',
                description: '1ère année complétée',
                status: 'completed'
            },
            {
                year: 2025,
                title: 'Bachelor Informatique',
                school: 'Epitech Bordeaux',
                description: 'En cours - Fin prévue 2027',
                status: 'in-progress'
            },
            {
                year: 2026,
                title: 'Stage de 1-3 mois',
                school: 'À déterminer',
                description: 'Recherche active - juin à août 2026',
                status: 'planned'
            }
        ],
        interests: [
            {
                icon: '🎵',
                title: 'Musique',
                description: 'Passionné de musique - pratique régulière et écoute variée'
            },
            {
                icon: '⚽',
                title: 'Sport',
                description: 'Football et basketball - passion pour le jeu d\'équipe et la compétition'
            },
            {
                icon: '👨‍🍳',
                title: 'Cuisine',
                description: 'Amateur de bonne nourriture - aime cuisiner et découvrir de saveurs'
            },
            {
                icon: '✈️',
                title: 'Voyager & Découvrir',
                description: 'Curieux et aventurier - aime explorer de nouveaux endroits et cultures'
            }
        ]
    }
];

// Playlist de musique
const playlist = [
    {
        id: 1,
        title: 'Horse With No Name',
        artist: 'AMERICA',
        url: 'assets/music/America - A Horse With No Name (Official Audio).mp3'
    },
    {
        id: 2,
        title: 'Crescendo',
        artist: 'KULTURR',
        url: 'assets/music/kulturr - Crescendo (Clip officiel).mp3'
    },
    {
        id: 3,
        title: 'Overrated',
        artist: 'BLXST',
        url: 'assets/music/Blxst - Overrated.mp3'
    }
];
