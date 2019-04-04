import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  background-color: #3372bc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  a {
    color: #ffffff;
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }

  h1 {
    height: 42px;
    color: #ffffff;
    font-family: Futura;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 42px;

    &:hover {
      color: inherit;
    }
  }

  .fullTitle {
    ${MEDIA.IPAD_PRO`
      display: none;
    `}
  }

  .shortTitle {
    display: none;

    ${MEDIA.IPAD_PRO`
      display: block;
    `}
  }
`;
