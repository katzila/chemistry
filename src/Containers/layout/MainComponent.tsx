import React, { ReactNode } from 'react'

import Header from './Header';


type Props = {
  children?: ReactNode
}


const MainComponent = (props: Props) => {
  // const [t] = useTranslation();


  return (
    <div id='app' >
      <Header />

      {props.children}
    </div>
  )
}

export default MainComponent