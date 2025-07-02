import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    ${({ theme }) => theme.text.body.regularS};
    background: ${({ theme }) => theme.color.brand.secondaryLight};
    color: ${({ theme }) => theme.color.brand.secondaryDark};

    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 0.5rem;

    svg {
      color: ${({ theme }) => theme.color.brand.secondary};
    }
  }

  a {
    background: ${({ theme }) => theme.color.brand.primaryLight};
    color: ${({ theme }) => theme.color.brand.primaryDark};

    line-height: 0;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`
