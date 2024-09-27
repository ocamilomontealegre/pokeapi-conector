import { registerAs } from "@nestjs/config";
import { IsNotEmpty, IsString } from "class-validator";
import { Expose, Type } from "class-transformer";
import { validateEnv } from "@common/utils";

export class PokeApiEnvVariables {
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @Expose()
  public readonly POKEAPI_URL!: string;
}

export interface IPokeApiEnvironment {
  readonly apiUrl: string;
}

export default registerAs("pokeApi", (): IPokeApiEnvironment => {
  const { POKEAPI_URL } = validateEnv(process.env, PokeApiEnvVariables);

  return {
    apiUrl: POKEAPI_URL,
  };
});
