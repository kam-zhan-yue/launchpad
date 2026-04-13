interface PokemonResponse {
  data: Pokemon
}
interface Pokemon {
  abilities: {}
  height: number
  types: {}
}

export type { Pokemon, PokemonResponse }
