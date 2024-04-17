'use client'

import { COMPLAINT, Complaint, Hospitalizations } from "@/lib/definitions";
import { UserContext } from "@/lib/state/user-provider"
import { ChangeEvent, useContext } from "react";

export default function General() {
    const { user, setUser } = useContext(UserContext);

    function onDiagnosis(event: ChangeEvent<HTMLInputElement>, i: number) {
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

    function onHospitalizationsDate(event: ChangeEvent<HTMLInputElement>, i: number) {
        const newDate = event.target.value.split('-');
        const preHospitalizations = user.hospitalizations;
        const newHospitalizations = preHospitalizations.map((h, j) => {
            if (j === i) {
                return {
                    ...h,
                    start: { yyyy: newDate[0], mm: newDate[1], dd: newDate[2] },
                };
            }
            return h;
        })

        setUser({
            ...user,
            hospitalizations: newHospitalizations
        })
    }

    function onHospitalizationsComplain(event: ChangeEvent<HTMLSelectElement>, i: number) {
        const newComplain = event.target.value;

        const preHospitalizations = user.hospitalizations;
        const newHospitalizations = preHospitalizations.map((h, j) => {
            if (j === i) {
                return {
                    ...h,
                    complaints: newComplain as Complaint
                };
            }
            return h;
        })

        setUser({
            ...user,
            hospitalizations: newHospitalizations
        })
    }

    function setComplainReason(event: ChangeEvent<HTMLInputElement>, i: number) {
        const newReason = event.target.value;

        const preHospitalizations = user.hospitalizations;
        const newHospitalizations = preHospitalizations.map((h, j) => {
            if (j === i) {
                return {
                    ...h,
                    reason: newReason
                };
            }
            return h;
        })

        setUser({
            ...user,
            hospitalizations: newHospitalizations
        })
    }

    return (
        <div className="grid grid-cols-4 border-4 border-solid border-black">
            <p className="col-span-4 border-b-2 boder-solid border-black bg-gray-300">
                診断名(特定疾病または生活機能低下の直接の原因となっている傷病名については1に記入)
            </p>
            {user.diagnosis.map((d, i) => {
                return (
                    <p key={i} className="col-span-4 flex p-2">
                        <label
                            className="w-5"
                            htmlFor={`diagnosis${i + 1}`}>
                            {i + 1 + " "}
                        </label>
                        <input
                            className="grow text-center border-b-2 border-black"
                            type="text"
                            id={`diagnosis${i + 1}`}
                            defaultValue={d}
                            onChange={(event) => { onDiagnosis(event, i) }} />
                    </p>)
            })}

            <p className="col-span-4 border-t-2 border-b-2 boder-solid border-black bg-gray-300">緊急入院の状況</p>
            <div className="col-span-4 h-full">
                {user.hospitalizations.map((h, i) => {
                    const { start: { yyyy, mm, dd }, complaints
                    }: Hospitalizations = h;
                    console.log(`reason: ${i}, ${h.reason}`)
                    return (
                        <p key={i} className="flex flex-row  flex-nowrap">
                            <label className="w-2/6 box-border flex gap-2">
                                入院日:
                                <input
                                    className="text-center grow"
                                    type="date"
                                    defaultValue={`${yyyy}-${mm}-${dd}`}
                                    onChange={(event) => { onHospitalizationsDate(event, i) }} />
                            </label>
                            <label
                                className="w-4/6">
                                受療時の主訴
                                <select
                                    className="box-border text-center appearance-none mx-4"
                                    name="受療時の主訴"
                                    id="hp-complain"
                                    defaultValue={complaints}
                                    onChange={(event) => { onHospitalizationsComplain(event, i) }}>
                                    {COMPLAINT.map((c, j) => {
                                        return <option key={j} value={c}>{c}</option>
                                    })}
                                </select>
                                {complaints === "その他" ?
                                    <input value={h.reason} placeholder="理由" onChange={(event) => { setComplainReason(event, i) }} />
                                    : <></>}
                            </label>

                        </p >
                    )
                })}
            </div>

        </div >
    )
}