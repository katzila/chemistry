import { Box, Paper, Typography } from '@mui/material';
import React from 'react'

import Izomer1 from '../../../assets/alkanes/1.png'
import Izomer2 from '../../../assets/alkanes/2.png'
import Izomer3 from '../../../assets/alkanes/3.png'
import P1 from '../../../assets/alkanes/p1.png'
import P2 from '../../../assets/alkanes/p2.png'
import { useTranslation } from 'react-i18next';

// import Pentane from '../../../assets/alkanes/пентан.html'

const AlkanesGuide = () => {
  const [t] = useTranslation()

  return (
    <div
      role="tabpanel"
    >
      <Box sx={{ p: 2, display: 'flex' }}>
        <Box sx={{ width: '50%', pr: 2 }}>
          <Typography variant='h5'>{t('guide.definitionTitle')}</Typography>

          <Paper elevation={0} sx={{ p: 1, borderLeft: 'solid 3px #bbbbbb' }}>
            <p>
              {t('guide.alkanes.definitionText')}
            </p>
            <Typography variant='caption'>
              {t('guide.alkanes.definitionCredits')}
            </Typography>
          </Paper>


          <Typography variant='h5'>{t('guide.empiricalFormula')}</Typography>

          <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n+2</sub></Typography>


          <Typography variant='h5'>{t('guide.structureFormulas')}</Typography>
          <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>4</sub></Typography>
          <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>3</sub> &#8722; CH<sub>3</sub></Typography>

          <Typography variant='h5'>{t('guide.isomerism')}</Typography>

          <Typography variant='h6'>{t('guide.branchingCarbonSkeleton')}</Typography>

          <img src={Izomer1} alt='Izomer1' style={{ maxWidth: '315px' }} />

          <img src={Izomer2} alt='Izomer2' style={{ maxWidth: '250px' }} />

          <img src={Izomer3} alt='Izomer3' style={{ maxWidth: '180px' }} />

          <Typography variant='h5'>{t('guide.physicalProperties')}</Typography>

          <p>
            Первые четыре представителя алканов являются газами. Начиная с пентана - жидкости,
            алканы с числом атомов углерода 16 и более - твердые вещества. Они не растворимы в воде,
            хорошо растворимы в органических растворителях, их плотности ниже плотности воды.
            Неразветвленные алканы имеют более высокие температуры кипения и плавления, чем разветвленные.
          </p>


          <Typography variant='h5'>{t('guide.production')}</Typography>
          <ol>
            <li>
              <p>{'Гидрирование непредельных углеводородов (t, катализаторы: Ni, Pt, Pd):'}</p>
              <img src={P1} alt='P1' style={{ maxWidth: '350px' }} />
            </li>
            <li>
              <p>{'На основе "синтез-газа":'}</p>
              <img src={P2} alt='P2' style={{ maxWidth: '500px' }} />
            </li>
          </ol>


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
        <Box sx={{ width: '50%', pl: 2 }}>
          <iframe title='pentane' src="/пентан.html?autorotate&no_social" width="100%" //temporary
            height="600px" frameBorder="0" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} ></iframe>
        </Box>
      </Box>
    </div>
  )
}

export default AlkanesGuide