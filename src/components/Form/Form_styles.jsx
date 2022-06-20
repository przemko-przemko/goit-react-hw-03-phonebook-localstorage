import styled from "styled-components"


const FormInput = styled.form`
    display:flex;
    flex-direction: column;
    width: 50vw;
    transition: 250ms;
`
const InputBox = styled.input`
    border-radius: 20px;
    border: 1px solid #605d5d5d;
    margin:1em 0;
    transition: 250ms;
    &:hover{
        box-shadow: 0px 0px 10px 0px rgba(32, 32, 33, 1);
        }
`
const SubmitBtn = styled.button`
     margin:0 auto;
    color:#ffffff;
    align-items: center;
    background-color: #00ff00;
    border: transparent;
    border-radius: 6px;
    width:105px;
    height:30px;
    transition: 250ms;
    &:hover{
        background-color: #04af04;
    }
`
export { SubmitBtn, InputBox, FormInput}