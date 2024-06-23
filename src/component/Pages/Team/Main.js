import React  from 'react'
import Bradcom from '../../Bradcom/Main'
import Newsletter from '../../Menpages/Menfaq/Newsletter';
import First from '../../Menpages/Menteem/First';
import Skills from '../../Menpages/Menteem/Skills';

const Main = () => {
  return (
    <>
        <main>
            <Bradcom title={"Team"} subtitle={"Home"} newtitle={"Team"}/>
            <First/>
            <Skills/>
            <Newsletter/>
        </main>
    </>
  )
}

export default Main