import styled from 'styled-components'

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

export const CoffeesSection = styled.section`
  padding: 2rem 0 8rem;

  h2 {
    ${({ theme }) => theme.text.heading.titleL};
    color: ${({ theme }) => theme.color.base.subtitle};

    margin-bottom: 3.375rem
  }
`
