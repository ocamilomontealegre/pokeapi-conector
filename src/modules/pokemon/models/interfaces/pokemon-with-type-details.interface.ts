import type { IPokemonType } from "./pokemon-type.interface";

export interface IPokemonWithTypeDetails {
  readonly name: string;
  types: IPokemonType[];
}
