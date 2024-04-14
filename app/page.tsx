import styles from '../styles/page.module.css'

import { CareLevel } from "@/components/care-level";

export default function Home() {
  return (
    <main className={styles.index}>
      <h1>科学的介護推進に関する評価（通所・居住サービス）</h1>
      <section>
        <h2>【基本情報】</h2>
        <CareLevel title="要介護度" />
      </section>
    </main>
  );
}
