import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;

  button {
    color: ${({ theme }) => theme.color.brand.secondary};
    
    position: absolute;
    line-height: 0;
    padding: 0.25rem;
    background: transparent;
    border-radius: 0.25rem;

    &:hover {
      color: ${({ theme }) => theme.color.brand.secondaryDark};
    }

    &:first-child {
      left: 0.5rem;
    }

    &:last-child {
      right: 0.5rem;
    }
  }
`

const InputBase = styled.input`
  background: ${({ theme }) => theme.color.base.button};
  color: ${({ theme }) => theme.color.base.title};
  
  width: 5.5rem;
  height: 100%;
  text-align: center;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  border: none;
  border-radius: 0.5rem;
`

export const InputSmall = styled(InputBase)`
  min-height: 2rem;
`

export const InputBig = styled(InputBase)`
  min-height: 2.5rem;
`
