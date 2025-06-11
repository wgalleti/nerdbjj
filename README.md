# ebook-landing

## Objetivo
Este projeto é um site para publicar e vender um ebook. O objetivo é oferecer uma landing page profissional, com informações sobre o ebook, amostras, imagens, e um fluxo de compra simples e seguro.

---

## Contexto
- **Gerenciador de pacotes:** Yarn (sempre utilize `yarn` para instalar, remover ou atualizar dependências)
- **Versão recomendada do Node.js:** 20.x (LTS)
- **Tecnologia principal:** Vue 3 + Vite
- **Estilização:** TailwindCSS v4.1.9
- **Gerenciamento de estado:** Pinia
- **Roteamento:** Vue Router
- **Padrão de formatação:** ESLint + Prettier (executado automaticamente ao salvar no VSCode)
- **Build:** Vite
- **Outros:** TypeScript

**Observações importantes:**
- Sempre utilize o Yarn para garantir consistência no lockfile e scripts.
- Siga o padrão de formatação do projeto para evitar conflitos em PRs.
- Antes de subir alterações, rode `yarn lint` e garanta que não há erros de linting.
- O projeto é otimizado para ambientes Node.js 20.x (LTS). Versões diferentes podem causar incompatibilidades.
- Para atualizar dependências principais, utilize o script `update-deps.sh`.

---

## Padrões de Edição e Configuração de Editor

### .editorconfig
O projeto utiliza um arquivo `.editorconfig` para garantir padronização de formatação entre diferentes editores. Exemplo:

```ini
# EditorConfig helps maintain consistent coding styles
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

### VSCode (`.vscode/settings.json`)
O arquivo `.vscode/settings.json` agora faz parte do repositório e deve ser utilizado como padrão por todos os colaboradores. Ele garante que o VSCode siga os padrões do projeto e do ESLint. Se você usa outro editor, tente seguir as mesmas regras de formatação e lint.


```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "vue"
  ],
  "files.eol": "\n",
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true
}
```

---

## Configuração do Tailwind CSS

O projeto utiliza Tailwind CSS v4.1.9 para estilização. A configuração está completa com os seguintes arquivos:

- `tailwind.config.js`: Configuração principal do Tailwind CSS, incluindo cores personalizadas do tema
- `postcss.config.js`: Configuração do PostCSS para processar as diretivas do Tailwind

### Cores personalizadas

O tema inclui cores personalizadas para o projeto:

```js
colors: {
  'bjj-black': '#0a0a0a',
  'bjj-red': '#dc2626',
  'bjj-red-dark': '#991b1b',
  'bjj-gray': '#1f1f1f',
  'bjj-gray-light': '#2a2a2a',
}
```

Estas cores podem ser usadas com as classes do Tailwind CSS, por exemplo: `bg-bjj-red`, `text-bjj-gray`, etc.

### Uso do Tailwind CSS

O Tailwind CSS está configurado no arquivo `src/assets/main.css` com as diretivas:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Para usar o Tailwind CSS em seus componentes Vue, simplesmente adicione as classes utilitárias do Tailwind diretamente nos elementos HTML.

---

## Atualização de Dependências

Para manter as principais bibliotecas do projeto sempre atualizadas (Vue, TailwindCSS, Vite, ESLint, Prettier, etc.), utilize o script abaixo:

```sh
bash update-deps.sh
```

O script irá atualizar automaticamente as dependências principais para a última versão estável.

---

## Estrutura do Projeto
```
├── public/                  # Arquivos estáticos (imagens, favicon, capa do ebook)
├── src/
│   ├── assets/              # CSS, SVG e outros assets
│   ├── components/          ## Componentes

### Depoimentos.vue
- Agora segue o padrão mobile-first, com layout moderno e responsivo.
- Cada depoimento possui destaque individual, com sombra, borda arredondada, animação de hover (escala e sombra), e avatar circular animado.
- Utiliza apenas Tailwind CSS para estilização, sem classes customizadas antigas.
- Boas práticas de UI/UX e acessibilidade foram aplicadas (alt nas imagens, elementos semânticos).
- Animações suaves usando utilitários do Tailwind.
 Vue realmente utilizados na landing
│   ├── composables/         # Lógicas reutilizáveis (hooks, animações, etc)
│   ├── stores/              # Pinia stores (apenas as necessárias)
│   ├── views/               # Páginas principais (ex: HomeView.vue)
│   ├── router/              # Configuração de rotas
│   └── main.ts              # Entry point da aplicação
├── index.html               # HTML principal
├── package.json             # Configuração de dependências e scripts
├── vite.config.ts           # Configuração do Vite
├── tsconfig*.json           # Configurações TypeScript
├── eslint.config.ts         # Configuração ESLint
└── README.md                # Documentação do projeto
```

---

## Configuração e Uso

### 1. Instalar dependências
```sh
yarn
```

### 2. Rodar em modo desenvolvimento
```sh
yarn dev
```

### 3. Build para produção
```sh
yarn build
```

### 4. Testes unitários
```sh
yarn test:unit
```

### 5. Testes E2E
```sh
yarn dlx playwright install
yarn test:e2e
```

### 6. Lint e formatação
```sh
yarn lint
yarn format
```

---

## Lista de Tarefas (To-Do)
- [ ] Ajustar conteúdo e copywriting da landing page
- [ ] Integrar sistema de pagamento (ex: Stripe, Mercado Pago)
- [ ] Implementar fluxo de entrega do ebook após compra
- [ ] Adicionar analytics e pixel de conversão
- [ ] Melhorar responsividade e UX mobile
- [ ] Adicionar testes automatizados para fluxo de compra
- [ ] Otimizar performance e SEO
- [ ] Criar página de agradecimento/checkout
- [ ] Adicionar FAQ e seção de suporte
- [ ] Revisar acessibilidade

---

## Observações Técnicas
- Recomenda-se usar VSCode com a extensão Volar para melhor suporte a Vue + TypeScript.
- O projeto está pronto para deploy em ambientes estáticos (ex: Netlify, Vercel).
- Para customizações avançadas, veja a documentação do [Vite](https://vite.dev/config/) e [Vue 3](https://vuejs.org/).

---

## Contato
Dúvidas, sugestões ou problemas? Abra uma issue ou entre em contato com o mantenedor.
