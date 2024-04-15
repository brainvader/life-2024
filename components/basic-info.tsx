import { RadioGroup } from "./ui/radio-group";

import styles from "../styles/basic-info.module.css"
import { CARE_LEVELS, EVALUATION_POINT, INDEPENDENCE_LEVEL_WITH_DEMENTIA, INDEPENDENCE_LEVEL_WITH_DISABILITIES } from "@/lib/definitions";

export default function BasicInfo() {
    return (
        <div className={styles.container}>
            <fieldset className={styles.grid}>
                <legend className={styles.label}>要介護度</legend>
                <RadioGroup name='care level' labels={CARE_LEVELS} />
            </fieldset>

            <fieldset className={styles.grid}>
                <legend className={styles.label}>障害高齢者の日常生活自立度</legend>
                <RadioGroup name='independence disabilities' labels={INDEPENDENCE_LEVEL_WITH_DISABILITIES} />
            </fieldset>

            <fieldset className={styles.grid}>
                <legend className={styles.label}>認知症高齢者の日常生活自立度</legend>
                <RadioGroup name='independence dementia' labels={INDEPENDENCE_LEVEL_WITH_DEMENTIA} />
            </fieldset>

            <label className={styles.grid}>
                <span className={styles.label}>生年月日</span>
                <input type="date" id="birthday" name="birthday" />
            </label>

            <fieldset className={styles.grid}>
                <legend className={styles.label}>評価時点</legend>
                <RadioGroup name='evaluation point' labels={EVALUATION_POINT} />
            </fieldset>
        </div >
    )
}