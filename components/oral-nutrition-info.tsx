'use client'

import { CHOKE, Choke, DENTURE, Denture, GUM, Gum, STAIN, Stain } from '@/lib/definitions'
import { SelectCell, TextInputCell } from './ui/cell'
import { ChangeEvent, useContext } from 'react';
import { UserContext } from '@/lib/state/user-provider';

export default function OralNutritionInfo() {
    const { user, setUser } = useContext(UserContext);

    const setHeight = (event: ChangeEvent<HTMLInputElement>) => {
        const newHeight = Number(event.target.value);

        setUser({
            ...user,
            height: newHeight,
        })
    }

    const setWeight = (event: ChangeEvent<HTMLInputElement>) => {
        const newWegith = Number(event.target.value);

        setUser({
            ...user,
            weight: newWegith,
        })
    }

    const selectDenture = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Denture;

        setUser({
            ...user,
            denture: newOption
        })
    }

    const selectChoke = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Choke;

        setUser({
            ...user,
            choke: newOption
        })
    }

    const selectStain = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Stain;

        setUser({
            ...user,
            stain: newOption
        })
    }

    const selectGum = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Gum;

        setUser({
            ...user,
            gum: newOption
        })
    }

    return (
        <div className="grid grid-cols-4 grid-rows-3 border-4 border-solid border-black box-border">
            <TextInputCell
                type='text'
                id='height'
                labelText='身長'
                defaultValue={`${user.height}`}
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
                defaultValue={`${user.weight}`}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { }}
            />
            <SelectCell
                id='denture'
                labelText='義歯の使用'
                options={DENTURE}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { selectDenture(event) }}
            />

            <SelectCell
                id='choke'
                labelText='むせ'
                options={CHOKE}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { selectChoke(event) }}
            />

            <SelectCell
                id='stain'
                labelText='歯の汚れ'
                options={CHOKE}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { selectStain(event) }}
            />

            <SelectCell
                id='stain'
                labelText='歯肉の腫れ・出血'
                options={GUM}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 1, row: 1 }
                }}
                onChange={(event) => { selectGum(event) }}
            />
        </div>
    )
}