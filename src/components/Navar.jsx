import styled from "styled-components"
import {Link} from "react-router-dom";


export const Navar=()=>{
    return(
        <ConteinerNav>
        
          
          <Title>Dashboard</Title>
          
          <Ul>
          <Li>
          <NavLink to="/logIn">log in</NavLink>
        </Li>
        <Li>
          <NavLink to="/singUp">sing up</NavLink>
          </Li>
        </Ul>
      </ConteinerNav>
    )
}

const ConteinerNav = styled.nav`
  background-color: #333;
  width: 100vw;
  height:10vh;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Li = styled.li`
  padding: 0px;
  margin:0px
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding-right:30px;
`;