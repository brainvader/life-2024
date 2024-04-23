'use client'

import { CHOKE, DENTURE, GUM, STAIN } from '@/lib/definitions'
import styles from '../styles/oral-nutrition-info.module.css'
import { RadioGroup } from './ui/radio-group'
import { TextInputCell } from './ui/cell'
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
            <fieldset className={styles.grid}>
                <legend className={styles.label}>義歯の使用</legend>
                <RadioGroup name="denture" labels={DENTURE} />
            </fieldset>
            <fieldset className={styles.grid}>
                <legend className={styles.label}>むせ</legend>
                <RadioGroup name="choke" labels={CHOKE} />
            </fieldset>
            <fieldset className={styles.grid}>
                <legend className={styles.label}>歯の汚れ</legend>
                <RadioGroup name="stain" labels={STAIN} />
            </fieldset>
            <fieldset className={styles.grid}>
                <legend className={styles.label}>歯肉の腫れ・出血</legend>
                <RadioGroup name="gum" labels={GUM} />
            </fieldset>
        </div>
    )
}