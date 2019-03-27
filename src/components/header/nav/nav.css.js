import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      height: 25px;	color: #FFFFFF;	font-family: Futura;	font-size: 18px;	font-weight: bold;	line-height: 25px;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;


export const ListItem = styled.li`
  padding-right: 2rem;
`;