import styled from 'styled-components';

export const Container = styled.header`
  background-color: #3372BC;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  a {
    color: #FFFFFF;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
  
  h1 {
    height: 42px;	color: #FFFFFF;	font-family: Futura;	font-size: 32px;	font-weight: bold;	letter-spacing: -1.28px;	line-height: 42px;	text-align: center;

    &:hover {
      color: inherit;
    }
  }
`;
