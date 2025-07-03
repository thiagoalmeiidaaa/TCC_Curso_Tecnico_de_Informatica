# FixON

Aplicativo para facilitar o contato com oficinas mec�nicas e gerenciar formas de pagamento, desenvolvido como TCC.

---

## �ndice
- [Vis�o Geral](#vis�o-geral)
- [Para Usu�rios](#para-usu�rios)
  - [Funcionalidades](#funcionalidades)
  - [Como Usar o App](#como-usar-o-app)
- [Para Desenvolvedores](#para-desenvolvedores)
  - [Pr�-requisitos](#pr�-requisitos)
  - [Instala��o](#instala��o)
  - [Execu��o](#execu��o)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Principais Telas e Fluxo](#principais-telas-e-fluxo)
  - [Gerenciamento de Estado](#gerenciamento-de-estado)
  - [Customiza��o](#customiza��o)

---

## Vis�o Geral
O **FixON** � um app mobile que permite ao usu�rio encontrar oficinas mec�nicas pr�ximas, visualizar rotas no mapa, salvar locais favoritos e gerenciar formas de pagamento em uma carteira digital.

---

## Para Usu�rios

### Funcionalidades
- Buscar oficinas mec�nicas pr�ximas usando Google Maps
- Visualizar rotas e tempo estimado at� a oficina
- Salvar locais favoritos (casa, trabalho, oficinas preferidas)
- Gerenciar formas de pagamento (FixCash, Apple Pay, Pix, Cart�o, Dinheiro)
- Visualizar e simular pre�os de atendimento

### Como Usar o App
1. **Tela Inicial:**
   - Toque no �cone de perfil para acessar seu perfil.
   - Use a barra "Para onde?" para buscar um endere�o de origem.
   - Abaixo, escolha entre:
     - "Contatar uma Mec�nica" para buscar oficinas pr�ximas
     - "Acessar Minha Carteira" para ver e gerenciar pagamentos
   - Veja e selecione locais favoritos para agilizar buscas.
2. **Mapa:**
   - Veja sua localiza��o e a rota at� a oficina escolhida.
   - Navegue entre op��es de oficinas e simule pre�os.
3. **Carteira:**
   - Veja saldo FixCash e formas de pagamento dispon�veis.

---

## Para Desenvolvedores

### Pr�-requisitos
- Node.js >= 14.x
- npm >= 6.x
- Expo CLI (`npm install -g expo-cli`)
- Chave da API do Google Maps (para funcionalidades de mapa e autocomplete)

### Instala��o
1. Clone o reposit�rio:
   ```bash
   git clone <repo-url>
   cd TCC_Curso_Tecnico_de_Informatica
   ```
2. Instale as depend�ncias:
   ```bash
   npm install
   ```
3. (Opcional) Corrija vulnerabilidades:
   ```bash
   npm audit fix --force
   ```
4. Configure as vari�veis de ambiente:
   - Crie um arquivo `.env` na raiz com sua chave do Google Maps:
     ```env
     GOOGLE_MAPS_API_KEY=SUA_KEY_AQUI
     ```

### Execu��o
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
??? components/         # Componentes reutiliz�veis (mapa, navega��o, cards)
??? screens/            # Telas principais (Home, Mapa, Carteira)
??? assets/             # Imagens, �cones e splash
??? App.tsx             # Ponto de entrada do app
??? package.json        # Depend�ncias e scripts
```

### Principais Telas e Fluxo
- **HomeScreen:** Tela inicial, busca de endere�o, op��es de navega��o e favoritos.
- **MapScreen:** Exibe o mapa, rota at� a oficina e op��es de navega��o.
- **Wallet:** Gerencia formas de pagamento e saldo.
- **Profile:** (Prot�tipo) Exibe informa��es do usu�rio.
- **NavigateCard / RideOptionsCard:** Sele��o de destino/oficina e simula��o de pre�os.

### Gerenciamento de Estado
- Utiliza **Redux Toolkit** para gerenciar origem, destino e informa��es de viagem.
- Slices principais: `navigationSlice`.
- Store configurada em `app/store.ts`.

### Customiza��o
- Para adicionar mais oficinas, edite o array `favoritesData` em `components/NavFavorites.tsx`.
- Para alterar op��es de pagamento, edite a tela `Wallet.tsx`.
- Para customizar estilos, utilize o Tailwind React Native (`tailwind-react-native-classnames`).
