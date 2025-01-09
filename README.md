# DevBills Front-End

Este é o front-end do projeto **DevBills**, uma aplicação para controle financeiro pessoal que permite criar categorias, registrar transações e visualizar relatórios gráficos.

##  Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces.
- **TypeScript**: Superset do JavaScript para adicionar tipagem estática.
- **Vite**: Ferramenta para build rápida e otimizada.
- **Styled-Components**: Estilização dinâmica com CSS-in-JS.
- **React Hook Form**: Gerenciamento de formulários de forma simples e performática.
- **Zod**: Validação de dados com segurança e facilidade.
- **Nivo**: Criação de gráficos (barra e pizza).
- **Axios**: Cliente HTTP para consumo da API.
- **Day.js**: Manipulação de datas com alto desempenho.
- **Phosphor Icons**: Biblioteca de ícones acessíveis e customizáveis.
- **Radix UI Dialog**: Diálogos acessíveis e estilizáveis.
- **React Input Mask** e **React Number Format**: Máscaras de entrada para formulários.

##  Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/gabrielabade/devbills-front.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd devbills-front
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

4. Crie um arquivo `.env` com a seguinte configuração:
   ```env
   VITE_API_URL=http://localhost:3333
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## 🖥️ Scripts Disponíveis

- **`dev`**: Inicia o servidor de desenvolvimento.
- **`build`**: Cria a versão de produção do projeto.
- **`preview`**: Pré-visualiza a versão de produção.
- **`lint`**: Executa o lint para identificar problemas no código.


##  Funcionalidades

- Criação de categorias com cor personalizada.
- Registro de transações (nome, valor, data, tipo e categoria).
- Filtros para transações por nome, período ou categoria.
- Visualização de saldo e despesas por período e categoria.
- Gráficos interativos para análise financeira.


## Repositório Back-End

Para acessar o repositório do back-end deste projeto, visite: [DevBills Back-End](https://github.com/gabrielabade/devbills-api).
##  Prévia

![Preview do projeto](./devbills-finanças.png)