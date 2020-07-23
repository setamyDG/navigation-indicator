import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212121; 
  flex-flow: column;
  color: white;
`;

const Navigation = styled.nav`
  background:	#808080;
  position: relative;
`;

const StyledUl = styled.ul`
  list-style:none;
  padding:0;
  text-align:center;
  font-weight: bold;
`;

const Link = styled.li`
  position: relative;
  margin: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display:inline;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const DivUnderNav = styled.div`
  position: absolute;
  bottom: 5px;
  width: ${({ width }) => `${width}px`};
  left: ${({ left }) => `${left}px`};
  height: 3px;
  background: white;
  transition: all .5s ease-in-out;
`;

const App = () => {

  const [indicatorPosition, setIndicatorPosition] = useState();
  const [indicatorWidth, setIndicatorWidth] = useState();
  const navElement = useRef();

  const handleClick = (event) => {
  const linkLeft = event.target.getBoundingClientRect().left;
  const navLeft = navElement.current.getBoundingClientRect().left;
  const linkWidth = event.target.getBoundingClientRect().width;
  const singleLinkWidth = linkWidth;
  const singleLinkLeft = linkLeft - navLeft;
  setIndicatorPosition(singleLinkLeft);
  setIndicatorWidth(singleLinkWidth);
};

  return (
    <Container>
      <h1>Navigation indicator</h1>
      <Navigation className="Navbar" ref={navElement}>
        <StyledUl>
          <Link onClick={handleClick}>HOME</Link>
          <Link onClick={handleClick}>About</Link>
          <Link onClick={handleClick}>Contact</Link>
          <Link onClick={handleClick}>Log out</Link>
          <DivUnderNav left={indicatorPosition} width={indicatorWidth} />
        </StyledUl>
      </Navigation>
    </Container>
  );
}

export default App;
