import React from 'react'
import Dinosaur from './components/dinosaur'
import Marque from './components/marque'
import styles from ".//page.module.css"

function Page() {
  return (
    <section className={styles.outercontainer}>
      <Marque/>
      <Dinosaur/>
    </section>
  )
}

export default Page
