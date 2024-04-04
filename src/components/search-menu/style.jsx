import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: var(--cor-red-primary);
  display: flex;
  justify-content: space-around;
  height: 15vh;
  margin: 1rem 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border: none;
  border-radius: 15px;
  padding: 1rem;
  width: 400px;
`

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--cor-red-primary);
  cursor: pointer;
  height: 50px;
  width: 50px;

  svg {
    height: 100%;
    width: 100%;
    fill: currentColor;
    transition: fill 0.3s ease;
  }
`
