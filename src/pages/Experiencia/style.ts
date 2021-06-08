import React from 'react'
import styled from 'styled-components'

export const Painel = styled.p`
    margin-left: 5vw;
    margin-top: 5vh;
    background-color:  rgba(0, 71, 255, 0.19);
    width: 82%;
    height: 100%;
    border-radius: 10px;

    p{
     padding: 3%;
     color: #D1D1D1;

     a{
      text-decoration: none;
      color: #D1D1D1;
        &:hover{
          color: whitesmoke;
          font-size: 17px;
        }
     }

    }
    &:hover{
        transform: translateX(3px);
      }
`;