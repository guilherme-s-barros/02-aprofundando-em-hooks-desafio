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

export const IconContainer = styled.div<IconContainerProps>`
  color: ${({ theme }) => theme.color.base.background};
  background: ${({ $backgroundColor }) => getThemeColor($backgroundColor)};

  padding: 0.5rem;
  border-radius: 999px;
  line-height: 0;
`
