// File: pages/index.js

import styles from '../style.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jenis-jenis penyakit mental</h1>
      <div className={styles.cardContainer}>
        {/* Card 1: Bipolar */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Bipolar</h2>
          <p className={styles.description}>
            Kondisi pikiran yang menyebabkan perubahan suasana hati dan sikap secara tiba-tiba.
          </p>
          <ul className={styles.list}>
            <li>merasa gembira dan sedih berlebih</li>
            <li>emosi mudah terpancing</li>
            <li>Berbicara sangat cepat</li>
          </ul>
        </div>

        {/* Card 2: Skizofrenia */}
        <div className={`${styles.card} ${styles.cardHighlight}`}>
          <h2 className={styles.cardTitle}>Skizofrenia</h2>
          <p className={styles.description}>
            Gangguan mental kronis yang menyerang menyebabkan halusinasi, delusi dan perilaku ekstrim.
          </p>
          <ul className={styles.list}>
            <li>emosi datar dan sulit ditebak</li>
            <li>meracau saat berbicara</li>
            <li>sulit membedakan pikiran dan kenyataan</li>
          </ul>
        </div>

        {/* Card 3: Depresi */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Depresi</h2>
          <p className={styles.description}>
            Gangguan suasana hati yang dapat berpengaruh terhadap pola pikir dan perasaan.
          </p>
          <ul className={styles.list}>
            <li>Sering merasa sedih</li>
            <li>merasa tidak berguna</li>
            <li>menyalahkan diri sendiri</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
