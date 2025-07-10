import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  > a {
    outline: none;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > span {
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
    transition: all 0.2s;
    position: relative;

    &:hover {
      background: ${({ theme }) => theme.color.brand.primary};
      color: ${({ theme }) => theme.color.brand.primaryLight};
    }
  }
`

export const Badge = styled.span`
  ${({ theme }) => theme.text.body.boldS};
  background: ${({ theme }) => theme.color.brand.primaryDark};
  color: ${({ theme }) => theme.color.base.white};

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`
