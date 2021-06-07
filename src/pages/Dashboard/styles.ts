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

export const Github = styled.h1`

  #gitbox{
    display: flex;
    margin-top: 10vh;
    margin-left: 5vw;
    width: 82%;
    height: 110px;
    background-color: rgba(196, 196, 196, 0.14);
    border-radius: 10px;

    text-decoration: none;
    color: #D1D1D1;
    font: 18px Roboto, sans-serif;

    &:hover{
      transform: translateX(5px);
    }

  }

  img{
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 50%;
    width: 90px;
  }

  div + div > img {
    margin-top: 23px;
    width: 10px;
    margin-right: 20px;
  }

  div + div{
    margin-top: 20px;
    margin-left: 20px;
  }

  a > div > div {
    margin-top: 10px;
    font: 15px Roboto, sans-serif;

  }
`;

export const Repositorio = styled.h1`
    margin-left: 5vw;
    margin-top: 10vh;
    background-color:  rgba(196, 196, 196, 0.14);
    width: 82%;
    height: 200px;
    border-radius: 10px;

    a{
      display: flex;
      flex-wrap: wrap;
      text-align: justify;
      text-decoration: none;
      color: #D1D1D1;
      justify-content: space-between;
    }

    a > div {
      font: 16px Roboto, sans-serif;
      padding-left: 2vw;
      padding-top: 5vh;

      div{
        width:40vh;
        padding-top: 2vh;
        font: 20px Roboto, sans-serif;
      }

    }
    a > div + div{
      padding-top: 5vh;
    }

    &:hover{
        transform: translateX(5px);
      }
`;
