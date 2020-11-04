import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  position: absolute;
  ${(props) => props.showCard ? 'top: 17%;' : 'top: 50%;'};
  left: 50%;
  ${(props) => props.showCard ? 'transform: translate(-50%, -17%);' : 'transform: translate(-50%, -50%);'};
  z-index: 9999;
`;

export const MainInputsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 40px;
  grid-gap: 4px;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  padding-left: 12px;
  box-sizing: border-box;
  letter-spacing: 0.04em;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(184, 196, 194);
  border-image: initial;
  border-radius: 4px;
  background: #fff;
  transition: all 0.2s ease-in-out 0s;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  &:focus {
    border-color: #4872e8;
    outline: none;
  }
`;

export const Select = styled.select`
  border: none;
  font-size: 15px;
  width: 90px;
  background-color: transparent;
  color: blue;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  height: 40px;
  background-color: transparent;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  svg {
    color: blue;
  }
  &:focus {
    outline: none;
  }
`;