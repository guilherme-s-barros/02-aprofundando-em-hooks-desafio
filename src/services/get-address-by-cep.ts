import { api } from '../lib/api'

interface ViaCepResponse {
	bairro: string
	localidade: string
	logradouro: string
	uf: string
}

export async function getAddressByCEP(cep: string) {
	const response = await api.get<ViaCepResponse>(
		`https://viacep.com.br/ws/${cep}/json/`,
	)

	return response.data
}
