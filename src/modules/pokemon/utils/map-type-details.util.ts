import type { IPokemonType, ITypeTranslationInfo } from "../models/interfaces";

export const mapTypeDetails = (
  type: IPokemonType,
  typeInfo: ITypeTranslationInfo,
): IPokemonType => {
  const spanishName = typeInfo.names.find((n) => n.language.name === "es");
  const japaneseName = typeInfo.names.find((n) => n.language.name === "ja");

  return {
    slot: type.slot,
    type: {
      name: typeInfo.name,
      url: type.type.url,
      names: [spanishName, japaneseName].filter(Boolean), // Filter to avoid nulls
    },
  };
};
