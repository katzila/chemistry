import { Box, Tab, Tabs } from '@mui/material';
import React, { ReactNode, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';


interface PageTemplateProps {
  Guide: ReactNode
  Tasks: ReactNode
  GuideLabel: string
  TasksLabel: string
}

const PageTemplate = (props: PageTemplateProps) => {
  const { Guide, GuideLabel, Tasks, TasksLabel } = props
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsTab = searchParams.get('tab') === 'tasks' ? 'tasks' : 'guide'
  const [value, setValue] = useState(searchParamsTab)

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
          <Tab label={GuideLabel} value='guide' />
          <Tab label={TasksLabel} value='tasks' />
        </Tabs>
      </Box>
      {value === 'guide' && Guide}
      {value === 'tasks' && Tasks}
    </Box>
  )
}

export default PageTemplate