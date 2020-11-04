import styled, { keyframes } from 'styled-components'

const animateCloud = keyframes`
  0% {
      margin-left: -1000px;
  }
  100% {
      margin-left: 100%;
  }
`;

export const Background = styled.div`
  background-image: linear-gradient(to top,#53b2c7, #53b2c747, #d6ebf22b,#fff), linear-gradient(to bottom,#53b2c7, #53b2c747, #d6ebf22b,#fff);
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  background: #00b4ff50;
	color: #333;
	font: 100% Arial, Sans Serif;
	margin: 0;
	overflow-x: hidden;

  
  .x1 {
    -webkit-animation: ${animateCloud} 35s linear infinite;
    -moz-animation: ${animateCloud} 35s linear infinite;
    animation: ${animateCloud} 35s linear infinite;
    
    -webkit-transform: scale(0.65);
    -moz-transform: scale(0.65);
    transform: scale(0.65);
  }

  .x2 {
    -webkit-animation: ${animateCloud} 20s linear infinite;
    -moz-animation: ${animateCloud} 20s linear infinite;
    animation: ${animateCloud} 20s linear infinite;
    
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
  }

  .x3 {
    -webkit-animation: ${animateCloud} 30s linear infinite;
    -moz-animation: ${animateCloud} 30s linear infinite;
    animation: ${animateCloud} 30s linear infinite;
    
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
  }

  .x4 {
    -webkit-animation: ${animateCloud} 18s linear infinite;
    -moz-animation: ${animateCloud} 18s linear infinite;
    animation: ${animateCloud} 18s linear infinite;
    
    -webkit-transform: scale(0.4);
    -moz-transform: scale(0.4);
    transform: scale(0.4);
  }

  .x5 {
    -webkit-animation: ${animateCloud} 25s linear infinite;
    -moz-animation: ${animateCloud} 25s linear infinite;
    animation: ${animateCloud} 25s linear infinite;
    
    -webkit-transform: scale(0.55);
    -moz-transform: scale(0.55);
    transform: scale(0.55);
  }

  /* OBJECTS */

  .cloud {
    background: #fff;
    background: -moz-linear-gradient(top,  #fff 5%, #f1f1f1 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,#fff), color-stop(100%,#f1f1f1));
    background: -webkit-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
    background: -o-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
    background: -ms-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
    background: linear-gradient(top,  #fff 5%,#f1f1f1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );
    
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    
    -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

    height: 120px;
    position: relative;
    width: 350px;
  }

  .cloud:after, .cloud:before {
      background: #fff;
    content: '';
    position: absolute;
    z-indeX: -1;
  }

  .cloud:after {
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;

    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }

  .cloud:before {
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
    border-radius: 200px;

    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  height: 320px;
  width: 240px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 10px;
`;

export const CityName = styled.h2`
  font-size: 18px;
`;

export const Temperature = styled.p`
  font-size: 28px;
  font-weight: 900;
`;

export const TemperatureSymbol = styled.span`
  font-size: 16px;
`;