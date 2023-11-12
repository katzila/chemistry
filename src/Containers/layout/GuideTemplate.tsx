import { FC } from 'react';
import { Box } from '@mui/material';

import { organicCompoundName } from '../../types';
import {
  CompoundEmpiricalFormula,
  CompoundStructureFormulas,
  CompoundIsomerism,
  CompoundModel,
  CompoundProduction,
  CompoundChemicalProperties,
  CompoundApplications,
  CompoundPhysicalProperties,
  CompoundDefinition,
} from '../../components/compoundSections';


interface GuideTemplateProps {
  compound: organicCompoundName
}

const GuideTemplate: FC<GuideTemplateProps> = (props) => {
  const { compound } = props

  return (
    <Box
      component="div"
      role="tabpanel"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        p: { xs: 0, sm: 2 },
      }}
    >
      <Box
        component="div"
        sx={{
          width: { xs: '100%', lg: '50%' },
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <CompoundDefinition compound={compound} />

        <CompoundEmpiricalFormula compound={compound} />

        <CompoundStructureFormulas compound={compound} />

        <CompoundIsomerism compound={compound} />

        <CompoundPhysicalProperties compound={compound} />

        <CompoundProduction compound={compound} />

        <CompoundApplications compound={compound} />
      </Box>

      <Box
        component="div"
        sx={{
          width: { xs: '100%', lg: '50%' },
          p: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <CompoundModel compound={compound} />

        <CompoundChemicalProperties compound={compound} />
      </Box>
    </Box >
  )
}

export default GuideTemplate