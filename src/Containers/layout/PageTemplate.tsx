import React, { useEffect, useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { compoundName } from '../../types';
import GuideTemplate from './GuideTemplate';
import TasksTemplate from './TasksTemplate';


interface PageTemplateProps {
  compound: compoundName
}

const PageTemplate = (props: PageTemplateProps) => {
  const { compound } = props
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsTab = searchParams.get('tab') === 'tasks' ? 'tasks' : 'guide'
  const [value, setValue] = useState(searchParamsTab)
  const [t] = useTranslation()

  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setSearchParams({ tab: newValue })
  }

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab === 'tasks' || tab === 'guide') {
      setValue(tab)
    }
  }, [searchParams])

  return (
    <Box component="div" sx={{ width: '100%' }}>
      <Box component="div" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth'>
          <Tab label={t(`navigation.${compound}.handbook`)} value='guide' />
          <Tab label={t(`navigation.${compound}.tasks`)} value='tasks' />
        </Tabs>
      </Box>
      {value === 'guide' && <GuideTemplate compound={compound} />}
      {value === 'tasks' && <TasksTemplate compound={compound} />}
    </Box>
  )
}

export default PageTemplate