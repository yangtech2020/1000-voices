import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      height: 25px;
      color: #ffffff;
      font-family: Futura;
      font-size: 18px;
      font-weight: bold;
      line-height: 25px;
      padding-right: 2rem;

      & + li {
        margin-left: 2rem;
        ${MEDIA.IPAD`
            margin-left: 0;
        `}
      }

      ${MEDIA.IPAD`
        margin-bottom: 10px;
        display: block;
        width: 100%;
        text-align: center;
      `}
    }

    ${MEDIA.IPAD`
      display: none;
      margin-left: 0;

      &.opened {
        background-color: #3372bc;
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
        top: 62px; /* height of header */
      }
    `}
  }
`;

export const MenuButton = styled.span`
  display: none;

  ${MEDIA.IPAD`
    padding-right: 12px;
    display: block;
    float: right;
    text-align: left;
  `}
`;
