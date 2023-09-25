import { organicCompoundName } from "./types";

export const organicCompounds: ReadonlyArray<organicCompoundName> = [
  'alkanes',
  'cycloalkanes',
  'alkenes',
  'alkynes',
  'arenes',
  'alcohols',
  'phenols',
  'aldehydes_ketones',
  'carboxylicAcids',
  'esters',
  'carbohydrates',
  'amines',
  'amino_acids',
] as const

export const MODEL_NAME_MAP = {
  'alcohols': 'ethanol',
  'alkanes': 'pentane',
  'alkenes': 'pentene',
  'alkynes': 'pentyne',
  'carboxylicAcids': 'formicAcid',
  'esters': 'ethylEthanoate',
} as const