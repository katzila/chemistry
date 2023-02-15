import { Box, Paper, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';

import P1 from '../../../assets/alkenes/p1.png'
import P2 from '../../../assets/alkenes/p2.png'
import alkanesScheme from '../../../assets/alkanes/alkanesScheme.svg'

// import Pentane from '../../../assets/alkanes/пентан.html'

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
              <Typography variant='h6'>Разветвление углеродного скелета (см. Алканы)</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.physicalProperties')}</Typography>
            <p>
              Первые четыре представителя алканов являются газами. Начиная с пентана - жидкости,
              алканы с числом атомов углерода 16 и более - твердые вещества. Они не растворимы в воде,
              хорошо растворимы в органических растворителях, их плотности ниже плотности воды.
              Неразветвленные алканы имеют более высокие температуры кипения и плавления, чем разветвленные.
            </p>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.production')}</Typography>
            <ol>
              <li>
                <p>{'Гидрирование непредельных углеводородов (t, катализаторы: Ni, Pt, Pd):'}</p>
                <img src={P1} alt='P1' style={{ width: '350px', maxWidth: '100%' }} />
              </li>
              <li>
                <p>{'На основе "синтез-газа":'}</p>
                <img src={P2} alt='P2' style={{ width: '500px', maxWidth: '100%' }} />
              </li>
            </ol>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography variant='h5'>{t('guide.applications')}</Typography>
            <ul>
              <li>Фреоны </li>
              <li>Растворители</li>
              <li>"Синтез-газ"</li>
              <li>Сажа, резина</li>
              <li>Моющие средства</li>
              <li>Топливо</li>
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
            <img src={alkanesScheme} alt="alkanesScheme" style={{ maxWidth: '100%' }} />
            <Typography variant='subtitle1' fontWeight='bold' >{t('guide.chemicalProperties')}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default AlkenesGuide