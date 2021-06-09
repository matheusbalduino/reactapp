import React, {useState, useEffect} from 'react';
import { Github, Repositorio, Repos} from './styles';

import pointArrow from '../../assets/pointArrow.svg'

import api from '../../services/api';

interface reposi {
  name:string;
  language:string;
  created_at: string;
  html_url: string;
};

const Dashboard: React.FC = () => {
  let data
  const[ repository, setRepository ] = useState<reposi[]>([]);

  useEffect(()=>{
    api.get('/users/matheusbalduino/repos').then(response => {
      console.log("imprimindo")
      if(repository.length < 1) setRepository(response.data); // condicional para parar o erro de chamar em um looping infinito
    })
  },)

  return (
  <>
  <Github>
    <a href="/Sobremim" id="gitbox">
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
  <Repositorio >
    {repository.map((repos)=>(
      <Repos>
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
         <div>
         {repos.created_at.replace("T", " ").replace("Z","").split(" ")[0].split("-")[2]}/
         {repos.created_at.replace("T", " ").replace("Z","").split(" ")[0].split("-")[1]}/
         {repos.created_at.replace("T", " ").replace("Z","").split(" ")[0].split("-")[0]}
         </div>
       </div>
     </a>
     </Repos>
    ))}
  </Repositorio>

  </>

)}





export default Dashboard;
