import { Injectable, Inject } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { firstValueFrom, forkJoin, map, mergeMap } from "rxjs";
import { AxiosHttpAdapter } from "@common/libs/axios/axios-http.adapter";
import { mapPokemonDetails, mapTypeDetails } from "../utils";
import { PokemonEndpoints as PokemonResources } from "../models/enums";
import { pokeApiConfig } from "@common/env";
import type {
  IPokemons,
  IPokemonNameAndTypes,
  ITypeTranslationInfo,
  IPokemonWithTypeDetails,
} from "../models/interfaces";

@Injectable()
export class PokemonService {
  public constructor(
    @Inject(pokeApiConfig.KEY) private readonly _pokeApiConfig: ConfigType<typeof pokeApiConfig>,
    private readonly _httpAdapter: AxiosHttpAdapter,
  ) {}

  public async getFirstHundred(): Promise<IPokemons> {
    const response = await firstValueFrom(
      this._httpAdapter.get<IPokemons>(
        `${this._pokeApiConfig.apiUrl}${PokemonResources.POKEMON}?limit=100&offset=0`,
      ),
    );

    return { results: response.results };
  }

  public async getPokemonById(id: number): Promise<IPokemonNameAndTypes> {
    return firstValueFrom(
      this._httpAdapter
        .get<IPokemonNameAndTypes>(`${this._pokeApiConfig.apiUrl}${PokemonResources.POKEMON}/${id}`)
        .pipe(map(mapPokemonDetails)),
    );
  }

  public async getPokemonAndTypes(id: string): Promise<IPokemonWithTypeDetails> {
    return firstValueFrom(
      this._httpAdapter
        .get<IPokemonNameAndTypes>(`${this._pokeApiConfig.apiUrl}${PokemonResources.POKEMON}/${id}`)
        .pipe(
          mergeMap((response) => {
            const { name, types } = response;

            const pokemonTypes = types.map((type) =>
              this._httpAdapter
                .get<ITypeTranslationInfo>(type.type.url)
                .pipe(map((typeInfo) => mapTypeDetails(type, typeInfo))),
            );

            return forkJoin(pokemonTypes).pipe(
              map((updatedTypes) => ({ name, types: updatedTypes })),
            );
          }),
        ),
    );
  }
}
