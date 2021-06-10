import React from 'react';
import styled from 'styled-components';

export const Github = styled.h1`

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
      @media(max-width:600px){
        flex-direction: column;
        margin-left: 35%;
      }
    &:hover{
      transform: translateX(5px);
    }

  }

  img{
    margin: 10px;
    border-radius: 50%;
    width: 90px;
    @media(max-width:600px){
        text-align: center;
        align-items: center;
        margin-left: 35%;
      }
  }

  div + div > img {
    margin-top: 23px;
    width: 10px;
    margin-right: 20px;
    @media(max-width:600px){
        margin-left: 90%;
      }
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

export const Repositorio = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 93%;
    @media(max-width:600px){
        margin-left: 20%;
      }
`;

export const Repos = styled.div`
    margin-top: 50px;
    margin-left: 70px;
    background-color:  rgba(196, 196, 196, 0.14);
    width: 40%;
    border-radius: 10px;
    @media(max-width:600px){
        width: 100%;

      }

    a{
      text-align: center;
      text-decoration: none;
      color: #D1D1D1;
      justify-content: space-between;
    }

    a > div {
      font: 14px Roboto, sans-serif;
      padding: 20px;


      div{
        width:100%;
        padding-top: 5px;
        font: 22px Roboto, sans-serif;
        color: #FA51FE;
      }

    }
    a > div + div{
      padding-top: 10px;
    }

    &:hover{
        transform: translateX(5px);
      }
`;
