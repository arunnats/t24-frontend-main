import React from 'react'
import Dinosaur from './components/dinosaur'
import Marque from './components/marque'
import Torch from './components/torch'
import styles from ".//page.module.css"

function Page() {
  return (
    <section className={styles.outercontainer}>
      <Torch/>
      <Marque/>
      <Dinosaur/>
    </section>
  )
}

export default Page
