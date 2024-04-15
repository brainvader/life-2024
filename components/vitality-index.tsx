import { COMMUNICATION } from '@/lib/data/vitality-index';
import styles from '../styles/vitality-index.module.css';

type SelectProps = {
    id: string,
    name: string,
    label: string,
    options: Readonly<string>[]
}

function Select({ id, name, label, options }: SelectProps) {
    const optionList = () => {
        return (
            options.map((option, index) => {
                return <option key={index} value={option} >{option}</option>
            })
        )
    }
    return (
        <>
            <div className={styles.label}>
                <label htmlFor={id}>{label}</label>
            </div>
            <div className={styles.inputField}>
                <select id={id} name={name} >
                    {optionList()}
                </select>
            </div>
        </>

    )
}

export default function VitalityIndex() {
    return (
        <div className={styles.container}>
            <Select
                id='communication-select'
                name='communication'
                label='意思疎通'
                options={COMMUNICATION} />

            <div className={styles.label}>
                <label htmlFor="wake-up-select">起床</label>
            </div>
            <div className={styles.inputField}>
                <select name="起床" id="wake-up-select">
                    <option value="いつも定時に起床している">いつも定時に起床している </option>
                    <option value="起こさないと起床しないことがある">起こさないと起床しないことがある</option>
                    <option value="自分から起床することはない">自分から起床することはない</option>
                </select>
            </div>

            <div className={styles.label}>
                <label htmlFor="excretion-select">排泄</label>
            </div>
            <div className={styles.inputField}>
                <select id="excretion-select" name="排泄" >
                    <option value="いつも自ら便意尿意を伝える、あるいは自分で排尿、排便を行う">
                        いつも自ら便意尿意を伝える、あるいは自分で排尿、排便を行う
                    </option>
                    <option value="時々、尿意便意を伝える">
                        時々、尿意便意を伝える
                    </option>
                    <option value="排泄に全く関心がない">
                        排泄に全く関心がない
                    </option>
                </select>
            </div>

            <div className={styles.label}>
                <label htmlFor="activity-select">リハビリ・活動</label>
            </div>
            <div className={styles.inputField}>
                <select id="activity-select" name="activity" >
                    <option value="自らリハビリに向かう、活動を求める">
                        自らリハビリに向かう、活動を求める
                    </option>
                    <option value="促されて向かう">
                        促されて向かう
                    </option>
                    <option value="拒否、無関心">
                        拒否、無関心
                    </option>
                </select>
            </div>
        </div>
    )
}