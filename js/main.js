// State
let currentView = 'home';
let currentCategory = null;
let currentArticle = null;

// DOM Elements
const homeView = document.getElementById('homeView');
const categoryView = document.getElementById('categoryView');
const articleView = document.getElementById('articleView');
const btnBack = document.getElementById('btnBack');
const navButtons = document.querySelectorAll('nav button');
const categoryCards = document.querySelectorAll('.category-card');

function showView(view) {
    homeView.classList.add('hidden');
    categoryView.classList.add('hidden');
    articleView.classList.add('hidden');

    if (view === 'home') {
        homeView.classList.remove('hidden');
        btnBack.classList.remove('active');
        currentView = 'home';
        currentCategory = null;
        currentArticle = null;
        updateNav();
    } else if (view === 'category') {
        categoryView.classList.remove('hidden');
        btnBack.classList.add('active');
        currentView = 'category';
        currentArticle = null;
        updateNav();
    } else if (view === 'article') {
        articleView.classList.remove('hidden');
        btnBack.classList.add('active');
        currentView = 'article';
        updateNav();
    }

    window.scrollTo(0, 0);
}

function updateNav() {
    navButtons.forEach(btn => {
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function showCategory(category) {
    currentCategory = category;
    const filteredArticles = articles.filter(a => a.category === category);
    
    // Aller directement sur l'article si c'est "projets" ou "a-propos"
    if ((category === 'projets' || category === 'a-propos') && filteredArticles.length > 0) {
        showArticle(filteredArticles[0].id);
        return;
    }
    
    document.getElementById('categoryTitle').textContent = getCategoryLabel(category);
    document.getElementById('articleCount').textContent = 
        `${filteredArticles.length} ARTICLE${filteredArticles.length > 1 ? 'S' : ''}`;

    const grid = document.getElementById('articlesGrid');
    grid.innerHTML = '';

    filteredArticles.forEach((article, index) => {
        const card = document.createElement('div');
        card.className = `article-card ${index === 0 ? 'featured' : ''}`;
        card.innerHTML = `
            ${article.image ? `
                <div class="article-image">
                    <img src="${article.image}" alt="${article.title}">
                    <div class="article-badge">${getCategoryLabel(article.category)}</div>
                </div>
            ` : ''}
            <div class="article-body">
                <div class="article-date">${article.date}</div>
                <h3 class="article-title serif">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <span class="article-link">LIRE L'ARTICLE →</span>
            </div>
        `;
        card.addEventListener('click', () => showArticle(article.id));
        grid.appendChild(card);
    });

    showView('category');
}

function showArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    currentArticle = article;
    const detail = document.getElementById('articleDetail');

    let projectHTML = '';
    if (article.projects && article.projects.length > 0) {
        projectHTML = `
            <div class="projects-gallery">
                <div class="projects-header">
                    <div class="projects-bar"></div>
                    <h2 class="serif">MES RÉALISATIONS</h2>
                </div>
                <div class="projects-grid">
                    ${article.projects.map((project, index) => `
                        <div class="project-card">
                            <div class="project-image">
                                <img src="${project.image}" alt="${project.name}">
                            </div>
                            <div class="project-content">
                                <h3 class="serif">${project.name}</h3>
                                <p>${project.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let skillsHTML = '';
    if (article.skills) {
        skillsHTML = `
            <div class="skills-section">
                <div class="skills-header">
                    <div class="skills-bar"></div>
                    <h2 class="serif">COMPÉTENCES</h2>
                </div>
                
                <div class="skills-category">
                    <h3>Compétences Professionnelles</h3>
                    <div class="skills-grid">
                        ${article.skills.professional.map(skill => `
                            <div class="skill-card">
                                <div class="skill-header">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-percentage">${skill.level}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="skills-category">
                    <h3>Compétences Techniques</h3>
                    <div class="skills-grid">
                        ${article.skills.technical.map(skill => `
                            <div class="skill-card">
                                <div class="skill-header">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-percentage">${skill.level}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="skills-category">
                    <h3>Langues</h3>
                    <div class="skills-grid">
                        ${article.skills.languages.map(skill => `
                            <div class="skill-card">
                                <div class="skill-header">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-percentage">${skill.level}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    let educationHTML = '';
    if (article.education && article.education.length > 0) {
        educationHTML = `
            <div class="education-section">
                <div class="education-header">
                    <div class="education-bar"></div>
                    <h2 class="serif">PARCOURS FORMATION</h2>
                </div>
                <div class="timeline">
                    ${article.education.map((edu, index) => `
                        <div class="timeline-item ${edu.status}">
                            <div class="timeline-marker">
                                <div class="marker-dot"></div>
                                <div class="marker-label">${edu.year}</div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-card">
                                    <h3 class="serif">${edu.title}</h3>
                                    <p class="timeline-school">${edu.school}</p>
                                    <p class="timeline-description">${edu.description}</p>
                                    <span class="timeline-status ${edu.status}">
                                        ${edu.status === 'completed' ? '✓ Complété' : edu.status === 'in-progress' ? '● En cours' : '◐ Prévu'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let interestsHTML = '';
    if (article.interests && article.interests.length > 0) {
        interestsHTML = `
            <div class="interests-section">
                <div class="interests-header">
                    <div class="interests-bar"></div>
                    <h2 class="serif">CENTRES D'INTÉRÊTS</h2>
                </div>
                <div class="interests-grid">
                    ${article.interests.map(interest => `
                        <div class="interest-card">
                            <div class="interest-icon">${interest.icon}</div>
                            <h3 class="serif">${interest.title}</h3>
                            <p>${interest.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    detail.innerHTML = `
        <div class="detail-header">
            <div class="detail-meta">
                <div class="badge">${getCategoryLabel(article.category)}</div>
                <div class="detail-date">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>${article.date}</span>
                </div>
            </div>
            <h1 class="serif">${article.title}</h1>
            <div class="detail-excerpt">
                <p class="serif">${article.excerpt}</p>
            </div>
        </div>

        ${article.image ? `
            <div class="detail-image">
                <img src="${article.image}" alt="${article.title}">
                ${article.imageCaption ? `<div class="image-caption">${article.imageCaption}</div>` : ''}
            </div>
        ` : ''}

        <div class="detail-content">
            <div class="detail-text">${article.content}</div>
            ${educationHTML}
            ${interestsHTML}
            ${projectHTML}
            ${skillsHTML}
        </div>

        
    `;

    showView('article');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    btnBack.addEventListener('click', () => {
        if (currentView === 'article') {
            // Si on était sur un article de projet ou a-propos, retourner au menu principal
            if (currentCategory === 'projets' || currentCategory === 'a-propos') {
                showView('home');
            } else {
                showCategory(currentCategory);
            }
        } else if (currentView === 'category') {
            showView('home');
        }
    });

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showCategory(btn.dataset.category);
        });
    });

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            showCategory(card.dataset.category);
        });
    });
});