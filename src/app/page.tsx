import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
          <div className={styles.center__grid}>
            <div className={styles.logo}>
                <img src="/tres_logo.svg" />
            </div>
    
            <div className={styles.dwt}>
                <p className={styles.saving}>tostando</p>
            </div>
        </div>
     
    </main>
  );
}
