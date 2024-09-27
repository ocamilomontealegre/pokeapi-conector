import type { IPokemonType } from "./pokemon-type.interface";

export interface IPokemonNameAndTypes {
  readonly name: string;
  readonly types: IPokemonType[];
}
