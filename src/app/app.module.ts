import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { ConfigModule } from "@config/config.module";
import { HealthModule } from "@health/health.module";
import { PokemonModule } from "@modules/pokemon/pokemon.module";
import { appConfig, nodeConfig, pokeApiConfig } from "@common/env";

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
      load: [appConfig, nodeConfig, pokeApiConfig],
    }),
    ConfigModule,
    HealthModule,
    PokemonModule,
  ],
})
export class AppModule {}
