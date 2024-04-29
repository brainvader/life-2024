'use client'

// import { CHOKE, Choke, DENTURE, Denture, GUM, Gum, STAIN, Stain } from '@/lib/definitions'
import { SelectCell, TextInputCell } from './ui/cell'
import { ChangeEvent, useContext } from 'react';
import { UserContext } from '@/lib/state/user-provider';
import { YesNo } from '@/lib/life';

export const YES_NO: Readonly<YesNo[]> = ["あり", "なし", ""];

export default function OralNutritionInfo() {
    const { user, setUser } = useContext(UserContext);

    const setHeight = (event: ChangeEvent<HTMLInputElement>) => {
        const newHeight = Number(event.target.value);

        setUser({
            ...user,
            ["身長"]: `${newHeight}`,
        })
    }

    const setWeight = (event: ChangeEvent<HTMLInputElement>) => {
        const newWegith = Number(event.target.value);

        setUser({
            ...user,
            ["体重"]: `${newWegith}`,
        })
    }

    const selectDenture = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as YesNo;

        setUser({
            ...user,
            ["義歯の使用"]: newOption
        })
    }

    const selectChoke = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as YesNo;

        setUser({
            ...user,
            ["むせ"]: newOption
        })
    }

    const selectStain = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as YesNo;

        setUser({
            ...user,
            ["歯の汚れ"]: newOption
        })
    }

    const selectGum = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as YesNo;

        setUser({
            ...user,
            ["歯肉の腫れ出血"]: newOption
        })
    }

    return (
        <div className="grid grid-cols-4 grid-rows-3 box-border">
            <TextInputCell
                type='text'
                id='height'
                labelText='身長'
                defaultValue={`${user["身長"]}`}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { setHeight(event) }}
            />
            <TextInputCell
                type='text'
                id='weight'
                labelText='体重'
                defaultValue={`${user["体重"]}`}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { setWeight(event) }}
            />
            <SelectCell
                id='denture'
                labelText='義歯の使用'
                value={user["義歯の使用"]}
                options={[...YES_NO]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { selectDenture(event) }}
            />

            <SelectCell
                id='choke'
                labelText='むせ'
                value={user["むせ"]}
                options={[...YES_NO]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { selectChoke(event) }}
            />

            <SelectCell
                id='stain'
                labelText='歯の汚れ'
                value={user["歯の汚れ"]}
                options={[...YES_NO]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { selectStain(event) }}
            />

            <SelectCell
                id='stain'
                labelText='歯肉の腫れ出血'
                value={user["歯肉の腫れ出血"]}
                options={[...YES_NO]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { selectGum(event) }}
            />
        </div>
    )
}