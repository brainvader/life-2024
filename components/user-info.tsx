import { AGE } from "@/lib/definitions"
import { RadioGroup } from "./ui/radio-group"

import styles from "../styles/user-info.module.css"

export default function UserInfo() {
    return (
        <div className={styles.container}>
            <label className={styles.grid}>
                <span className={styles.label}>氏名:</span>
                <input type="text" />
            </label>
            <label className={styles.grid}>
                <span className={styles.label}>生年月日</span>
                <input type="date" id="birthday" name="birthday" />
            </label>
            <label className={styles.grid}>
                <span className={styles.label}>保険者番号</span>
                <input type="text" />
            </label>
            <fieldset className={styles.grid}>
                <legend className={styles.label}>性別</legend>
                <RadioGroup name="sex" labels={AGE} />
            </fieldset>
            <label className={styles.grid}>
                <span className={styles.label}>被保険者番号</span>
                <input type="text" />
            </label>
        </div>
    )
}