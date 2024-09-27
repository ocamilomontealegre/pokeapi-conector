export interface IPokemons {
  readonly results: Array<{
    name: string;
    url: string;
  }>;
}
