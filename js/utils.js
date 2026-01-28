// Utility functions
function getCategoryLabel(category) {
    const labels = {
        'projets': 'PROJETS',
        'experiences': 'EXPÉRIENCES',
        'a-propos': 'À PROPOS'
    };
    return labels[category] || category.toUpperCase();
}

function formatContent(text) {
    return text.replace(/\n/g, '<br>');
}
