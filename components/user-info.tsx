'use client'

import { UserContext } from "@/lib/state/user-provider"
import { ChangeEvent, useContext } from "react"
import { SelectCell, TextInputCell } from "./ui/cell";
import { Sex } from "@/lib/life";

const SEX: Readonly<Sex[]> = ["男", "女", ""] as const

export default function UserInfo() {
    const { user, setUser } = useContext(UserContext);

    const { yyyy, mm, dd } = user["生年月日"];

    const setName = (event: ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;

        setUser({
            ...user,
            ["名前"]: newName,
        })
    }

    const setKana = (event: ChangeEvent<HTMLInputElement>) => {
        const newKana = event.target.value;

        setUser({
            ...user,
            ["ふりがな"]: newKana,
        })
    }

    const setBirthday = (event: ChangeEvent<HTMLInputElement>) => {
        const newBirthday = event.target.value;
        const [yyyy, mm, dd] = newBirthday.split("-")

        setUser({
            ...user,
            ["生年月日"]: {
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
            ["性別"]: newOption
        })
    }

    const setInsurerNumber = (event: ChangeEvent<HTMLInputElement>) => {
        const newInsurerNumber = event.target.value;

        setUser({
            ...user,
            ["保険者番号"]: newInsurerNumber,
        })
    }

    const setInsuredNumber = (event: ChangeEvent<HTMLInputElement>) => {
        const newInsuredNumber = event.target.value;

        setUser({
            ...user,
            ["被保険者番号"]: newInsuredNumber,
        })
    }

    return (
        <div className="grid grid-cols-4 grid-row-3 box-border">
            {/* first row */}
            <TextInputCell
                type="text"
                id="user-name"
                labelText="氏名"
                defaultValue={user["名前"]}
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
                defaultValue={user["ふりがな"]}
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
                defaultValue={user["保険者番号"] ? user["保険者番号"] : ""}
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
                value={user["性別"]}
                options={[...SEX]}
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
                defaultValue={user["被保険者番号"] ? user["被保険者番号"] : ""}
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