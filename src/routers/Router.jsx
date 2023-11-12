import {BrowserRouter as Router, Routes ,Route, } from "react-router-dom"
import { Navar } from "../components/navar"
import { Sidebar } from "../components/Sidebar"
import { Home } from "../pages/home"
import { Products } from "../pages/products"
import { User } from "../pages/user"
import styled from "styled-components";
import { Login } from "../pages/Login"
import { SingUp } from "../pages/SingUp"


export const MyRoutes = () => {
    return (
     <Router>
          
      
        <Navar/>
        
     
        <Conteiner1>
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/products" element={<Products />} />
             <Route path="/user" element={<User />} />
             
            
            <Route path="/logIn" element={<Login />} />
            <Route path="/singUp" element={<SingUp />} />
        </Routes>
        </Conteiner1>
      </Router>
    )
  }
  const Conteiner=styled.div`
    display:flex;
    
  `;
  const Conteiner1=styled.div`
    display:flex;
  `;