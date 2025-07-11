import styled from 'styled-components'

export const CartItemContainer = styled.li`
  display: flex;
  justify-content: space-between;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.base.button};
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }

  strong {
    ${({ theme }) => theme.text.body.boldM};
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    max-width: 4rem;
  }
`

export const Details = styled.div`
  p {
    display: block;
    margin-bottom: 0.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveCartItemButton = styled.button`
  ${({ theme }) => theme.text.component.buttonM};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem;

  text-transform: uppercase;
  transition: 0.2s all;

  &:hover {
    background: ${({ theme }) => theme.color.base.hover};
    color: ${({ theme }) => theme.color.base.subtitle};
  }

  svg {
    color: ${({ theme }) => theme.color.brand.secondary};
  }
`
