import React from 'react';

import {Repositorio, Repos} from './styles';

import CssImg from "../../assets/css.svg"
import Html from "../../assets/html.svg"
import bootstrap from "../../assets/bootstrap.svg"
import ts from "../../assets/ts.svg"
import node from "../../assets/node.svg"
import laravel from "../../assets/laravel.svg"
import figma from "../../assets/figma.svg"
import Net from "../../assets/net.svg"

const Linguagem: React.FC = () => (
  <>
  <Repositorio>
    <Repos>
      <img src={CssImg} alt="Css" />
    </Repos>
    <Repos>
      <img id="html" src={Html} alt="html" />
    </Repos>
    <Repos>
      <img id="boot" src={bootstrap} alt="bootstrap" />
    </Repos>
    <Repos>
      <img src={ts} alt="ts" />
    </Repos>
    <Repos>
      <img id="node" src={node} alt="node" />
    </Repos>
    <Repos>
      <img id="laravel" src={laravel} alt="laravel" />
    </Repos>
    <Repos>
      <img id="figma" src={figma} alt="figma" />
    </Repos>
    <Repos>
      <img id="net" src={Net} alt="Net" />
    </Repos>

  </Repositorio>


  </>
);

export default Linguagem;
