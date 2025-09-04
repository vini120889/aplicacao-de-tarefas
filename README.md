# 📝 To-Do List React

Aplicação React para gerenciar tarefas, utilizando **React Router v5**, **Context API**, **Hooks** e **localStorage**.  

Permite adicionar, editar, excluir, buscar e filtrar tarefas. Tarefas concluídas são riscadas e a data de criação é exibida corretamente.

---

## ⚡ Tecnologias utilizadas

- React 18+  
- React Router v5  
- Context API  
- Hooks: `useState`, `useEffect`, `useContext`, `useMemo`  
- CSS moderno e responsivo  
- LocalStorage para persistência de dados  

---

## 📂 Estrutura do projeto

todo-list/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── TaskItem.js
│ │ └── TaskList.js
│ ├── context/
│ │ └── TaskContext.js
│ ├── pages/
│ │ ├── Home.js
│ │ ├── AddTask.js
│ │ └── EditTask.js
│ ├── App.js
│ ├── index.js
│ └── styles.css
└── README.md

## 🚀 Funcionalidades

1. **Adicionar tarefas**
   - Título obrigatório e descrição opcional  
   - Armazena data de criação e status de conclusão  

2. **Editar tarefas**
   - Permite alterar título e descrição  
   - Mantém a data de criação  

3. **Excluir tarefas**
   - Remove a tarefa da lista e do `localStorage`  

4. **Marcar/desmarcar como concluída**
   - Tarefas riscadas quando concluídas  
   - Checkbox interativo para alterar o status  

5. **Buscar e filtrar tarefas**
   - Busca por título ou descrição  
   - Filtra por: Todas, Abertas ou Concluídas  

6. **Persistência**
   - Todas as tarefas são salvas no `localStorage` e permanecem ao reiniciar o navegador  

## 🎨 Estilo e Layout

- **Header** azul com navegação clara entre páginas  
- **Toolbar** com:
  - Campo de busca  
  - Select de filtro  
  - Botão "+ Nova Tarefa" verde destacado  
- **Lista de tarefas**:
  - Cards modernos com sombra e efeito hover  
  - Checkbox para marcar conclusão  
  - Data de criação exibida  
  - Descrição opcional  
- Layout **responsivo** para mobile e desktop  

---

## 💻 Instalação e execução

1. **Clone o repositório:**

git clone: https://github.com/vini120889/aplicacao-de-tarefas


2. **Instale as dependências:**

Copiar código
npm install
npm install react-router-dom@5

3. **Inicie a aplicação:**

npm start

4. **Abra no navegador:**

http://localhost:3000

## ⚙️ Observações

A aplicação utiliza React 18+ com ReactDOM.createRoot

O React Router v5 usa <Switch> e component em vez de <Routes> e element

Todas as tarefas são carregadas do localStorage ao abrir a aplicação

Layout adaptável para diferentes tamanhos de tela

