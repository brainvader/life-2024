'use client'

import { Hospitalizations } from "@/lib/definitions";
import { UserContext } from "@/lib/state/user-provider"
import { ChangeEvent, useContext } from "react";

export default function General() {
    const { user, setUser } = useContext(UserContext);

    function onChange(event: ChangeEvent<HTMLInputElement>, i: number) {
        const newValue = event.target.value;
        const preDiagnosis = user.diagnosis;
        const newDiagnosis = preDiagnosis.map((d, j) => {
            if (j === i) {
                return newValue;
            }
            return d;
        })

        setUser({
            ...user,
            diagnosis: newDiagnosis
        })
    }

    return (
        <div className="grid grid-cols-3">
            <p className="col-span-3">
                診断名(特定疾病または生活機能低下の直接の原因となっている傷病名については1に記入)
            </p>
            {user.diagnosis.map((d, i) => {
                return (
                    <p key={i} className="col-span-3 w-full">
                        <label >{i + 1}.
                            <input type="text" value={d} onChange={(event) => { onChange(event, i) }} />
                        </label>
                    </p>)
            })}

            <p className="col-span-1">緊急入院の状況</p>
            {user.hospitalizations.map((h, i) => {
                const { start: { yyyy, mm, dd }, complaints
                }: Hospitalizations = h;
                return (
                    <p key={i} className="col-span-2">
                        <label>入院日: <input type="date" value={`${yyyy}-${mm}-${dd}`} /></label>
                        <label>受療時の主訴<input type="text" value={complaints} /></label>
                    </p>
                )
            })}

        </div>
    )
}