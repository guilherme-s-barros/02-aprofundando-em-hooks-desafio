import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 5rem 0;
`

export const TextContainer = styled.div`
  h1 {
    ${({ theme }) => theme.text.heading.titleL};
    color: ${({ theme }) => theme.color.brand.primaryDark};
    
    margin-bottom: 0.25rem;
  }

  > p {
    ${({ theme }) => theme.text.body.regularL};
    color: ${({ theme }) => theme.color.base.subtitle};

    margin-bottom: 2.5rem;
  }
`

export const OrderInfoContainer = styled.div`
  ${({ theme }) => theme.color.brand.gradient};

  padding: 2px;
  border-radius: 0.5rem 2.25rem;
`

export const OrderInfoContent = styled.div`
  background: ${({ theme }) => theme.color.base.background};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 0.4rem 2.15rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`
