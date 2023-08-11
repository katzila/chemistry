import { Box, Paper, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';

import Isomer1 from '../../../assets/alcohols/isomer1.png'
import Isomer2 from '../../../assets/alcohols/isomer2.png'
import Isomer3 from '../../../assets/alcohols/isomer3.png'
import Isomer4 from '../../../assets/alcohols/isomer4.png'
import Production1 from '../../../assets/alcohols/production1.png'
import Production2 from '../../../assets/alcohols/production2.png'
import Production3 from '../../../assets/alcohols/production3.png'
import Production4 from '../../../assets/alcohols/production4.png'
import Production5 from '../../../assets/alcohols/production5.png'
import alcoholsScheme from '../../../assets/alcohols/alcoholsScheme.svg'


export const AlcoholsGuide = () => {
  const [t] = useTranslation()

  const empiricalFormula1 = <b>ROH</b>
  const empiricalFormula2 = <b>C<sub>n</sub>H<sub>2n+1</sub>OH</b>
  const empiricalFormula3 = <b>C<sub>n</sub>H<sub>2n+2</sub>O</b>

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
                {t('guide.alcohols.definitionText')}
              </p>
              <Typography variant='caption'>
                {t('guide.alcohols.definitionCredits')}
              </Typography>
            </Paper>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.empiricalFormula')}</Typography>
            <Typography variant='h5' sx={{ fontStyle: 'italic' }}>
              {empiricalFormula1} {t('common.or')} {empiricalFormula2} {t('common.or')} {empiricalFormula3}
            </Typography>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant='h5'>{t('guide.isomerism')}</Typography>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <ol>
                <li>
                  <Typography variant='h6'>{t('guide.alcohols.isomerism.1')}</Typography>
                  <img src={Isomer1} alt='Isomer1' style={{ width: '400px', maxWidth: '100%' }} />
                </li>
                <li>
                  <Typography variant='h6'>{t('guide.alcohols.isomerism.2')}</Typography>
                  <img src={Isomer2} alt='Isomer2' style={{ width: '400px', maxWidth: '100%' }} />
                </li>
                <li>
                  <Typography variant='h6'>{t('guide.alcohols.isomerism.3')}</Typography>
                  <img src={Isomer3} alt='Isomer3' style={{ width: '400px', maxWidth: '100%' }} />
                </li>
                <li>
                  <Typography variant='h6'>{t('guide.alcohols.isomerism.4')}</Typography>
                  <img src={Isomer4} alt='Isomer4' style={{ width: '500px', maxWidth: '100%' }} />
                </li>
              </ol>
            </Box>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.physicalProperties')}</Typography>
            <p>
              {t('guide.alcohols.physicalProperties')}
            </p>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.production')}</Typography>
            <ol>
              <li>
                <p>
                  {t('guide.alcohols.production.1')}</p>
                <img src={Production1} alt='Production1' style={{ width: '500px', maxWidth: '100%' }} />
              </li>
              <li>
                <p>{t('guide.alcohols.production.2')}</p>
                <img src={Production2} alt='Production2' style={{ width: '500px', maxWidth: '100%' }} />
              </li>
              <li>
                <p>{t('guide.alcohols.production.3')}</p>
                <img src={Production3} alt='Production3' style={{ width: '400px', maxWidth: '100%' }} />
              </li>
              <li>
                <p>{t('guide.alcohols.production.4')}</p>
                <img src={Production4} alt='Production4' style={{ width: '400px', maxWidth: '100%' }} />
              </li>
              <li>
                <p>{t('guide.alcohols.production.5')}</p>
                <img src={Production5} alt='Production5' style={{ width: '350px', maxWidth: '100%' }} />
              </li>
            </ol>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.applications')}</Typography>
            <ul>
              <li>{t('guide.alcohols.applications.foodIndustry')}</li>
              <li>{t('guide.alcohols.applications.perfumeryCosmeticsHouseholdChemicals')}</li>
              <li>{t('guide.alcohols.applications.medicine')}</li>
              <li>{t('guide.alcohols.applications.fuel')}</li>
              <li>{t('guide.alcohols.applications.chemicalReagent')}</li>
            </ul>
          </Box>

        </Box>
        <Box component="div" sx={{ width: '50%', pl: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <iframe title='ethanol' src="/ethanol.html?autorotate&no_social" width="100%" //temporary
              height="600px" frameBorder="0" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} ></iframe>
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.alcohols.model')}</Typography>
          </Box>

          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <img src={alcoholsScheme} alt="alcoholsScheme" style={{ maxWidth: '100%' }} />
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.chemicalProperties')}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default AlcoholsGuide