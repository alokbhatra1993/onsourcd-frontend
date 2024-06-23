import React from 'react'
import Bredcom from '../../Bradcom/Main'
import Price from '../../Menpages/Menpricing/Price'
import Take from '../../Menhome/Take'
import Testimonial from '../../Menhome/Testimonial'
import Brand from '../../Menhome/Brand'

const Main = () => {

  return (
    <>
        <main>
            <Bredcom title={"Pricing"} subtitle={"Home"} newtitle={"Pricing"}/>
            <Price/>
            <Take/>
            <Testimonial/>
            <Brand/>
        </main>
    </>
  )
}

export default Main