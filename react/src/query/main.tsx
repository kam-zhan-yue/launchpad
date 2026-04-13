import type { Pokemon } from "./pokemon"
import { usePokemon } from "./use-pokemon"

const Main = () => {
  const query = usePokemon()
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div>
        Tanstack Query Example
      </div>
      {!query.data && <div>Loading...</div> }
      {query.data && <PokemonDisplay pokemon={query.data.data} />}
    </div>
  )
}

const PokemonDisplay = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div>
      <td>Height: {pokemon.height}</td>
    </div>
  )
}

export { Main }
