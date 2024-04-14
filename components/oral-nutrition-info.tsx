import { CHOKE, DENTURE, GUM, STAIN } from '@/lib/definitions'
import styles from '../styles/oral-nutrition-info.module.css'
import { RadioGroup } from './ui/radio-group'

export default function OralNutritionInfo() {
    return (
        <div className={styles.container}>
            <label className={styles.grid}>
                <span className={styles.label}>身長</span>
                <input type="text" />
            </label>
            <label className={styles.grid}>
                <span className={styles.label}>体重</span>
                <input type="text" />
            </label>
            <fieldset className={styles.grid}>
                <legend className={styles.label}>義歯の使用</legend>
                <RadioGroup name="denture" labels={DENTURE} />
            </fieldset>
            <fieldset className={styles.grid}>
                <legend className={styles.label}>むせ</legend>
                <RadioGroup name="choke" labels={CHOKE} />
            </fieldset>
            <fieldset className={styles.grid}>
                <legend className={styles.label}>歯の汚れ</legend>
                <RadioGroup name="stain" labels={STAIN} />
            </fieldset>
            <fieldset className={styles.grid}>
                <legend className={styles.label}>歯肉の腫れ・出血</legend>
                <RadioGroup name="gum" labels={GUM} />
            </fieldset>
        </div>
    )
}