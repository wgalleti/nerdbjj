<template>
  <section class="section py-10 px-2 sm:px-0 relative bg-no-repeat bg-cover bg-bottom" :style="{ backgroundImage: `url(${readerBgImage})` }">
    <!-- Overlay for shadow effect -->
    <div class="absolute inset-0 bg-black/70"></div>
    <!-- Content container with relative position to appear above the overlay -->
    <div class="container max-w-4xl mx-auto relative z-10">
      <div class="section-header text-center mb-8">
        <h2 class="h2 text-white mb-2">
          Depoimentos
        </h2>
        <p class="section-subtitle italic text-white">
          "Tem gente que entra no Jiu Jitsu... e o Jiu Jitsu entra na pessoa."
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <div
          v-for="depoimento in depoimentos"
          :key="depoimento.nome"
          class="mt-8 card testimonial-card relative flex flex-col items-center bg-white rounded-xl border border-gray-200 p-6 pt-12 shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-bjj-red/40 w-full max-w-md mx-auto"
        >
          <div class="absolute -top-10 left-1/2 -translate-x-1/2">
            <div class="author-avatar rounded-full border-4 border-bjj-red shadow flex items-center justify-center bg-white overflow-hidden">
              <span v-if="!depoimento.imagem" class="avatar-letter text-2xl">{{ depoimento.nome.charAt(0) }}</span>
              <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center">
                <img
                  :src="depoimento.imagem"
                  :alt="`Foto de ${depoimento.nome}`"
                  class="w-full h-full object-fill rounded-full"
                  loading="lazy"
                  @error="handleImageError($event, depoimento)"
                />
              </div>
            </div>
          </div>
          <blockquote class="relative text-gray-400 text-base sm:text-lg text-center mt-4 mb-6 px-2">
            <span class="text-5xl text-bjj-red/20 absolute -left-3 -top-6 select-none">"</span>
            {{ depoimento.texto }}
            <span class="text-5xl text-bjj-red/20 absolute -right-3 -bottom-6 select-none">"</span>
          </blockquote>
          <footer class="w-full text-center mt-auto">
            <cite class="not-italic font-medium text-bjj-red text-base">{{ depoimento.nome }}</cite>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import readerBgImage from '/reader.webp'

const depoimentos = ref([
  {
    nome: "Fernando Ferreira da Costa",
    texto: "Cara que top acho que dava para ser pensado para todos iniciantes no jiu jtsu ja ser um item adicional junto com a matricula  ficou muito bom esclarece bastantes coisas que passam despercebidas no dia a dia",
    imagem: "/496948433_185234234408591550_1002241318796867514_n.jpg"
  },
  {
    nome: "Daniel Morch",
    texto: "Excelente material. Vale muito o investimento galera. Uma oportunidade de evoluir, entender mais sobre a arte suave. Além disso, você fortalece e valoriza o trabalho de quem dedica tempo e conhecimento para compartilhar conteúdo de qualidade. Bora apoiar quem faz a diferença e, de quebra, crescer juntos no Jiu!",
    imagem: "/496948433_18048872408591550_1002241318796867514_n.jpg"
  }
])

function handleImageError(event: Event, depoimento: { imagem: string }) {
  // When image fails to load, remove the image source to show the avatar letter instead
  depoimento.imagem = ''
}
</script>

<style scoped>
.testimonial-card {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.author-avatar {
  transition: all 0.3s ease;
  height: 70px;
  width: 70px !important;
}

.testimonial-card:hover .author-avatar {
  border-color: var(--color-bjj-red);
  transform: scale(1.05);
}

.avatar-letter {
  color: var(--color-bjj-red);
  font-weight: bold;
  font-size: 1.5rem;
}

/* Fix for image display */
.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
