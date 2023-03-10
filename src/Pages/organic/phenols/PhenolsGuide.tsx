import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// import Structure from '../../../assets/phenols/structure.png'
// import StructureExample from '../../../assets/phenols/structureExample.png'
// import Isomer1 from '../../../assets/phenols/isomer1.png'
// import Isomer2 from '../../../assets/phenols/isomer2.png'
// import Production1 from '../../../assets/phenols/production1.png'
// import Production2 from '../../../assets/phenols/production2.png'
// import Production3 from '../../../assets/phenols/production3.png'
// import Production4 from '../../../assets/phenols/production4.png'
import phenolsScheme from '../../../assets/phenols/phenolsScheme.svg'


export const PhenolsGuide = () => {
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
                {t('guide.phenols.definitionText')}
              </p>
              <Typography variant='caption'>
                {t('guide.phenols.definitionCredits')}
              </Typography>
            </Paper>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.empiricalFormula')}</Typography>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub></Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.structureFormula')}</Typography>
            {/* <img src={Structure} alt='Structure' style={{ width: '110px', maxWidth: '100%' }} /> */}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.structureFormulas')}</Typography>
            {/* <img src={StructureExample} alt='StructureExample' style={{ width: '330px', maxWidth: '100%' }} /> */}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant='h5'>{t('guide.isomerism')}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <ol>
                {/* <li>
                  <Typography variant='h6'>{t('guide.alcohols.isomerism.1')}</Typography>
                  <img src={Isomer1} alt='Isomer1' style={{ width: '650px', maxWidth: '100%' }} />
                </li>
                <li>
                  <Typography variant='h6'>{t('guide.alcohols.isomerism.2')}</Typography>
                  <img src={Isomer2} alt='Isomer2' style={{ width: '500px', maxWidth: '100%' }} />
                </li> */}
              </ol>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.physicalProperties')}</Typography>
            <p>
              {t('guide.phenols.physicalProperties')}
            </p>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.production')}</Typography>
            <ol>
              {/* <li>
                <p>
                  {t('guide.phenols.production.1')}</p>
                <img src={Production1} alt='Production1' style={{ width: '500px', maxWidth: '100%' }} />
              </li>
              <li>
                <p>{t('guide.phenols.production.2')}</p>
                <img src={Production2} alt='Production2' style={{ width: '250px', maxWidth: '100%' }} />
              </li>
              <li>
                <p>{t('guide.phenols.production.3')}</p>
                <img src={Production3} alt='Production3' style={{ width: '425px', maxWidth: '100%' }} />
              </li>
              <li>
                <p>{t('guide.phenols.production.4')}</p>
                <img src={Production4} alt='Production4' style={{ width: '400px', maxWidth: '100%' }} />
              </li> */}
            </ol>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.applications')}</Typography>
            <ul>
              {/* <li>{t('guide.phenols.applications.textileIndustry')}</li>
              <li>{t('guide.phenols.applications.pharmaceuticalIndustry')}</li>
              <li>{t('guide.phenols.applications.solvents')}</li>
              <li>{t('guide.phenols.applications.plastics')}</li>
              <li>{t('guide.phenols.applications.catalysts')}</li>
              <li>{t('guide.phenols.applications.dyes')}</li>
              <li>{t('guide.phenols.applications.pesticides')}</li> */}
            </ul>
          </Box>

        </Box>
        <Box sx={{ width: '50%', pl: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <iframe title='phenol' src="/phenol.html?autorotate&no_social" width="100%" //temporary
              height="600px" frameBorder="0" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} ></iframe>
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.phenols.modelPhenol')}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <img src={phenolsScheme} alt="phenolsScheme" style={{ maxWidth: '100%' }} />
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.chemicalProperties')}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default PhenolsGuide