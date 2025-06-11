#!/bin/bash
# Atualiza as principais dependências do projeto para as versões mais recentes
# Uso: bash update-deps.sh

set -e

echo "Atualizando Vue, Vue Router, Pinia, TailwindCSS, Vite, ESLint, Prettier..."

yarn add vue@latest vue-router@latest pinia@latest
yarn add -D tailwindcss@latest vite@latest eslint@latest prettier@latest @vitejs/plugin-vue@latest vite-plugin-vue-devtools@latest

echo "Dependências principais atualizadas."
