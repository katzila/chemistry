import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Production1 from '../../../assets/alkenes/production1.png'
import Production2 from '../../../assets/alkenes/production2.png'
import alkenesScheme from '../../../assets/alkenes/alkenesScheme.svg'


export const AlkenesGuide = () => {
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
                {t('guide.alkenes.definitionText')}
              </p>
              <Typography variant='caption'>
                {t('guide.alkenes.definitionCredits')}
              </Typography>
            </Paper>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.empiricalFormula')}</Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n</sub></Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.structureFormulas')}</Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>2</sub> = CH<sub>2</sub></Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>2</sub> = CH &#8722; CH<sub>3</sub></Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant='h5'>{t('guide.isomerism')}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {t('guide.alkenes.isomerism')}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.physicalProperties')}</Typography>
            <p>
              {t('guide.alkenes.physicalProperties')}
            </p>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.production')}</Typography>
            <ol>
              <li>
                <p>{t('guide.alkenes.production.1')}</p>
                <img src={Production1} alt='Production1' style={{ width: '350px', maxWidth: '100%' }} />
              </li>
              <li>
                <p>{t('guide.alkenes.production.2')}</p>
                <img src={Production2} alt='Production2' style={{ width: '500px', maxWidth: '100%' }} />
              </li>
            </ol>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.applications')}</Typography>
            <ul>
              <li>{t('guide.alkenes.applications.explosives')}</li>
              <li>{t('guide.alkenes.applications.plastics')}</li>
              <li>{t('guide.alkenes.applications.medicine')}</li>
              <li>{t('guide.alkenes.applications.photoreagents')}</li>
              <li>{t('guide.alkenes.applications.dyes')}</li>
            </ul>
          </Box>

        </Box>
        <Box sx={{ width: '50%', pl: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <iframe title='pentene' src="/pentene.html?autorotate&no_social" width="100%" //temporary
              height="600px" frameBorder="0" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} ></iframe>
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.alkenes.modelPentene')}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <img src={alkenesScheme} alt="alkenesScheme" style={{ maxWidth: '100%' }} />
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.chemicalProperties')}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default AlkenesGuide