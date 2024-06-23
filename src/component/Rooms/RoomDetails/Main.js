import React from 'react'
import Bredcom from '../../Bradcom/Main';
import First from '../../Menrooms/Menroomdeatils/First';

const Main = () => {
  return (
    <>
        <main>
            <Bredcom title={"Package Details"} subtitle={"Home"} newtitle={"Services Details"} />
            <First/>
        </main>
    </>
  )
}

export default Main