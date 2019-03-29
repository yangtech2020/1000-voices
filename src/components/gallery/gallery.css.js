import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8rem;
  padding: 2rem 10rem 0rem 12rem;

  @media (max-width: 1667px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1281px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 994px) {
    grid-template-columns: repeat(1, 1fr);
  }

  ${MEDIA.IPAD_PRO`
    grid-gap: 6rem 12rem;
  `};

  ${MEDIA.IPAD`
    grid-gap: 4rem 4rem;
    justify-items: center;
    padding: 0rem;
  `};

  ${MEDIA.PHONE`
    grid-template-columns: repeat(1, 1fr);
  `}
`;
