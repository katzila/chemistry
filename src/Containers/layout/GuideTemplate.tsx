import { useEffect, FC } from 'react';
import { Box, Link, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useSearchParams } from 'react-router-dom';

import Isomer1 from '../../assets/alkanes/isomer1.png'
import Isomer2 from '../../assets/alkanes/isomer2.png'
import Isomer3 from '../../assets/alkanes/isomer3.png'
import Production1 from '../../assets/alkanes/production1.png'
import Production2 from '../../assets/alkanes/production2.png'
import alkanesScheme from '../../assets/alkanes/alkanesScheme.svg'
import ModelViewer from '../../ModelViewer';
import { compoundName } from '../../types';
import CompoundEmpiricalFormula from '../../components/CompoundEmpiricalFormula';


interface GuideTemplateProps {
  compound: compoundName
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
        p: 2,
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

        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            p: 2,
          }}
          id='empiricalFormula'
        >
          <Link
            variant='h5'
            underline='none'
            component={RouterLink}
            to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#empiricalFormula`}
          >
            {t('guide.empiricalFormula')}
          </Link>
          <CompoundEmpiricalFormula compound={compound} />
        </Paper>

        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            p: 2,
          }}
          id='structureFormulas'
        >
          <Link
            variant='h5'
            underline='none'
            component={RouterLink}
            to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#structureFormulas`}
          >
            {t('guide.structureFormulas')}
          </Link>
          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>4</sub></Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>3</sub> &#8722; CH<sub>3</sub></Typography>
          </Box>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            p: 2,
          }}
          id='isomerism'
        >
          <Link
            variant='h5'
            underline='none'
            component={RouterLink}
            to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#isomerism`}
          >
            {t('guide.isomerism')}
          </Link>
          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h6'>{t('guide.branchingCarbonSkeleton')}</Typography>
            <img src={Isomer1} alt='Isomer1' style={{ width: '315px', maxWidth: '100%' }} />

            <img src={Isomer2} alt='Isomer2' style={{ width: '250px', maxWidth: '100%' }} />

            <img src={Isomer3} alt='Isomer3' style={{ width: '180px', maxWidth: '100%' }} />
          </Box>
        </Paper>

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

        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            p: 2,
          }}
          id='production'
        >
          <Link
            variant='h5'
            underline='none'
            component={RouterLink}
            to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#production`}
          >
            {t('guide.production')}
          </Link>
          <ol>
            <li>
              <p>
                {t('guide.alkanes.production.1')}</p>
              <img src={Production1} alt='Production1' style={{ width: '350px', maxWidth: '100%' }} />
            </li>
            <li>
              <p>{t('guide.alkanes.production.2')}</p>
              <img src={Production2} alt='Production2' style={{ width: '500px', maxWidth: '100%' }} />
            </li>
          </ol>
        </Paper>

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
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            p: 2,
          }}
          id='model'
        >
          <ModelViewer
            scale={4}
            modelPath={"/pentane.glb"}
          />
          <Link
            variant='subtitle1'
            fontWeight='bold'
            underline='none'
            component={RouterLink}
            to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#model`}
          >
            {t(`guide.${compound}.model`)}
          </Link>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            p: 2,
          }}
          id='chemicalProperties'
        >
          <img src={alkanesScheme} alt="alkanesScheme" style={{ maxWidth: '100%' }} />
          <Link
            variant='subtitle1'
            fontWeight='bold'
            underline='none'
            component={RouterLink}
            to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#chemicalProperties`}
          >
            {t('guide.chemicalProperties')}
          </Link>
        </Paper>
      </Box>
    </Box >
  )
}

export default GuideTemplate