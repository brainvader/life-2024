'use client'

import { SelectCell } from './ui/cell';
import { ChangeEvent, useContext } from 'react';
import { UserContext } from '@/lib/state/user-provider';
import { Communication, Discharge, Rehabilitation, WakeUp } from '@/lib/life';
// import { Communication, COMMUNICATION, Discharge, DISCHARGE, Rehabilitation, REHABILITATION, WAKE_UP, WakeUp } from '@/lib/definitions';

const COMMUNICATION: Readonly<Communication[]> = ["自分から挨拶する、話しかける", "挨拶、呼びかけに対して返答や笑顔が見られる", "反応がない"]
const WAKE_UP: Readonly<WakeUp[]> = ["いつも定時に起床している", "起こさないと起床しないことがある", "自分から起床することはない"]
const DISCHARGE: Readonly<Discharge[]> = ["いつも自ら便意尿意を伝える、あるいは自分で排尿、排便を行う", "時々、尿意便意を伝える", "排便に全く関心がない"]
const REHABILITATION: Readonly<Rehabilitation[]> = ["自らリハビリに向かう、活動を求める", "促されて向かう", "拒否、無関心"]

export default function VitalityIndex() {
    const { user, setUser } = useContext(UserContext)

    const selectCommunication = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Communication;

        setUser({
            ...user,
            ["意思疎通"]: newOption
        })
    }

    const selectWakeup = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as WakeUp;

        setUser({
            ...user,
            ["起床"]: newOption
        })
    }

    const selectDischarge = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Discharge;

        setUser({
            ...user,
            ["排泄"]: newOption
        })
    }

    const selectRehabilitation = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Rehabilitation;

        setUser({
            ...user,
            ["リハビリ"]: newOption
        })
    }

    return (
        <div className="grid grid-cols-4 grid-rows-4 box-border">
            <SelectCell
                id='communiaction'
                labelText='意思疎通'
                options={[...COMMUNICATION]}
                value={user["意思疎通"]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { selectCommunication(event) }}
            />

            <SelectCell
                id='wake-up'
                labelText='起床'
                options={[...WAKE_UP]}
                value={user["起床"]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { selectWakeup(event) }}
            />

            <SelectCell
                id='discharge'
                labelText='排泄'
                options={[...DISCHARGE]}
                value={user["排泄"]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { selectDischarge(event) }}
            />

            <SelectCell
                id='rehabilitation'
                labelText='リハビリ・活動'
                options={[...REHABILITATION]}
                value={user["リハビリ"]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { selectRehabilitation(event) }}
            />
        </div>
    )
}