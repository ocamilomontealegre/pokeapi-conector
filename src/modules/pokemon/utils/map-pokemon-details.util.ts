import type { IPokemonNameAndTypes } from "../models/interfaces";

export const mapPokemonDetails = (pokemonDetails: IPokemonNameAndTypes): IPokemonNameAndTypes => {
  const { name, types: pokemonTypes } = pokemonDetails;

  return {
    name,
    types: pokemonTypes.map((pokemonType) => ({
      slot: pokemonType.slot,
      type: {
        ...pokemonType.type,
      },
    })),
  };
};
