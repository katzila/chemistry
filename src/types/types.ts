import { ORGANIC_COMPOUNDS } from "../constants"


export type organicCompoundName = typeof ORGANIC_COMPOUNDS[number]

// export type inorganicCompoundName = 'alkali_metals'
//   | 'alkaline_earth_metals'
//   | 'transition_metals'
//   | 'metalloids'
//   | 'nonmetals'
//   | 'halogens'
//   | 'noble_gases'


export type compoundName = organicCompoundName
// | inorganicCompoundName