import { Link } from 'react-router-dom'
import React from 'react'
import BGImg from "../../assets/img/bg/bdrc-bg.jpg";
import Bradcom from '../Bradcom/Main'
import Most from '../Menhome/Most';
import Skill from '../Menabout/Skill';
import Luxury from '../Menhome/Luxury';
import Latest from '../Menhome/Latest';
import News from '../Menabout/News';

const Main = () => {
  return (
    <>
        <main>
            <Bradcom title={"About"} subtitle={"Home"} newtitle={"About"}/>
            <Most/>
            <Skill/>
            <Luxury/>
            <Latest/>
            <News/>
        </main>
    </>
  )
}

export default Main