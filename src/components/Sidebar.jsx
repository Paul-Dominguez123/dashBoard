import styled from "styled-components";
import {Link} from "react-router-dom";
import {ImHome} from "react-icons/Im";
import {MdInventory2} from "react-icons/Md";
import {FaUserFriends} from "react-icons/Fa";

export const Sidebar=()=>{
    return(
        <ConteinerSide>
            <Ul>
                <Li>
                    <Link to="/"><ImHome/> Inicio</Link>
                </Li>
                <Li>
                    <Link to="/products"><MdInventory2/> Productos</Link>
                </Li>
                <Li>
                    <Link to="/user"><FaUserFriends/> Usuarios</Link>
                </Li>
            </Ul>
        </ConteinerSide>
    )
}
const ConteinerSide=styled.div`
    width:14rem;
    height:calc(100vh - 52px);
    border-right:1px solid gray;
`;
const Ul=styled.ul`
    list-style:none;
    padding: 1rem 2rem;
`;

const Li=styled.li`
    margin-bottom:1rem;
    a{
        text-decoration:none;
        font-size:20px;
    }
`;

