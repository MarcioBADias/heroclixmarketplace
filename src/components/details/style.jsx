import styled from 'styled-components'

export const Container = styled.div`
  background: var(--cor-wt-primary);
  border-radius: 15px;
  color: var(--cor-black);
  display: flex;
  margin: 1rem auto;
  width: 80vw;
`

export const Poster = styled.img`
  width: 400px;
  margin: 1rem;
`

export const DetailsArea = styled.div`
  margin: 1rem auto;
  text-align: center;
`

export const Title = styled.h1`
  color: var(--cor-black);
  font-size: 3rem;
`

export const SubTitle = styled.span`
  color: var(--cor-gray);
  font-size: 1.5rem;
`
export const ProfileArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`

export const ProfileContainer = styled.div`
  align-items: center;
  display: flex;
`

export const Profile = styled.p`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--cor-black);
  height: 65px;
  width: 65px;

  svg {
    height: 100%;
    width: 100%;
    fill: var(--cor-black);
    transition: fill 0.3s ease;
  }
`

export const CountButton = styled.button`
  background-color: var(--cor-black);
  border: none;
  border-radius: 100%;
  color: var(--cor-wt-primary);
  cursor: pointer;
  font-weight: bold;
  height: 25px;
  margin: 0 0.5rem;
  width: 25px;
`
