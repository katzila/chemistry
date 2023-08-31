import { useEffect, FC } from 'react';
import { Box, Link, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useSearchParams } from 'react-router-dom';

import { organicCompoundName } from '../../types';
import CompoundEmpiricalFormula from '../../components/CompoundEmpiricalFormula';
import CompoundStructureFormulas from '../../components/CompoundStructureFormulas';
import CompoundIsomerism from '../../components/CompoundIsomerism';
import CompoundModel from '../../components/CompoundModel';
import CompoundProduction from '../../components/CompoundProduction';
import CompoundChemicalProperties from '../../components/CompoundChemicalProperties';


interface GuideTemplateProps {
  compound: organicCompoundName
}

const GuideTemplate: FC<GuideTemplateProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()
  const [searchParams] = useSearchParams()
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
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            p: 2,
          }}
          id='definition'
        >
          <Link
            variant='h5'
            underline='none'
            component={RouterLink}
            to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#definition`}
          >
            {t('guide.definitionTitle')}
          </Link>
          <Paper elevation={0} sx={{ p: 1, borderLeft: 'solid 3px #bbbbbb' }}>
            <p>
              {t(`guide.${compound}.definitionText`)}
            </p>
            <Typography variant='caption'>
              {t(`guide.${compound}.definitionCredits`)}
            </Typography>
          </Paper>
        </Paper>

        <CompoundEmpiricalFormula compound={compound} />

        <CompoundStructureFormulas compound={compound} />

        <CompoundIsomerism compound={compound} />

        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            p: 2,
          }}
          id='physicalProperties'
        >
          <Link
            variant='h5'
            underline='none'
            component={RouterLink}
            to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#physicalProperties`}
          >
            {t('guide.physicalProperties')}
          </Link>
          <p>
            {t(`guide.${compound}.physicalProperties`)}
          </p>
        </Paper>

        <CompoundProduction compound={compound} />

        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            p: 2,
          }}
          id='applications'
        >
          <Link
            variant='h5'
            underline='none'
            component={RouterLink}
            to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#applications`}
          >
            {t('guide.applications')}
          </Link>
          <ul>
            <li>{t('guide.alkanes.applications.freons')}</li>
            <li>{t('guide.alkanes.applications.solvents')}</li>
            <li>{t('guide.alkanes.applications.SynthesisGas')}</li>
            <li>{t('guide.alkanes.applications.sootRubber')}</li>
            <li>{t('guide.alkanes.applications.detergents')}</li>
            <li>{t('guide.alkanes.applications.fuel')}</li>
          </ul>
        </Paper>

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