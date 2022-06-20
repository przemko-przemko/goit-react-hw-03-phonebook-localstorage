import React from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'

const FilterInput = styled.input`
   
    border-radius: 20px;
    border: 1px solid #605d5d5d;
    margin:1em 0;
    transition: 250ms;
    &:hover,
    :focus{
        box-shadow: 0px 0px 10px 0px rgba(32, 32, 33, 1);
        }

`

const Filter = ({filterContact}) => {
    const filterId = nanoid()
  return (
    <form htmlFor={filterId}>
        <FilterInput name="filter" type="text" id={filterId} onChange={filterContact}>
        </FilterInput>
    </form>
  )
}

export default Filter