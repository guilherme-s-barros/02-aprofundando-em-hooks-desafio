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

export const OrderFormSection = styled.section`
  background: ${({ theme }) => theme.color.base.card};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 0.5rem;

  &+& {
    margin-top: 0.75rem;
  }

  h3 {
    color: ${({ theme }) => theme.color.base.subtitle};

    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.125rem;

    svg {
      color: ${({ theme }) => theme.color.brand.primaryDark};
    }
  }

  p {
    ${({ theme }) => theme.text.body.regularS};

    margin-left: calc(0.5rem + 24px);
  }
`

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  row-gap: 1rem;
  column-gap: 0.75rem;

  input:nth-child(2) {
    grid-column: 1 / 4;
  }

  div:nth-child(4) {
    grid-column: 2 / 4;
  }
`

export const TextInput = styled.input`
  ${({ theme }) => theme.text.body.regularS};
  background: ${({ theme }) => theme.color.base.input};
  border: 1px solid ${({ theme }) => theme.color.base.button};
  border-radius: 0.25rem;
  padding: 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.base.label};
  }
`

export const OptionalInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    padding-right: 5rem;
  }

  em {
    color: ${({ theme }) => theme.color.base.label};
    ${({ theme }) => theme.text.body.regularS};

    position: absolute;
    right: 0.75rem;
    pointer-events: none;
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethodButton = styled.label`
  position: relative;
  flex: 1;

  input[type=radio] {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    border-radius: 0.5rem;
    outline-color: ${({ theme }) => theme.color.brand.secondary};
  }

  input[type=radio]:checked + span {
    outline: 1px solid ${({ theme }) => theme.color.brand.secondary};
    background: ${({ theme }) => theme.color.brand.secondaryLight};
  }

  span {
    ${({ theme }) => theme.text.component.buttonM};
    background: ${({ theme }) => theme.color.base.button};

    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-radius: 0.5rem;
    padding: 1rem;

    text-transform: uppercase;
    transition: 0.2s all;

    &:hover {
      color: ${({ theme }) => theme.color.base.subtitle};
      background: ${({ theme }) => theme.color.base.hover};
    }

    svg {
      color: ${({ theme }) => theme.color.brand.secondary};
    }
  }
`

export const CartContainer = styled.div`
  background: ${({ theme }) => theme.color.base.card};
  border-radius: 0.5rem 2.75rem;
  padding: 2.5rem;
`

export const CartItem = styled.article`
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

export const CartItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    max-width: 4rem;
  }
`

export const CartItemDetails = styled.div`
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
`

export const CartItemActions = styled.div`
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

export const AmountContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.base.button};
  padding-top: 1.5rem;
  margin-top: 1.5rem;
`

export const Amount = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 0.75rem;
  }

  span:first-child {
    ${({ theme }) => theme.text.body.regularS};
  }

  strong {
    ${({ theme }) => theme.text.body.boldL};
    color: ${({ theme }) => theme.color.base.subtitle};
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
