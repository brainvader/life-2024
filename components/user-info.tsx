'use client'

import { SEX, Sex } from "@/lib/definitions"
import { UserContext } from "@/lib/state/user-provider"
import { ChangeEvent, useContext } from "react"
import { SelectCell, TextInputCell } from "./ui/cell";


export default function UserInfo() {
    const { user, setUser } = useContext(UserContext);

    const { yyyy, mm, dd } = user.birthday;

    const setName = (event: ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;

        setUser({
            ...user,
            name: newName,
        })
    }

    const setKana = (event: ChangeEvent<HTMLInputElement>) => {
        const newKana = event.target.value;

        setUser({
            ...user,
            kana: newKana,
        })
    }

    const setBirthday = (event: ChangeEvent<HTMLInputElement>) => {
        const newBirthday = event.target.value;
        const [yyyy, mm, dd] = newBirthday.split("-")

        setUser({
            ...user,
            birthday: {
                yyyy: yyyy,
                mm: mm,
                dd: dd
            },
        })
    }

    const selectSex = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Sex;

        setUser({
            ...user,
            sex: newOption
        })
    }

    const setInsurerNumber = (event: ChangeEvent<HTMLInputElement>) => {
        const newInsurerNumber = event.target.value;

        setUser({
            ...user,
            insurerNumber: newInsurerNumber,
        })
    }

    const setInsuredNumber = (event: ChangeEvent<HTMLInputElement>) => {
        const newInsuredNumber = event.target.value;

        setUser({
            ...user,
            insuredNumber: newInsuredNumber,
        })
    }

    return (
        <div className="grid grid-cols-4 grid-rows-3 border-4 border-solid border-black box-border">
            {/* first row */}
            <TextInputCell
                type="text"
                id="user-name"
                labelText="氏名"
                defaultValue={user.name}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 1, row: 1 }
                    }}
                onChange={(event) => { setName(event) }}
            />
            <TextInputCell
                type="text"
                id="user-kana"
                labelText="ふりがな"
                defaultValue={user.kana}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 1, row: 1 }
                    }}
                onChange={(event) => { setKana(event) }}
            />

            {/* second rows */}
            <TextInputCell
                type="date"
                id="user-birthday"
                labelText="生年月日"
                defaultValue={`${yyyy}-${mm}-${dd}`}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 1, row: 1 }
                    }}
                onChange={(event) => { setBirthday(event) }}
            />
            <TextInputCell
                type="text"
                id="insurer-number"
                labelText="保険者番号"
                defaultValue={user.insurerNumber}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 1, row: 1 }
                    }}
                onChange={(event) => { setInsurerNumber(event) }}
            />

            {/* third rows */}
            <SelectCell
                id="sex"
                labelText="性別"
                options={SEX}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 1, row: 1 }
                    }}
                onChange={(event) => { selectSex(event) }}
            />
            <TextInputCell
                type="text"
                id="insured-number"
                labelText="被保険者番号"
                defaultValue={user.insuredNumber}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 1, row: 1 }
                    }}
                onChange={(event) => { setInsuredNumber(event) }}
            />
        </div >
    )
}