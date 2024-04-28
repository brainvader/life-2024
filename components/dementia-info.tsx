'use client'

import { SelectCell } from './ui/cell';
import { ChangeEvent, useContext } from 'react';
import { UserContext } from '@/lib/state/user-provider';
import { Dementia } from '@/lib/life';

export const DEMENTIA: Readonly<Dementia[]> = ["アルツハイマー病", "血管性認知症", "レビー小体病", "その他"]

export default function DementiaInfo() {
    const { user, setUser } = useContext(UserContext)

    const selectDementia = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Dementia;

        setUser({
            ...user,
            ["認知症の診断"]: {
                ...user["認知症の診断"],
                ["診断名"]: newOption
            }
        })
    }

    const setdementiaCause = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        setUser({
            ...user,
            ["認知症の診断"]: {
                ...user["認知症の診断"],
                ["その他"]: newValue
            }
        })
    }

    return (
        <div className="grid grid-cols-4 border-4 border-solid border-black box-border">
            <SelectCell
                id='dementia'
                labelText='認知症'
                value={user["認知症の診断"]["診断名"]}
                options={[...DEMENTIA]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 2, row: 1 }
                }}
                onChange={(event) => { selectDementia(event) }}
            />
            <div className="col-span">
                <input className="w-full text-center"
                    defaultValue={user["認知症の診断"]["その他"]}
                    placeholder="病名"
                    onChange={(event) => { setdementiaCause(event) }}
                    disabled={user["認知症の診断"]["診断名"] === "その他" ? false : true}
                />
            </div>
            {/* {user["認知症の診断"]['診断名'] === "その他" ?
                <div className="col-span">
                    <input className="w-full text-center"
                        defaultValue={user["認知症の診断"]["その他"]} placeholder="病名" onChange={(event) => { setdementiaCause(event) }} />
                </div>
                : <></>} */}
        </div>
    )
}