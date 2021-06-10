import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
  font: 50px Roboto, sans-serif;
  color: #D1D1D1;
  margin-top: 5vh;
  margin-left: 5vw;
  display: flex;

  @media(max-width:600px){
      margin-top: 10vh;
      margin-left: 40vw;
      margin-bottom: 5vh;
      text-align: center;
      flex-direction: column;
    }

  img{
    margin-right: 5vw;
    width: 50px;

    @media(max-width:600px){
      width: 70px;
      margin-left: 18vw;
      text-align:center;
      margin-bottom: 5vh;
    }

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

      @media(max-width:600px){
        display: flex;
        flex-wrap: wrap;
        margin-left: 35%;
        width:100%;
      }
    }

    #listaNav > li{
      margin-top: 10vh;
      @media(max-width:600px){
       margin-top: 2vh;
       width: 100%;
       height: 50px;
       text-align: center;
       align-items: center;
       background-color: rgba(196, 196, 196, 0.14);
       border-radius: 10px;

      }
    }


  #listaNav > li > a{
    text-decoration: none;
    color: #D1D1D1;
    font: 20px Roboto, sans-serif;
    text-align: justify;

  }
`;
