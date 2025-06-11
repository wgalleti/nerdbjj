# ebook-landing

## Objetivo
Este projeto é um site para publicar e vender um ebook. O objetivo é oferecer uma landing page profissional, com informações sobre o ebook, amostras, imagens, e um fluxo de compra simples e seguro.

---

## Contexto
- **Gerenciador de pacotes:** Yarn (sempre utilize `yarn` para instalar, remover ou atualizar dependências)
- **Versão recomendada do Node.js:** 20.x (LTS)
- **Tecnologia principal:** Vue 3 + Vite
- **Estilização:** TailwindCSS
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
│   ├── components/          # Componentes Vue realmente utilizados na landing
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
npm install
```

### 2. Rodar em modo desenvolvimento
```sh
npm run dev
```

### 3. Build para produção
```sh
npm run build
```

### 4. Testes unitários
```sh
npm run test:unit
```

### 5. Testes E2E
```sh
npx playwright install
npm run test:e2e
```

### 6. Lint e formatação
```sh
npm run lint
npm run format
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
