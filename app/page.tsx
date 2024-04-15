import UserInfo from '@/components/user-info';
import styles from '../styles/page.module.css'
import BasicInfo from '@/components/basic-info';
import OralNutritionInfo from '@/components/oral-nutrition-info';
import VitalityIndex from '@/components/vitality-index';

export default function Home() {
  return (
    <main className={styles.index}>
      <h1>科学的介護推進に関する評価（通所・居住サービス）</h1>
      <section className={styles.section}>
        <h2>【利用者情報】</h2>
        <UserInfo />
      </section>

      <section className={styles.section}>
        <h2>【基本情報】</h2>
        <BasicInfo />
      </section>

      <section className={styles.section}>
        <h2>【口腔・栄養】</h2>
        <OralNutritionInfo />
      </section>

      <section className={styles.section}>
        <h2>【Vitality Index】</h2>
        <VitalityIndex />
      </section>
    </main>
  );
}
