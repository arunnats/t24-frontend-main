import React from 'react';
import styles from './Pacman.module.css';

const Pacman = () => {
  return (
    <div className={styles.pacman}>
      <div className={styles.pacmanTop}></div>
      <div className={styles.pacmanBottom}></div>
      <div className={styles.feed}></div>
    </div>
  );
};

export default Pacman;
