import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  border: none;
  color: #757575;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 4rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const Close = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: 4rem;
  font-weight: normal;
  padding: 1rem;
  line-height: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
`;

export const Location = styled.span`
  color: #000000;
  display: block;
  font-family: Futura;
  font-size: 20px;
  font-weight: 500;
  margin: 0 .5rem;

  ${MEDIA.IPAD`
    margin-bottom: 4rem;
  `};
`;

export const Name = styled.span`
  color: #000000;
  display: block;
  font-family: Futura;
  font-size: 32px;
  font-weight: 500;
  margin: 1.25rem .5rem;
`;

export const Tags = styled.div`
  color: #8B8B8B;
  font-family: Futura;
  font-size: 12px;
  font-style: italic;
  font-weight: 500;
  padding: 1.25rem 0rem 0rem .5rem;
`;

export const Thumbnail = styled.img`
  cursor: pointer;
  boxSizing: border-box;
  height: 200px;
  width: 300px;
  border: 1px solid #979797;
  boxShadow: 0 2px 4px 0 rgba(0,0,0,0.5);
`;