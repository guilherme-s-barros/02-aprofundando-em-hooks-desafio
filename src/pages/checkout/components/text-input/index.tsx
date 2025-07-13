import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input, OptionalInput } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	optional?: boolean
	formRegister: string
}

export function TextInput({
	optional = false,
	formRegister,
	...props
}: TextInputProps) {
	const { register } = useFormContext()

	if (optional) {
		return (
			<OptionalInput>
				<Input type="text" {...register(formRegister)} {...props} />
				<em>Opcional</em>
			</OptionalInput>
		)
	}

	return <Input type="text" required {...register(formRegister)} {...props} />
}
