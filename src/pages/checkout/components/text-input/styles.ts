import styled from 'styled-components'

export const Input = styled.input`
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
