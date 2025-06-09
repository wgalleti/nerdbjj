<template>
  <section class="section bg-bjj-gray">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="h2 gradient-text mb-4">
          O que não me falaram sobre o Jiu Jitsu
        </h2>
        <p class="text-xl italic">
          "Você pode até começar pelo medo. Mas continuará pela transformação."
        </p>
      </div>

      <div class="chapters-grid mb-12">
        <div 
          v-for="cap in destaques" 
          :key="cap.titulo" 
          class="chapter-card"
          :style="{ 
            '--bg-image': `url(${cap.imageUrl})`,
            '--animation-order': cap.order
          }"
        >
          <div class="card-background"></div>
          <div class="card-overlay"></div>
          <div class="card-content">
            <h3 class="card-title">{{ cap.titulo }}</h3>
            <p class="card-description typewriter-text" :data-text="cap.trecho">{{ cap.trecho }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const destaques = [
  {
    titulo: 'A Jornada do Jiu Jitsu',
    trecho: 'Mais do que golpes, é o despertar de algo ancestral em você. Técnica é o meio. Transformação é o fim.',
    imageUrl: '/cap1.png',
    order: 0
  },
  {
    titulo: 'A Segunda Pele',
    trecho: 'O kimono não é roupa. É armadura. E toda armadura precisa estar pronta para a guerra.',
    imageUrl: '/cap2.png',
    order: 1
  },
  {
    titulo: 'Palavras do Tatame',
    trecho: '"Oss" não é só uma palavra. É presença, respeito e espírito de perseverança.',
    imageUrl: '/cap3.png',
    order: 2
  },
  {
    titulo: 'Repetição',
    trecho: 'Você não luta como treina. Você luta como repete.',
    imageUrl: '/cap4.png',
    order: 3
  },
  {
    titulo: 'Base ou Esporte?',
    trecho: 'Dois caminhos, uma raiz. O verdadeiro faixa preta respeita os dois.',
    imageUrl: '/cap5.png',
    order: 4
  },
  {
    titulo: 'A Faixa',
    trecho: 'Cada cor é uma responsabilidade. E a faixa mais forte... é invisível.',
    imageUrl: '/cap6.png',
    order: 5
  },
  {
    titulo: 'Estilo de Vida',
    trecho: 'Não é só luta. É filosofia. Quem ama o Jiu Jitsu, carrega ele no jeito de viver.',
    imageUrl: '/cap7.png',
    order: 6
  },
  {
    titulo: 'Dor e Corpo',
    trecho: 'O corpo fala. E no Jiu Jitsu, ele grita onde há verdade. Dor é dado, não castigo.',
    imageUrl: '/cap8.png',
    order: 7
  },
  {
    titulo: 'Respeito e Etiqueta',
    trecho: 'Mais do que saber lutar, é saber conviver. A hierarquia ensina sem dizer uma palavra.',
    imageUrl: '/cap9.png',
    order: 8
  },
  {
    titulo: 'Regras e Pontuação',
    trecho: 'Saber jogar é respeitar a arte. Finalizar é vitória, mas vencer com consciência é honra.',
    imageUrl: '/cap10.png',
    order: 9
  }
]
</script>

<style scoped>
.chapters-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.chapter-card {
  background: linear-gradient(135deg, rgba(42, 42, 42, 0.95) 0%, rgba(31, 31, 31, 0.98) 100%);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(220, 38, 38, 0.2);
  backdrop-filter: blur(10px);
  min-height: 320px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  opacity: 0.25;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg, 
    rgba(0, 0, 0, 0.5) 0%, 
    rgba(31, 31, 31, 0.6) 50%, 
    rgba(42, 42, 42, 0.7) 100%
  );
  z-index: 2;
}

.chapter-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.chapter-card:hover::before {
  opacity: 1;
}

.chapter-card:hover {
  transform: translateY(-5px);
  border-color: rgba(220, 38, 38, 0.4);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(220, 38, 38, 0.1);
}

.chapter-card:hover .card-background {
  opacity: 0.35;
}

.card-content {
  position: relative;
  z-index: 4;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #dc2626;
  line-height: 1.3;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.card-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  margin-top: auto;
}

/* Animação de digitação para o texto */
.typewriter-text {
  overflow: hidden;
  border-right: 2px solid rgba(220, 38, 38, 0.7);
  white-space: nowrap;
  max-width: 0;
  animation: 
    typewriter 3s steps(60) calc(var(--animation-order) * 0.8s + 0.5s) forwards,
    blink-cursor 1s infinite calc(var(--animation-order) * 0.8s + 0.5s),
    hide-cursor 0.1s linear calc(var(--animation-order) * 0.8s + 3.5s) forwards;
}

@keyframes typewriter {
  0% { 
    max-width: 0;
    white-space: nowrap;
  }
  100% { 
    max-width: 100%;
    white-space: normal;
  }
}

@keyframes blink-cursor {
  0%, 50% { border-color: rgba(220, 38, 38, 0.7); }
  51%, 100% { border-color: transparent; }
}

@keyframes hide-cursor {
  to { border-color: transparent; }
}

/* Mobile: 1 coluna */
@media (max-width: 768px) {
  .chapters-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .chapter-card {
    padding: 1.5rem;
    min-height: 280px;
  }
  
  .card-title {
    font-size: 1.2rem;
  }
  
  .card-description {
    font-size: 1rem;
  }
}

/* Animação de entrada simples */
.chapter-card {
  animation: fadeInUp 0.6s ease calc(var(--animation-order) * 0.1s) forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>