import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Production1 from '../../../assets/esters/production1.png'
// import estersScheme from '../../../assets/esters/estersScheme.svg'


export const EstersGuide = () => {
  const [t] = useTranslation()

  return (
    <Paper
      role="tabpanel"
    >
      <Box sx={{ p: 2, display: 'flex' }}>
        <Box sx={{ width: '50%', pr: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.definitionTitle')}</Typography>
            <Paper elevation={0} sx={{ p: 1, borderLeft: 'solid 3px #bbbbbb' }}>
              <p>
                {t('guide.esters.definitionText')}
              </p>
              <Typography variant='caption'>
                {t('guide.esters.definitionCredits')}
              </Typography>
            </Paper>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.empiricalFormula')}</Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub></Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.structureFormulas')}</Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>3</sub> &#8722; COO &#8722; C<sub>2</sub>H<sub>5</sub></Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>2</sub>H<sub>5</sub> &#8722; COO &#8722; C<sub>3</sub>H<sub>7</sub></Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant='h5'>{t('guide.isomerism')}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <ol>
                <li>
                  <Typography variant='h6'>{t('guide.esters.isomerism.1')}</Typography>
                </li>
                <li>
                  <Typography variant='h6'>{t('guide.esters.isomerism.2')}</Typography>
                </li>
                <li>
                  <Typography variant='h6'>{t('guide.esters.isomerism.3')}</Typography>
                </li>
              </ol>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.physicalProperties')}</Typography>
            <p>
              {t('guide.esters.physicalProperties')}
            </p>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.production')}</Typography>
            <ol>
              <li>
                <p>
                  {t('guide.esters.production.1')}</p>
                <img src={Production1} alt='Production1' style={{ width: '500px', maxWidth: '100%' }} />
              </li>
            </ol>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.applications')}</Typography>
            <ul>
              <li>{t('guide.esters.applications.metalworking')}</li>
              <li>{t('guide.esters.applications.lubricants')}</li>
              <li>{t('guide.esters.applications.plasticizers')}</li>
              <li>{t('guide.esters.applications.synthesis')}</li>
            </ul>
          </Box>

        </Box>
        <Box sx={{ width: '50%', pl: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <iframe title='ethylMethylEther' src="/ethylMethylEther.html?autorotate&no_social" width="100%" //temporary
              height="600px" frameBorder="0" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} ></iframe>
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.esters.modelEthylMethylEther')}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {/* <img src={estersScheme} alt="estersScheme" style={{ maxWidth: '100%' }} /> */}
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.chemicalProperties')}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default EstersGuide