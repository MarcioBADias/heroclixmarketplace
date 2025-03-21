import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: var(--cor-red-primary);
  color: var(--cor-wt-primary);
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  padding: 1rem;
  position: relative;
`
export const Content = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 840px) {
    flex-direction: row;
}
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border: none;
  border-radius: 15px;
  color: var(--cor-black);
  font-size: 1rem;
  font-family: 'Red Hat Display', sans-serif;
  padding: 1rem;
  width: 100%;
`
export const Select = styled.select`
  border: none;
  border-radius: 15px;
  color: var(--cor-black);
  font-size: 1rem;
  font-family: 'Red Hat Display', sans-serif;
  padding: 1rem;
`

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--cor-red-primary);
  cursor: pointer;
  height: 65px;
  width: 65px;
  position: absolute;
  top: 10px;

  svg {
    height: 100%;
    width: 100%;
    fill: currentColor;
    transition: fill 0.3s ease;
  }
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  font-family: 'Red Hat Display', sans-serif;
  text-align: center;
`
export const CartButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--cor-wt-primary);
  cursor: pointer;
  height: 65px;
  width: 65px;

  svg {
    height: 100%;
    width: 100%;
    fill: currentColor;
    transition: fill 0.3s ease;
  }
`
