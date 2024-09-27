import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PokemonService } from "../services/pokeapi-connector.service";
import { PokemonEndpoints } from "../models/enums";
import type {
  IPokemonNameAndTypes,
  IPokemons,
  IPokemonWithTypeDetails,
} from "../models/interfaces";

@ApiTags("Pokemon")
@Controller()
export class PokemonController {
  public constructor(private readonly _pokemonService: PokemonService) {}

  @ApiOperation({ summary: "Fetch first hundred pokemon from the PokeAPI" })
  @ApiResponse({ status: 200 })
  @Get(PokemonEndpoints.POKEMON)
  public async getFirstHundred(): Promise<IPokemons> {
    return this._pokemonService.getFirstHundred();
  }

  @ApiOperation({ summary: "Fetch pokemon name and type according to the pokemon id" })
  @ApiResponse({ status: 200 })
  @Get(`${PokemonEndpoints.POKEMON}/:id`)
  public async getPokemonById(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<IPokemonNameAndTypes> {
    return this._pokemonService.getPokemonById(id);
  }

  @ApiOperation({
    summary: "Fetch pokemon name and types with translation according to the pokemon id",
  })
  @ApiResponse({ status: 200 })
  @Get(`${PokemonEndpoints.DETAILS}/:id`)
  public async getPokemonAndTypes(@Param("id") id: string): Promise<IPokemonWithTypeDetails> {
    return this._pokemonService.getPokemonAndTypes(id);
  }
}
