import { useEffect, FC } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { organicCompoundName } from '../../types';
import CompoundEmpiricalFormula from '../../components/CompoundEmpiricalFormula';
import CompoundStructureFormulas from '../../components/CompoundStructureFormulas';
import CompoundIsomerism from '../../components/CompoundIsomerism';
import CompoundModel from '../../components/CompoundModel';
import CompoundProduction from '../../components/CompoundProduction';
import CompoundChemicalProperties from '../../components/CompoundChemicalProperties';
import CompoundApplications from '../../components/CompoundApplications';
import CompoundPhysicalProperties from '../../components/CompoundPhysicalProperties';
import CompoundDefinition from '../../components/CompoundDefinition';


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