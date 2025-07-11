import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  display: flex;
  height: calc(100vh - 6.8125rem); /* 6.8125rem is the height of the header */
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.color.brand.secondary};
  }
`
