'use client'

import { AGE } from "@/lib/definitions"
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

    return (
        <div className="grid grid-cols-4 grid-rows-3 border-4 border-solid border-black box-border">
            {/* first row */}
            <TextInputCell
                type="text"
                id="user-name"
                labelText="氏名"
                defaultValue={user.name} gridSpan={{ col: 1, row: 1 }}
                onChange={(event) => { setName(event) }}
            />
            <TextInputCell
                type="text"
                id="user-kana"
                labelText="ふりがな"
                defaultValue={user.kana} gridSpan={{ col: 1, row: 1 }}
                onChange={(event) => { setKana(event) }}
            />

            {/* second rows */}
            <TextInputCell
                type="date"
                id="user-birthday"
                labelText="生年月日"
                defaultValue={`${yyyy}-${mm}-${dd}`} gridSpan={{ col: 1, row: 1 }} />
            <TextInputCell
                type="text"
                id="insurer-number"
                labelText="保険者番号"
                defaultValue={user.insurerNumber} gridSpan={{ col: 1, row: 1 }} />

            {/* third rows */}
            <SelectCell
                id="sex"
                labelText="性別"
                options={AGE}
                gridSpan={{ col: 1, row: 1 }} />
            <TextInputCell
                type="text"
                id="insured-number"
                labelText="被保険者番号"
                defaultValue={user.insuredNumber} gridSpan={{ col: 1, row: 1 }} />
        </div >
    )
}