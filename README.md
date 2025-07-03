# FixON

Aplicativo para facilitar o contato com oficinas mecânicas e gerenciar formas de pagamento, desenvolvido como TCC.

---

## Índice
- [Visão Geral](#visão-geral)
- [Para Usuários](#para-usuários)
  - [Funcionalidades](#funcionalidades)
  - [Como Usar o App](#como-usar-o-app)
- [Para Desenvolvedores](#para-desenvolvedores)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Execução](#execução)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Principais Telas e Fluxo](#principais-telas-e-fluxo)
  - [Gerenciamento de Estado](#gerenciamento-de-estado)
  - [Customização](#customização)

---

## Visão Geral
O **FixON** é um app mobile que permite ao usuário encontrar oficinas mecânicas próximas, visualizar rotas no mapa, salvar locais favoritos e gerenciar formas de pagamento em uma carteira digital.

---

## Para Usuários

### Funcionalidades
- Buscar oficinas mecânicas próximas usando Google Maps
- Visualizar rotas e tempo estimado até a oficina
- Salvar locais favoritos (casa, trabalho, oficinas preferidas)
- Gerenciar formas de pagamento (FixCash, Apple Pay, Pix, Cartão, Dinheiro)
- Visualizar e simular preços de atendimento

### Como Usar o App
1. **Tela Inicial:**
   - Toque no ícone de perfil para acessar seu perfil.
   - Use a barra "Para onde?" para buscar um endereço de origem.
   - Abaixo, escolha entre:
     - "Contatar uma Mecânica" para buscar oficinas próximas
     - "Acessar Minha Carteira" para ver e gerenciar pagamentos
   - Veja e selecione locais favoritos para agilizar buscas.
2. **Mapa:**
   - Veja sua localização e a rota até a oficina escolhida.
   - Navegue entre opções de oficinas e simule preços.
3. **Carteira:**
   - Veja saldo FixCash e formas de pagamento disponíveis.

---

## Para Desenvolvedores

### Pré-requisitos
- Node.js >= 14.x
- npm >= 6.x
- Expo CLI (`npm install -g expo-cli`)
- Chave da API do Google Maps (para funcionalidades de mapa e autocomplete)

### Instalação
1. Clone o repositório:
   ```bash
   git clone <repo-url>
   cd TCC_Curso_Tecnico_de_Informatica
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. (Opcional) Corrija vulnerabilidades:
   ```bash
   npm audit fix --force
   ```
4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz com sua chave do Google Maps:
     ```env
     GOOGLE_MAPS_API_KEY=SUA_KEY_AQUI
     ```

### Execução
- Para rodar o app no Expo:
  ```bash
  npm start
  ```
- Para rodar no Android:
  ```bash
  npm run android
  ```
- Para rodar no iOS:
  ```bash
  npm run ios
  ```
- Para rodar no navegador:
  ```bash
  npm run web
  ```

### Estrutura do Projeto
```
fixOn-app/
??? app/                # Redux store, slices e hooks
??? components/         # Componentes reutilizáveis (mapa, navegação, cards)
??? screens/            # Telas principais (Home, Mapa, Carteira)
??? assets/             # Imagens, ícones e splash
??? App.tsx             # Ponto de entrada do app
??? package.json        # Dependências e scripts
```

### Principais Telas e Fluxo
- **HomeScreen:** Tela inicial, busca de endereço, opções de navegação e favoritos.
- **MapScreen:** Exibe o mapa, rota até a oficina e opções de navegação.
- **Wallet:** Gerencia formas de pagamento e saldo.
- **Profile:** (Protótipo) Exibe informações do usuário.
- **NavigateCard / RideOptionsCard:** Seleção de destino/oficina e simulação de preços.

### Gerenciamento de Estado
- Utiliza **Redux Toolkit** para gerenciar origem, destino e informações de viagem.
- Slices principais: `navigationSlice`.
- Store configurada em `app/store.ts`.

### Customização
- Para adicionar mais oficinas, edite o array `favoritesData` em `components/NavFavorites.tsx`.
- Para alterar opções de pagamento, edite a tela `Wallet.tsx`.
- Para customizar estilos, utilize o Tailwind React Native (`tailwind-react-native-classnames`).
