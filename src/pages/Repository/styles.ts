import React from 'react';
import styled from 'styled-components';


export const Title = styled.h1`
  font: 50px Roboto, sans-serif;
  color: #D1D1D1;
  margin-top: 5vh;
  margin-left: 5vw;
  display: flex;

  img{
    margin-right: 5vw;
    width: 50px;
  }
`;

export const Ball1 = styled.div`
  //características de posição
  position: absolute;
  left: 92vw;
  bottom:80vh;
  z-index: -1;

  //características de corpo
  background-color: #262532;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Ball2 = styled.div`
  //características de posição
  position: absolute;
  right: 90vw;
  bottom:10vh;
  z-index: -1;

  //características de corpo
  background-color: #262532;
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const Navbar = styled.ul`
  width: 82%;
  margin-left:5vw;
  #listaNav{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    }

    #listaNav > li{
      margin-top: 10vh;

    }

  #listaNav > li > a{
    text-decoration: none;
    color: #D1D1D1;
    font: 20px Roboto, sans-serif;
    text-align: justify;
  }
`;
