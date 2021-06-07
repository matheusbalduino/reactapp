import React, {useState, useEffect} from 'react';
import { Title, Navbar, Ball1, Ball2, Github, Repositorio} from './styles';

import Ovini from '../../assets/etes.svg'
import pointArrow from '../../assets/pointArrow.svg'

import api from '../../services/api';

interface reposi {
  name:string;
  language:string;
  created_at: string;
  html_url: string;
};

const Dashboard: React.FC = () => {

  const[ repository, setRepository ] = useState<reposi[]>([]);

    useEffect(()=>{
      api.get('/users/matheusbalduino/repos').then(response => {
        console.log(response)
        setRepository(response.data);
      })
    },);


  return (
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
      <li id="firstLi"><a href="/#" >Sobre mim</a></li>
      <li><a href="/#" >Linguagens</a></li>
      <li><a href="/#" >Experiência</a></li>
      <li><a href="/#" >Github</a></li>
      <li><a href="/#" >Formação Acadêmica</a></li>
    </ul>
  </Navbar>
  <Github>
    <a href="/#" id="gitbox">
      <div>
        <img src="https://avatars.githubusercontent.com/u/55632437?v=4" alt="" />
      </div>
      <div>
        <strong>Meu Perfil do Github</strong>
        <div>
          Iniciou sua carreira profissional com programação em 2019, os repositórios
          desenvolvidos no Github são uma parte de seu trabalho.
        </div>
      </div>
      <div>
        <img src={pointArrow} alt="pointArrow" />
      </div>
    </a>
  </Github>
    {repository.map((repos)=>(
      <Repositorio >
       <a href={repos.html_url} id="repository" key={repos.name+1}>
       <div>
         <strong>Nome Projeto:</strong>
         <div>{repos.name}</div>
       </div>
       <div>
         <strong>Linguagem de Programação:</strong>
         <div>{repos.language}</div>
       </div>
       <div>
         <strong>Data:</strong>
         <div>{repos.created_at.toLocaleString()}</div>
       </div>
     </a>
     </Repositorio>
    ))}


  </>

)}





export default Dashboard;
