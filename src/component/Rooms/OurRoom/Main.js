import React from 'react'
import Bredcom from '../../Bradcom/Main'
import First from '../../Menrooms/Menourrooms/First';
import Luxury from '../../Menhome/Luxury';
import Book from '../../Menhome/Book';
import Take from '../../Menhome/Take';

const Main = () => {

  return (
    <>
        <main>
           <Bredcom title={"Our Menu"} subtitle={"Home"} newtitle={"Our Menu"}/>
           <First/>
           <Luxury/>
           <Book/>
           <Take/>
        </main>
    </>
  )
}

export default Main