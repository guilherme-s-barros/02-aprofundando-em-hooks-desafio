import styled from 'styled-components'

export const Button = styled.label`
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
    height: 100%;

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
