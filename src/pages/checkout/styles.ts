import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  > section {
    &:first-child {
      flex: 1;
    }

    &:last-child {
      width: 28rem;
    }

    h2 {
      ${({ theme }) => theme.text.heading.titleXS};
      color: ${({ theme }) => theme.color.base.subtitle};

      margin-bottom: 1rem;
    }
  }
`

export const CartContainer = styled.div`
  background: ${({ theme }) => theme.color.base.card};
  border-radius: 0.5rem 2.75rem;
  padding: 2.5rem;

  ul {
    list-style: none;
  }
`

export const AmountContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.base.button};
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    display: flex;
    justify-content: space-between;

    span {
      ${({ theme }) => theme.text.body.regularS};
    }
  }

  strong {
    ${({ theme }) => theme.text.body.boldL};
    color: ${({ theme }) => theme.color.base.subtitle};

    display: flex;
    justify-content: space-between;
  }
`

export const ConfirmOrderButton = styled.button`
  ${({ theme }) => theme.text.component.buttonL};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.base.white};

  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
  transition: 0.2s background;

  &:hover {
    background: ${({ theme }) => theme.color.brand.primaryDark};
  }
`
