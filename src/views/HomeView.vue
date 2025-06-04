<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  // Trigger animations after component is mounted
  setTimeout(() => {
    isLoaded.value = true
  }, 100)

  // Smooth scroll behavior for anchor links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href') as string)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Observe all sections for scroll animations
  const sections = document.querySelectorAll('.section, .hero-section')
  sections.forEach(section => observer.observe(section))
})
</script>

<template>
  <div class="landing-page" :class="{ 'loaded': isLoaded }">
    <!-- Hero Section -->
    <section class="hero-section fade-in">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content slide-in-left">
            <h1 class="h1 gradient-text">
              O que não me falaram sobre o Jiu-Jitsu
            </h1>
            <p class="hero-description">
              Descubra os <strong class="text-bjj-red">segredos não revelados</strong> que transformarão sua jornada no tatame.
              Um guia completo para quem quer ir além do básico e entender o que o <strong class="text-bjj-red">Jiu-Jitsu</strong> é.
            </p>
            <div class="hero-buttons">
              <a href="#comprar" class="btn btn-primary btn-pulse">
                Quero o E-book Agora
              </a>
              <a href="#sobre" class="btn btn-secondary">
                Saber Mais
              </a>
            </div>
          </div>
          <div class="hero-image slide-in-right">
            <img
              src="/ebook-cover.jpeg"
              alt="Capa do E-book: O que não me falaram sobre o Jiu-Jitsu"
              class="ebook-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="sobre" class="section bg-bjj-gray scroll-animate">
      <div class="container">
        <div class="section-header">
          <h2 class="h2 gradient-text">Por que este e-book é diferente?</h2>
          <p class="section-subtitle">
            Mais de 14 anos de tatame e 7 anos experiência dando aulas para crianças e adultos condensados em conhecimento prático
          </p>
        </div>

        <div class="features-grid">
          <div class="card feature-card hover-lift" style="animation-delay: 0.1s">
            <div class="feature-icon">🥋</div>
            <h3 class="h3">Experiência Real</h3>
            <p class="feature-description">
              Conhecimento adquirido através de anos de treino, competições e ensino no tatame.
            </p>
          </div>

          <div class="card feature-card hover-lift" style="animation-delay: 0.2s">
            <div class="feature-icon">🧠</div>
            <h3 class="h3">Mentalidade Vencedora</h3>
            <p class="feature-description">
              Informações que vão além do básico e vão te ajudar a entender o que o Jiu-Jitsu é.
            </p>
          </div>

          <div class="card feature-card hover-lift" style="animation-delay: 0.3s">
            <div class="feature-icon">⚡</div>
            <h3 class="h3">Entendimento Rápidos</h3>
            <p class="feature-description">
              Explicações simples e objetivas para você entender o que o Jiu-Jitsu é.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section scroll-animate">
      <div class="container">
        <div class="benefits-grid">
          <div class="benefits-content">
            <h2 class="h2 gradient-text">
              O que você vai descobrir
            </h2>

            <div class="benefits-list">
              <div class="benefit-item" style="animation-delay: 0.1s">
                <div class="benefit-check">✓</div>
                <div class="benefit-content">
                  <h3 class="h3">Os Pilares Fundamentais</h3>
                  <p class="benefit-description">
                    Conceitos essenciais que todo praticante deveria conhecer desde o primeiro dia.
                  </p>
                </div>
              </div>

              <div class="benefit-item" style="animation-delay: 0.2s">
                <div class="benefit-check">✓</div>
                <div class="benefit-content">
                  <h3 class="h3">Mentalidade de Campeão</h3>
                  <p class="benefit-description">
                    Como desenvolver a mentalidade que separa os vencedores dos demais.
                  </p>
                </div>
              </div>

              <div class="benefit-item" style="animation-delay: 0.3s">
                <div class="benefit-check">✓</div>
                <div class="benefit-content">
                  <h3 class="h3">Por trás da arte</h3>
                  <p class="benefit-description">
                    Entenda como o Jiu-Jitsu nasceu e como ele foi evoluindo ao longo dos anos.
                  </p>
                </div>
              </div>

              <div class="benefit-item" style="animation-delay: 0.4s">
                <div class="benefit-check">✓</div>
                <div class="benefit-content">
                  <h3 class="h3">Segredos</h3>
                  <p class="benefit-description">
                    Regras, técnicas, estratégias que vão te ajudar a seguir a arte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-highlight">
            <div class="card quote-card">
              <h3 class="h3">Transforme sua jornada</h3>
              <blockquote class="quote-text">
                "Este e-book contém tudo que eu gostaria de ter sabido quando comecei no Jiu-Jitsu.
                São anos de experiência condensados em conhecimento prático que pode acelerar
                sua evolução de forma extraordinária."
              </blockquote>
              <div class="quote-author">
                <div class="author-name">- Professor Potter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section id="comprar" class="section scroll-animate">
      <div class="container">
        <div class="section-header">
          <h2 class="h2 gradient-text">Transforme sua jornada no Jiu-Jitsu hoje</h2>
          <p class="section-subtitle">
            Não perca mais tempo e fique com duvidas, aumente agora a sua compreensão sobre o Jiu-Jitsu.
          </p>
        </div>

        <div class="cta-container">
          <div class="price-card hover-lift">
            <div class="price-section">
              <div class="old-price">De R$ 29,90</div>
              <div class="current-price">R$ 24,90</div>
              <div class="price-note">Oferta por tempo limitado</div>
            </div>

            <div class="includes-section">
              <h3 class="h3">O que está incluso:</h3>
              <ul class="includes-list">
                <li class="include-item">
                  <span class="include-check">✓</span>
                  E-book completo (29+ páginas)
                </li>
                <li class="include-item">
                  <span class="include-check">✓</span>
                  Acesso vitalício
                </li>
                <li class="include-item">
                  <span class="include-check">✓</span>
                  Atualizações gratuitas
                </li>
                <li class="include-item">
                  <span class="include-check">✓</span>
                  Suporte por email
                </li>
                <li class="include-item">
                  <span class="include-check">✓</span>
                  Garantia de 7 dias
                </li>
              </ul>
            </div>

            <a href="https://pay.kiwify.com.br/LNrtaro" class="btn btn-primary btn-cta btn-pulse">
              Comprar Agora
            </a>

            <div class="payment-note">
              Pagamento 100% seguro via cartão ou PIX
            </div>
          </div>
        </div>

        <div class="guarantee-section">
          <div class="card guarantee-card">
            <h3 class="h3">🛡️ Garantia de 7 dias</h3>
            <p class="guarantee-text">
              Se você não ficar completamente satisfeito com o conteúdo,
              devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Base animations */
.landing-page {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.landing-page.loaded {
  opacity: 1;
}

/* Fade in animation */
.fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide animations */
.slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scroll animations */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.scroll-animate.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Hover effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Button pulse animation */
.btn-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
  }
}

/* Mobile-first responsive design */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.hero-section {
  padding: 2rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
}

.hero-content {
  order: 2;
}

.hero-image {
  order: 1;
}

.hero-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.ebook-cover {
  max-width: 100%;
  height: auto;
  max-height: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.ebook-cover:hover {
  transform: scale(1.05);
}

/* Section styling */
.section {
  padding: 3rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-subtitle {
  font-size: 1.125rem;
  margin-top: 1rem;
}

/* Features grid */
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.feature-card {
  text-align: center;
  padding: 2rem 1.5rem;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-bjj-red);
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
}

/* Benefits section */
.benefits-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.6s ease;
}

.scroll-animate.animate-in .benefit-item {
  opacity: 1;
  transform: translateX(0);
}

.benefit-check {
  color: var(--color-bjj-red);
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
}

.benefit-content h3 {
  margin-bottom: 0.5rem;
}

.benefit-description {
  font-size: 1rem;
  line-height: 1.6;
}

.quote-card {
  padding: 2rem;
  text-align: center;
}

.quote-text {
  font-size: 1.125rem;
  font-style: italic;
  margin: 1.5rem 0;
  line-height: 1.6;
}

.author-name {
  color: var(--color-bjj-red);
  font-weight: bold;
  margin-top: 1rem;
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.testimonial-card {
  padding: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.scroll-animate.animate-in .testimonial-card {
  opacity: 1;
  transform: translateY(0);
}

.testimonial-text {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 3rem;
  height: 3rem;
  background-color: var(--color-bjj-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-letter {
  color: white;
  font-weight: bold;
  font-size: 1.125rem;
}

.author-name {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.author-belt {
  font-size: 0.875rem;
  color: #9ca3af;
}

/* CTA Section */
.cta-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.price-card {
  max-width: 28rem;
  width: 100%;
  padding: 2rem;
  text-align: center;
}

.price-section {
  margin-bottom: 2rem;
}

.old-price {
  font-size: 0.875rem;
  color: #9ca3af;
  text-decoration: line-through;
  margin-bottom: 0.5rem;
}

.current-price {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-bjj-red);
  margin-bottom: 0.5rem;
}

.price-note {
  font-size: 0.875rem;
  color: #9ca3af;
}

.includes-section {
  margin-bottom: 2rem;
}

.includes-section h3 {
  margin-bottom: 1rem;
}

.includes-list {
  list-style: none;
  padding: 0;
  text-align: left;
}

.include-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.include-check {
  color: var(--color-bjj-red);
  font-weight: bold;
}

.btn-cta {
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
}

.payment-note {
  font-size: 0.875rem;
  color: #9ca3af;
}

.guarantee-section {
  display: flex;
  justify-content: center;
}

.guarantee-card {
  max-width: 42rem;
  width: 100%;
  padding: 2rem;
  text-align: center;
}

.guarantee-text {
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }

  .hero-section {
    padding: 4rem 0;
  }

  .hero-grid {
    flex-direction: row;
    text-align: left;
  }

  .hero-content {
    flex: 1;
    order: 1;
  }

  .hero-image {
    flex: 1;
    order: 2;
    text-align: center;
  }

  .hero-description {
    font-size: 1.25rem;
  }

  .hero-buttons {
    flex-direction: row;
    justify-content: flex-start;
  }

  .ebook-cover {
    max-height: 400px;
  }

  .section {
    padding: 4rem 0;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .benefits-grid {
    flex-direction: row;
    align-items: center;
  }

  .benefits-content {
    flex: 1;
  }

  .testimonial-highlight {
    flex: 1;
  }

  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .current-price {
    font-size: 3rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .hero-section {
    padding: 6rem 0;
  }

  .ebook-cover {
    max-height: 500px;
  }

  .section {
    padding: 6rem 0;
  }

  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .benefits-grid {
    gap: 4rem;
  }

  .current-price {
    font-size: 3.5rem;
  }
}

/* Utility classes */
.text-center {
  text-align: center;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.mt-12 {
  margin-top: 3rem;
}
</style>
