<template>
  <section class="section bio-section">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="h2 gradient-text mb-4">Biografia</h2>
        <p class="text-xl italic text-white/80">
          "O caminho não é sobre quem você vence, mas sobre quem você se torna."
        </p>
      </div>

      <div class="bio-container">
        <div class="profile-image-container">
          <div class="profile-image-wrapper">
            <img
              src="/professor.jpeg"
              alt="William Gallëti"
              class="profile-image"
            />
            <div class="image-overlay"></div>
            <div class="experience-badge">14+ anos<br>de tatame</div>
          </div>
        </div>

        <div class="bio-content">
          <h3 class="h3 mb-4">William Gallëti</h3>
          <div
            v-for="(paragraph, index) in bioParagraphs"
            :key="index"
            class="bio-paragraph"
            :style="{'--animation-delay': `${index * 0.2}s`}"
          >
            <p>{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const bioText = ref(`Com mais de 14 anos de vivência diária no Jiu Jitsu, Potter — apelido conquistado no tatame — é um faixa-preta que já sentiu na pele cada etapa dessa jornada: da tontura da faixa branca à clareza do "clique" que transforma o treino em propósito.
Há 5 anos dedica-se a ensinar a arte, orientando adultos e crianças, corrigindo caminhos, adaptando técnicas e ajudando alunos a se reerguerem — dentro e fora do tatame.
Seu diferencial não está apenas na técnica, mas na capacidade de transformar o caos inicial do Jiu Jitsu em aprendizado real e acessível para todos.`)

const bioParagraphs = computed(() => {
  return bioText.value.split("\n").map(p => p.trim()).filter(p => p.length > 0)
})
</script>

<style scoped>
.bio-section {
  background: linear-gradient(to bottom, #1a1a1a 0%, #121212 100%);
  position: relative;
  overflow: hidden;
  border-top: 4px solid rgba(220, 38, 38, 0.7);
  border-bottom: 4px solid rgba(220, 38, 38, 0.7);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  padding: 4rem 0;
  margin: 3rem 0;
}

.bio-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    rgba(220, 38, 38, 0.03),
    rgba(220, 38, 38, 0.03) 10px,
    rgba(0, 0, 0, 0) 10px,
    rgba(0, 0, 0, 0) 20px
  );
  opacity: 0.2;
  z-index: 0;
}

.bio-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 1rem;
}

.profile-image-container {
  position: relative;
}

.profile-image-wrapper {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(220, 38, 38, 0.15);
  transition: all 0.4s ease;
  transform: perspective(1000px) rotateY(5deg);
  border: 2px solid rgba(220, 38, 38, 0.3);
}

.profile-image-wrapper:hover {
  transform: perspective(1000px) rotateY(0);
  border-color: rgba(220, 38, 38, 0.6);
}

.profile-image {
  width: 100%;
  height: auto;
  display: block;
  transition: all 0.5s ease;
}

.profile-image-wrapper:hover .profile-image {
  transform: scale(1.03);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(220, 38, 38, 0.2) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 2;
}

.experience-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(220, 38, 38, 0.85);
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.2;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  z-index: 3;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transform: rotate(5deg);
  transition: all 0.3s ease;
}

.profile-image-wrapper:hover .experience-badge {
  transform: rotate(0) scale(1.1);
}

.bio-content {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bio-paragraph {
  margin-bottom: 1.5rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: var(--animation-delay);
}

.bio-paragraph p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.bio-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
}

.bio-badge {
  background: linear-gradient(135deg, rgba(42, 42, 42, 0.95) 0%, rgba(31, 31, 31, 0.98) 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(220, 38, 38, 0.4);
  transition: all 0.3s ease;
}

.bio-badge:hover {
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.8) 0%, rgba(185, 28, 28, 0.9) 100%);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.gradient-text {
  background: linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #dc2626 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .bio-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .profile-image-wrapper {
    transform: perspective(1000px) rotateY(0);
    max-width: 400px;
    margin: 0 auto;
  }

  .bio-paragraph p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .gradient-text {
    font-size: 1.8rem;
  }

  .bio-badges {
    justify-content: center;
  }
}

/* Small phones */
@media (max-width: 480px) {
  .bio-paragraph p {
    font-size: 0.95rem;
  }

  .experience-badge {
    font-size: 0.8rem;
    padding: 0.6rem;
    bottom: 15px;
    right: 15px;
  }

  .gradient-text {
    font-size: 1.6rem;
  }
}
</style>
