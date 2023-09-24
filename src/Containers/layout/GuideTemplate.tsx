import { useEffect, FC } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { organicCompoundName } from '../../types';
import CompoundEmpiricalFormula from '../../components/compoundSections/CompoundEmpiricalFormula';
import CompoundStructureFormulas from '../../components/compoundSections/CompoundStructureFormulas';
import CompoundIsomerism from '../../components/compoundSections/CompoundIsomerism';
import CompoundModel from '../../components/compoundSections/CompoundModel';
import CompoundProduction from '../../components/compoundSections/CompoundProduction';
import CompoundChemicalProperties from '../../components/compoundSections/CompoundChemicalProperties';
import CompoundApplications from '../../components/compoundSections/CompoundApplications';
import CompoundPhysicalProperties from '../../components/compoundSections/CompoundPhysicalProperties';
import CompoundDefinition from '../../components/compoundSections/CompoundDefinition';


interface GuideTemplateProps {
  compound: organicCompoundName
}

const GuideTemplate: FC<GuideTemplateProps> = (props) => {
  const { compound } = props
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash])

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