import styled from 'styled-components'

export const Card = styled.article`
  max-width: 256px;
  background: ${({ theme }) => theme.color.base.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem 2.25rem;

  img {
    max-width: 120px;
    margin-top: -2.5rem;

    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))
  }
`

export const CardBody = styled.div`
  padding: 0.75rem 0 2rem;
  text-align: center;
  flex: 1;

  h3 {
    ${({ theme }) => theme.text.heading.titleS};
    color: ${({ theme }) => theme.color.base.subtitle};

    margin-bottom: 0.5rem;
  }

  p {
    ${({ theme }) => theme.text.body.regularS};
    color: ${({ theme }) => theme.color.base.label};
  }
`

export const TagList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
  row-gap: 0.5rem;

  margin-bottom: 1rem;
`

export const Tag = styled.li`
  ${({ theme }) => theme.text.component.tag};
  background: ${({ theme }) => theme.color.brand.primaryLight};
  color: ${({ theme }) => theme.color.brand.primaryDark};

  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
`

export const CardFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    ${({ theme }) => theme.text.body.regularS};
    white-space: nowrap;

    strong {
      ${({ theme }) => theme.text.heading.titleM};
    }
  }
`

export const Control = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ButtonBase = styled.button`
  color: ${({ theme }) => theme.color.base.card};

  line-height: 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.2s background;
`

export const AddToCartButton = styled(ButtonBase)`
  background: ${({ theme }) => theme.color.brand.secondaryDark};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.color.brand.secondary}
  }
`

export const SuccessButton = styled(ButtonBase)`
  background: ${({ theme }) => theme.color.feedback.success};
`
