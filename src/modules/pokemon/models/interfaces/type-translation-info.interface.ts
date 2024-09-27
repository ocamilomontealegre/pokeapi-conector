import type { ILanguageTranslation } from "./language-translation.interface";

export interface ITypeTranslationInfo {
  readonly name: string;
  readonly names: ILanguageTranslation[];
}
