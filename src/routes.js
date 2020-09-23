import React from "react";
import Home from './pages/Home';
import Ponto from './pages/PontoApoio';
import Login from './pages/Login';
import Listar from './pages/Listar';
import Delete from './pages/Delete';
import Detalhes from './pages/Detalhes';
import Cadastro from './pages/Cadastro';
import Catalogo from './pages/catalogos';
import DeteleCatalog from './pages/DeleteCatalog';
import DeletePonto from './pages/DeletePonto';
import Atualizar from './pages/Atualizar';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/listar" component={Listar} />
      <Route exact path="/detalhes/:id" component={Detalhes} ></Route>
      <Route exact path="/deletar/:id" component={Delete} ></Route>
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/catalogo" component={Catalogo} />
      <Route exact path="/catalogo/:id" component={DeteleCatalog} />
      <Route exact path="/ponto-apoio" component={Ponto} />
      <Route exact path="/ponto-apoio/:id" component={DeletePonto} />
      <Route exact path="/atualizar/:id" component={Atualizar}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
