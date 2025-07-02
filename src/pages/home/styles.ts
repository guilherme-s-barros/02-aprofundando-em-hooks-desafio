import styled, { useTheme } from 'styled-components'

type ValidBackgroundColors = 'yellow' | 'yellowDark' | 'gray' | 'purple'

interface IconContainerProps {
	$backgroundColor: ValidBackgroundColors
}

function getThemeColor(color: ValidBackgroundColors) {
	const theme = useTheme()

	const validColors = {
		yellow: theme.color.brand.primary,
		yellowDark: theme.color.brand.primaryDark,
		gray: theme.color.base.text,
		purple: theme.color.brand.secondary,
	}

	return validColors[color]
}

export const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;

  background: url('/images/hero-bg.svg');
  background-position: bottom;
  background-size: cover;
`

export const HeroContent = styled.div`
  max-width: calc(1120px + 2rem);
  margin: 0 auto;
  padding: 5.75rem 1rem;

  display: flex;
  align-items: center;
  gap: 3.5rem;
`

export const CopyContainer = styled.div`
  margin-bottom: 4rem;

  h1 {
    ${({ theme }) => theme.text.heading.titleXL};
    color: ${({ theme }) => theme.color.base.title};

    margin-bottom: 1rem;
  }

  p {
    ${({ theme }) => theme.text.body.regularL}
    color: ${({ theme }) => theme.color.base.subtitle};
  }
`

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    white-space: nowrap;
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  color: ${({ theme }) => theme.color.base.background};
  background: ${({ $backgroundColor }) => getThemeColor($backgroundColor)};

  padding: 0.5rem;
  border-radius: 999px;
  line-height: 0;
`

export const CoffeesSection = styled.section`
  padding: 2rem 0 8rem;

  h2 {
    ${({ theme }) => theme.text.heading.titleL};
    color: ${({ theme }) => theme.color.base.subtitle};

    margin-bottom: 3.375rem
  }
`

export const CoffeeList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`

export const CoffeeCard = styled.li`
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
  }
`

export const CoffeeCardBody = styled.div`
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

export const CoffeeTagList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
  row-gap: 0.5rem;

  margin-bottom: 1rem;
`

export const CoffeeTag = styled.li`
  ${({ theme }) => theme.text.component.tag};
  background: ${({ theme }) => theme.color.brand.primaryLight};
  color: ${({ theme }) => theme.color.brand.primaryDark};

  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
`

export const CoffeeCardFooter = styled.footer`
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

  form {
    display: flex;
    gap: 0.5rem;
  }
`

export const AddToCartButton = styled.button`
  background: ${({ theme }) => theme.color.brand.secondaryDark};
  color: ${({ theme }) => theme.color.base.card};

  line-height: 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
`
