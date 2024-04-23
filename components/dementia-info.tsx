'use client'

import { SelectCell } from './ui/cell';
import { ChangeEvent, useContext } from 'react';
import { UserContext } from '@/lib/state/user-provider';
import { Communication, COMMUNICATION, Dementia, DEMENTIA, Discharge, DISCHARGE, Rehabilitation, REHABILITATION, WAKE_UP, WakeUp } from '@/lib/definitions';

export default function DementiaInfo() {
    const { user, setUser } = useContext(UserContext)

    const selectDementia = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Dementia;

        setUser({
            ...user,
            dementia: {
                ...user.dementia,
                type: newOption
            }
        })
    }

    const setdementiaCause = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        setUser({
            ...user,
            dementia: {
                ...user.dementia,
                cause: newValue
            }
        })
    }

    return (
        <div className="grid grid-cols-4 border-4 border-solid border-black box-border">
            <SelectCell
                id='dementia'
                labelText='認知症'
                defaultValue={user.dementia.type}
                options={DEMENTIA}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 2, row: 1 }
                }}
                onChange={(event) => { selectDementia(event) }}
            />
            {user.dementia.type === "その他" ?
                <div className="col-span">
                    <input className="w-full text-center"
                        defaultValue={user.dementia.cause} placeholder="病名" onChange={(event) => { setdementiaCause(event) }} />
                </div>
                : <></>}
        </div>
    )
}