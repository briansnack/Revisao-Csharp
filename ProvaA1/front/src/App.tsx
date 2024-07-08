import React from 'react';
  import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
  import './App.css';
  import TarefaListar from './components/tarefa-listar';
  import TarefaCadastrar from './components/tarefa-cadastrar';
  import TarefaListarConcluidas from './components/tarefa-listar-concluidas';
  import TarefaListarNaoConcluidas from './components/tarefa-listar-nao-concluidas';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <nav>
                  <ul>
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                  </ul>
                  <ul>
                      <li>      
                        <Link to="./components/tarefa-listar">Lista de tarefas</Link>
                      </li>
                  </ul>  
                  <ul>
                      <li>      
                        <Link to="./components/tarefa-listar-concluidas">Lista de tarefas concluidas</Link>
                      </li>
                  </ul>
                  <ul>
                      <li>      
                        <Link to="./components/tarefa-listar-nao-concluidas">Lista de tarefas não concluidas</Link>
                      </li>
                  </ul> 
                  <ul> 
                      <li>
                        <Link to="./components/tarefa-cadastrar">Cadastrar Tarefas</Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/components/tarefa-listar" element={<TarefaListar />} />
                  <Route path="/components/tarefa-listar-concluidas" element={<TarefaListarConcluidas />} />
                  <Route path="/components/tarefa-listar-nao-concluidas" element={<TarefaListarNaoConcluidas />} />
                  <Route path="/components/tarefa-cadastrar" element={<TarefaCadastrar />} />
              </Routes>
              <footer>
                <p>Desenvolvido por Brian Snack</p>
              </footer>
          </div>
      </BrowserRouter>
  );
};

export default App;