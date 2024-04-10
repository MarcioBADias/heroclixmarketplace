import styled from 'styled-components'

export const Prices = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
  text-align: center;
`

export const Price = styled.p`
  color: ${(props) =>
    props.color === 'red'
      ? '#FF3131'
      : props.color === 'yellow'
        ? '#FF9221'
        : '#00BF63'};
  font-family: 'Red Hat Display', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.3rem;
`
export const PriceType = styled.span`
  color: var(--cor-gray);
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
`
