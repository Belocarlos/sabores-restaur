// Gerenciamento de Promoções
const promotions = {
    'Segunda-feira': 'Desconto de 20% em todos os pratos principais!',
    'Terça-feira': 'Rodízio de massas por apenas R$49,90',
    'Quarta-feira': 'Wine Wednesday: 50% OFF em vinhos selecionados',
    'Quinta-feira': 'Festival de risotos: 4 opções especiais',
    'Sexta-feira': 'Happy Hour: Drinks com 30% de desconto das 17h às 19h',
    'Sábado': 'Menu Degustação Especial: 5 pratos por R$120',
    'Domingo': 'Almoço em Família: Sobremesa grátis'
};

function updatePromotion() {
    const today = new Date();
    const dayOfWeek = today.toLocaleDateString('pt-BR', { weekday: 'long' });
    const promotionBanner = document.getElementById('promotions-banner');
    
    if (promotionBanner) {
        promotionBanner.innerHTML = `
            <h3>Promoção do Dia</h3>
            <p>${promotions[dayOfWeek]}</p>
        `;
    }
}

// Depoimentos
const testimonials = [
    {
        name: 'Maria Silva',
        comment: 'Melhor restaurante da cidade! A comida é incrível e o atendimento é excepcional.',
        image: 'assets/images/testimonials/person1.jpg',
        rating: 5
    },
    {
        name: 'João Santos',
        comment: 'Ambiente aconchegante e pratos muito bem elaborados. Recomendo!',
        image: 'assets/images/testimonials/person2.jpg',
        rating: 5
    },
    {
        name: 'Ana Oliveira',
        comment: 'Adorei o menu degustação! Uma verdadeira experiência gastronômica.',
        image: 'assets/images/testimonials/person3.jpg',
        rating: 4
    }
];

function loadTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-grid');
    
    if (testimonialsContainer) {
        testimonialsContainer.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                    <h4>${testimonial.name}</h4>
                </div>
                <p>${testimonial.comment}</p>
                <div class="rating">
                    ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5-testimonial.rating)}
                </div>
            </div>
        `).join('');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updatePromotion();
    loadTestimonials();
    
    // Atualiza promoção à meia-noite
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow - now;
    
    setTimeout(() => {
        updatePromotion();
        // Depois da primeira atualização, atualiza a cada 24 horas
        setInterval(updatePromotion, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
});
