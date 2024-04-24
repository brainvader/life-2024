'use client'

import { SelectCell } from './ui/cell';
import { ChangeEvent, useContext } from 'react';
import { UserContext } from '@/lib/state/user-provider';
import { Communication, COMMUNICATION, Discharge, DISCHARGE, Rehabilitation, REHABILITATION, WAKE_UP, WakeUp } from '@/lib/definitions';

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

    const selectDischarge = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Discharge;

        setUser({
            ...user,
            vitalityIndex: {
                ...user.vitalityIndex,
                discharge: newOption
            }
        })
    }

    const selectRehabilitation = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Rehabilitation;

        setUser({
            ...user,
            vitalityIndex: {
                ...user.vitalityIndex,
                rehabilitation: newOption
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

            <SelectCell
                id='discharge'
                labelText='排泄'
                options={DISCHARGE}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { selectDischarge(event) }}
            />

            <SelectCell
                id='rehabilitation'
                labelText='リハビリ・活動'
                options={REHABILITATION}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { selectRehabilitation(event) }}
            />
        </div>
    )
}