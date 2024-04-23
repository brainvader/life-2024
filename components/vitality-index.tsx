'use client'

import { SelectCell } from './ui/cell';
import { ChangeEvent, useContext } from 'react';
import { UserContext } from '@/lib/state/user-provider';
import { Communication, COMMUNICATION, WAKE_UP, WakeUp } from '@/lib/definitions';

export default function VitalityIndex() {
    const { user, setUser } = useContext(UserContext)

    const selectCommunication = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Communication;

        setUser({
            ...user,
            vitalityIndex: {
                ...user.vitalityIndex,
                communication: newOption
            }
        })
    }

    const selectWakeup = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as WakeUp;

        setUser({
            ...user,
            vitalityIndex: {
                ...user.vitalityIndex,
                wakeUp: newOption
            }
        })
    }

    return (
        <div className="grid grid-cols-4 grid-rows-3 border-4 border-solid border-black box-border">
            <SelectCell
                id='communiaction'
                labelText='意思疎通'
                options={COMMUNICATION}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { selectCommunication(event) }}
            />

            <SelectCell
                id='wake-up'
                labelText='起床'
                options={WAKE_UP}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { selectWakeup(event) }}
            />

            {/* <div className={styles.label}>
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
            </div> */}
        </div>
    )
}