import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import type { PokemonResponse } from './pokemon'

const usePokemon = () => {
  return useQuery<PokemonResponse>({
    queryKey: ['weather'],
    queryFn: () => {
      return axios.get('https://pokeapi.co/api/v2/pokemon/charizard')
    }
  })
}

export { usePokemon }
