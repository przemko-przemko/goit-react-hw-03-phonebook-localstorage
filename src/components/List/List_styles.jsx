import styled from "styled-components"

const ListStyle = styled.ul`
    list-style: none;
    margin:20px 0 ;
    padding-left: 0;
    max-width: 50vw;
`
const ListItem = styled.li`
    margin:20px 0;
    width:50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const DeleteBtn = styled.button`
   margin-left: 30px;
    color:#ffffff;
    align-items: center;
    background-color: #ff0000;
    border: transparent;
    border-radius: 6px;
    transition: 250ms;
    &:hover{
        background-color: #bb0202;
    }

`
export { ListStyle, ListItem,DeleteBtn }