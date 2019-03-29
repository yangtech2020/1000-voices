import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 0 4rem 0 12rem;
  margin: 4rem 0 3rem;

  ${MEDIA.DESKTOP`
    padding: 0 4rem 0 12rem;
  `}

  ${MEDIA.IPAD`
    padding: 0 4rem 0 4rem;
  `}
`;

export const BigText = styled.div`
  color: #000000;
  font-family: Futura;
  font-size: 36px;
  font-weight: bold;
  line-height: 47px;

  ${MEDIA.IPAD`
    font-size: 24px;
    text-align: center;
  `}
`;
