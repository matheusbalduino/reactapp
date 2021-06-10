import React from 'react'
import styled from 'styled-components'


export const Github = styled.div`


  #gitbox{
    display: flex;
    margin-top: 50px;
    margin-left: 70px;
    width: 82%;
    background-color: rgba(196, 196, 196, 0.14);
    border-radius: 10px;

    text-decoration: none;
    color: #D1D1D1;
    font: 18px Roboto, sans-serif;

    @media(max-width: 600px){
      flex-direction: column;
      width: 100%;
      margin-left: 27%;
    }

    &:hover{
      transform: translateX(5px);
    }

  }
  a > div {
    padding-left: 20px;
    padding-top: 20px;
    @media(max-width: 600px){
      padding-left: 27%;
    }
  }

  img{
    border-radius: 10%;
    width: 150px;
  }

  #Nascimento{
    margin-left: 10px;
    padding: 20px;
  }

  div + div{
    padding: 20px;
  }

  a > div > div {
    padding-top: 15px;
    text-align: justify;
    font: 16px Roboto, sans-serif;
    div{
      padding-top: 10px;
    }
  }

`;
export const Video = styled.div`

    @media(max-width:600px){
      width:100%;
      margin-left:20%;
    }
    #video{
      @media(max-width:600px){
      width:100%;
      margin-left:20%;
    }
    }
`;
export const Containerpainel = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 40px;
  margin-left: 60px;
  display: flex;
  @media(max-width:600px){
      width:150%;
      margin-left:0%;
      flex-direction: column;
    }
`;

export const Painel = styled.p`
    margin-top: 20px;
    background-color:  rgba(196, 196, 196, 0.14);
    width: 40%;
    margin-left: 27px;
    height: 100%;
    border-radius: 10px;
    text-align: center;

    p{
     padding: 3%;
     color: #D1D1D1;

     strong{
      color: #FA51FE;
      font-size: 20px;
     }

    }

    &:hover{
        transform: translateX(3px);
      }
`;
