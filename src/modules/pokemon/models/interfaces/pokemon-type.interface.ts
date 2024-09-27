import type { ILanguageTranslation } from "./language-translation.interface";

export interface IPokemonType {
  readonly slot: number;
  readonly type: {
    name: string;
    url: string;
    names?: ILanguageTranslation[];
  };
}
