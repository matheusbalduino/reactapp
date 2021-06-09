import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'

import Dashboard from '../pages/Dashboard';
import Experiencia from '../pages/Experiencia';
import Repository from '../pages/Repository';
import Linguagem from '../pages/Linguagem';
import Sobremim from '../pages/Sobremim';


import { Title, Navbar, Ball1, Ball2 } from './styles'
import Ovini from '../assets/etes.svg'

const Routes: React.FC = () => (
  <>
  {/* efeitos de pagina */}
  <Ball1><div> </div></Ball1>
  <Ball2><div> </div></Ball2>

  {/* corpo da pagina */}
  <Title>
    <img src={Ovini} alt="ovni" />
    <div>Matheus Balduino</div>
  </Title>
  <Navbar>
    <ul id="listaNav">
      <li id="firstLi"><Link to="/Sobremim" >Sobre mim</Link></li>
      <li><Link to="/Linguagens" >Linguagens</Link></li>
      <li><Link to="/Experiencia" >Experiência</Link></li>
      <li><Link to="/Dashboard" >Github</Link></li>
      <li><Link to="/Repository" >Formação Acadêmica</Link></li>
    </ul>
  </Navbar>
  <Switch>
    <Route path="/Dashboard" exact component={Dashboard} />
    <Route path="/Repository" component={Repository} />
    <Route path="/Experiencia" component={Experiencia} />
    <Route path="/Linguagens" component={Linguagem}/>
    <Route path="/Sobremim" component={Sobremim}/>
  </Switch>
  </>
)

export default Routes;
