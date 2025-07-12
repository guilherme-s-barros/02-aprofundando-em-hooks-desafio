import styled from 'styled-components'

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

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
`
