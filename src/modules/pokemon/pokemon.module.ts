import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { PokemonController } from "./controllers/pokemon.controller";
import { PokemonService } from "./services/pokeapi-connector.service";
import { AxiosHttpAdapter } from "@common/libs/axios/axios-http.adapter";

@Module({
  imports: [HttpModule],
  controllers: [PokemonController],
  providers: [PokemonService, AxiosHttpAdapter],
})
export class PokemonModule {}
