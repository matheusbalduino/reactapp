import React from 'react';
import styled from 'styled-components';

export const Repositorio = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    @media(max-width:600px){
      display: contents;
    }
`;

export const Repos = styled.div`
    margin-top: 50px;
    margin-left: 70px;
    background-color: rgba(219, 0, 255, 0.29);
    width: 20%;
    border-radius: 10px;

    text-align: center;
    padding: 20px;

    @media(max-width:600px){
      width: 70%;
      margin-left: 35%;
    }
    #boot{
      padding-top: 10px;
      width: 100px;
    }
    #html{
      padding-top: 10px;
      width: 70px;
    }
    #node{
      padding-top: 15px;
      width: 160px;
    }
    #laravel{
      padding-top: 10px;
      width: 180px;
    }
    #figma{
      padding-top: 15px;
      width: 80px;
    }
    &:hover{
        transform: translateX(5px);
      }
`;
