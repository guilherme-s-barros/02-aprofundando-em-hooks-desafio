import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.color.base.background};
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`

export const HeaderContent = styled.div`
  max-width: calc(1120px + 2rem);
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
