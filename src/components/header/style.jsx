import styled from 'styled-components'

export const Header = styled.header`
  display: flex;

  @media (max-width: 740px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-family: 'GAGALIN', sans-serif;
  font-size: 4rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  @media (max-width: 740px) {
    font-size: 2rem;
  }
`
export const emphasis = styled.span`
  color: var(--cor-red-primary);
  font-family: 'GAGALIN', sans-serif;
  font-size: 4rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  @media (max-width: 740px) {
    font-size: 2rem;
  }
`
