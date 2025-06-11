<template>
  <section class="section bg-bjj-gray py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
    <div class="container max-w-4xl mx-auto">
      <div class="section-header text-center mb-6 sm:mb-8">
        <h2 class="h2 gradient-text mb-2 text-2xl sm:text-3xl md:text-4xl">
          Vendas
        </h2>
        <p class="section-subtitle italic text-sm sm:text-base">
          "Transformando vidas através do conhecimento"
        </p>
      </div>
      <div class="flex flex-wrap flex-row gap-4">
        <div
          v-for="contador in contadores"
          :key="contador.titulo"
          class="card counter-card flex-1 flex flex-col items-center bg-white rounded-xl border border-gray-200 p-4 sm:p-5 md:p-6 shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-bjj-red/40"
        >
          <div class="counter-icon text-4xl sm:text-5xl text-bjj-red mb-3 sm:mb-4">
            {{ contador.icone }}
          </div>
          <div class="counter-value text-3xl sm:text-4xl font-bold text-bjj-red mb-1 sm:mb-2">
            {{ contador.valor }}
          </div>
          <div class="counter-title text-lg sm:text-xl font-medium text-gray-300 text-center">
            {{ contador.titulo }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contadores = ref([
  {
    titulo: "E-books Vendidos",
    valor: "50+",
    icone: "📚"
  },
  {
    titulo: "Alunos Impactados",
    valor: "100+",
    icone: "🥋"
  },
  {
    titulo: "Avaliações Positivas",
    valor: "92%",
    icone: "⭐"
  }
])
</script>

<style scoped>
.counter-card {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  width: 100%;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.counter-icon {
  transition: all 0.3s ease;
}

.counter-card:hover .counter-icon {
  transform: scale(1.2);
}

.counter-value {
  background: linear-gradient(135deg, #dc2626, #991b1b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 640px) {
  .counter-card {
    padding: 1rem;
  }

  .section-header {
    margin-bottom: 1rem;
  }
}
</style>
