import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Isomer1 from '../../../assets/alkanes/isomer1.png'
import Isomer2 from '../../../assets/alkanes/isomer2.png'
import Isomer3 from '../../../assets/alkanes/isomer3.png'
import Production1 from '../../../assets/alkanes/production1.png'
import Production2 from '../../../assets/alkanes/production2.png'
import alkanesScheme from '../../../assets/alkanes/alkanesScheme.svg'
import ModelViewer from '../../../ModelViewer';


export const AlkanesGuide = () => {
  const [t] = useTranslation()

  return (
    <Paper
      role="tabpanel"
    >
      <Box component="div" sx={{ p: 2, display: 'flex' }}>
        <Box component="div" sx={{ width: '50%', pr: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.definitionTitle')}</Typography>
            <Paper elevation={0} sx={{ p: 1, borderLeft: 'solid 3px #bbbbbb' }}>
              <p>
                {t('guide.alkanes.definitionText')}
              </p>
              <Typography variant='caption'>
                {t('guide.alkanes.definitionCredits')}
              </Typography>
            </Paper>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.empiricalFormula')}</Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n+2</sub></Typography>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.structureFormulas')}</Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>4</sub></Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>3</sub> &#8722; CH<sub>3</sub></Typography>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant='h5'>{t('guide.isomerism')}</Typography>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <Typography variant='h6'>{t('guide.branchingCarbonSkeleton')}</Typography>
              <img src={Isomer1} alt='Isomer1' style={{ width: '315px', maxWidth: '100%' }} />

              <img src={Isomer2} alt='Isomer2' style={{ width: '250px', maxWidth: '100%' }} />

              <img src={Isomer3} alt='Isomer3' style={{ width: '180px', maxWidth: '100%' }} />
            </Box>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.physicalProperties')}</Typography>
            <p>
              {t('guide.alkanes.physicalProperties')}
            </p>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.production')}</Typography>
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
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.applications')}</Typography>
            <ul>
              <li>{t('guide.alkanes.applications.freons')}</li>
              <li>{t('guide.alkanes.applications.solvents')}</li>
              <li>{t('guide.alkanes.applications.SynthesisGas')}</li>
              <li>{t('guide.alkanes.applications.sootRubber')}</li>
              <li>{t('guide.alkanes.applications.detergents')}</li>
              <li>{t('guide.alkanes.applications.fuel')}</li>
            </ul>
          </Box>

        </Box>
        <Box component="div" sx={{ width: '50%', pl: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <ModelViewer scale={4} modelPath={"/pentane.glb"} />
            {/* <PentaneCanvas /> */}
            {/* <iframe title='pentane' src="/pentane.html?autorotate&no_social" width="100%" //temporary
              height="600px" frameBorder="0" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} ></iframe> */}
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.alkanes.modelPentane')}</Typography>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <img src={alkanesScheme} alt="alkanesScheme" style={{ maxWidth: '100%' }} />
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.chemicalProperties')}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default AlkanesGuide