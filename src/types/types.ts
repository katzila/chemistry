export type organicCompoundName = 'alkanes'
  | 'cycloalkanes'
  | 'alkenes'
  | 'alkynes'
  | 'arenes'
  | 'alcohols'
  | 'phenols'
  | 'aldehydes_ketones'
  | 'carboxylicAcids'
  | 'esters'
  | 'carbohydrates'
  | 'amines'
  | 'amino_acids'

export type inorganicCompoundName = 'alkali_metals'
  | 'alkaline_earth_metals'
  | 'transition_metals'
  | 'metalloids'
  | 'nonmetals'
  | 'halogens'
  | 'noble_gases'


export type compoundName = organicCompoundName | inorganicCompoundName