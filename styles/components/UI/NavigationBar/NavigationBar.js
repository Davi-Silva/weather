import styled from 'styled-components'

export const Navbar = styled.nav`
  position: absolute;
  height: 50px;
  width: 100%;
  background-color: transparent;
  z-index: 9999;
`;

export const Container = styled.div`
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const Brand = styled.h1`
  font-size: 20px;
`;

export const WhatIs = styled.a`
  font-size: 16px;
  color: #000;
`;