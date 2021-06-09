import React from 'react';

import { Painel, Github, Containerpainel } from './style'

import PerfilFoto from '../../assets/perfil.jpg'

const Sobremim: React.FC = () => (
  <>
  <Github>
    <a href="/Sobremim" id="gitbox">
      <div>
        <img src={PerfilFoto} alt="" />
        <div id="Nascimento" >
          22/jun/1990
        </div>
      </div>
      <div>
        <strong>TRAJETÓRIA PROFISSIONAL</strong>
        <div>
        Iniciou estudos em programação com Sistemas de Informação em 2019 na UFSM em Santa Maria - RS, onde participou em empresa
    júnior com desenvolvimento web no início da graduação e posteriormente estagiou em Startup incubada na UFSM também com
    desenvolvimento web.
            <div>
              Atualmente continua sua trajetória profissional em Ribeirão Preto - SP pela faculdade Reges de Ribeirão Preto.
              Informação complementar - Concluiu os estudos na USP em Medicina Veterinária no ano de 2017, concluiu Mestrado na UFV no ano
              de 2019, mudou de área após o mestrado onde conheceu o mundo da programação.
            </div>
        </div>
      </div>
    </a>
  </Github>
  <iframe style={{"border": "none", "marginLeft": "6.5vw", "marginTop": "50px", "borderRadius":"10px"}} width="753" height="480" src="https://www.youtube.com/embed/lGHXVqfJf6A"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
  <Containerpainel>
  <Painel>
    <p>
    <div>
        <strong>Características</strong> <br/>
       <br/>
      </div>
        Honesto<br/>
        Versátil<br/>
        Esforçado<br/>
        Estudioso<br/>
    </p>
  </Painel>
  <Painel>
    <p>
      <div>
        <strong>Idioma</strong> <br/>
        <i>Inglês</i><br/><br/>
      </div>
        Leitura - Avançado<br/>
        Escrita - Avançado<br/>
        Conversação - Avançado<br/>
    </p>
    </Painel>

  </Containerpainel>
  </>
);

export default Sobremim;
