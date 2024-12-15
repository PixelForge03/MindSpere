import React from "react";
import styles from "../style.module.css";

const TreatmentSection = () => {
  return (
    <section className={styles.treatmentSection}>
      <h2 className={styles.sectionTitle}>Penanganan nya</h2>
      <p className={styles.description}>
        Penangan beberapa penyakit mental ada beberapa cara yaitu mengenali
        atau merasakan perubahan sikap kita secara drastis, jika teman” sudah
        merasakan gejala yang mendekati gangguan kesehatan mental, maka teman”
        harus konsultasikan ke psikolog atau psikiater. Jadi jangan self diagnose dulu ya,
        ada baiknya kita konsultasikan ke spesialisnya,
        <em> SEMANGAT YA BUAT YANG LAGI MENGALAMI HAL INI DAN TOLONG BERTAHAN LEBIH LAMA YA ^_^</em>
      </p>
    </section>
  );
};

export default TreatmentSection;
