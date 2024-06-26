'use client'

import { UserContext } from "@/lib/state/user-provider"
import { ChangeEvent, useContext } from "react";
import { SelectCell } from "./ui/cell";
import ADLInfo from "./adl-info";
import Medicine from "./medicine";
import { Complaint, Family } from "@/lib/life";
import ServiceEnd from "./service-end";

const COMPLAINT: Readonly<Complaint[]> = ["発熱", "転倒", "その他", ""] as const;
const FAMILY: Readonly<Family[]> = ["同居", "独居", ""] as const;

export default function General() {
    const { user, setUser } = useContext(UserContext);

    function onDiagnosis(event: ChangeEvent<HTMLInputElement>, i: number) {
        const newValue = event.target.value;
        const preDiagnosis = user["診断名"];
        const newDiagnosis = preDiagnosis.map((d, j) => {
            if (j === i) {
                return newValue;
            }
            return d;
        })

        setUser({
            ...user,
            ["診断名"]: newDiagnosis
        })
    }

    function onHospitalizationsDate(event: ChangeEvent<HTMLInputElement>, i: number) {
        const newDate = event.target.value.split('-');
        const preHospitalizations = user["緊急入院時の状況"];
        const newHospitalizations = preHospitalizations.map((h, j) => {
            if (j === i) {
                return {
                    ...h,
                    ["入院日"]: { yyyy: newDate[0], mm: newDate[1], dd: newDate[2] },
                };
            }
            return h;
        })

        setUser({
            ...user,
            ["緊急入院時の状況"]: newHospitalizations
        })
    }

    function onHospitalizationsComplain(event: ChangeEvent<HTMLSelectElement>, i: number) {
        const newComplain = event.target.value;

        const preHospitalizations = user["緊急入院時の状況"];
        const newHospitalizations = preHospitalizations.map((h, j) => {
            if (j === i) {
                return {
                    ...h,
                    ["受療時の主訴"]: newComplain as Complaint
                };
            }
            return h;
        })

        setUser({
            ...user,
            ["緊急入院時の状況"]: [...newHospitalizations]
        })
    }

    function setComplainReason(event: ChangeEvent<HTMLInputElement>, i: number) {
        const newReason = event.target.value;

        const preHospitalizations = user["緊急入院時の状況"];
        const newHospitalizations = preHospitalizations.map((h, j) => {
            if (j === i) {
                return {
                    ...h,
                    ["その他"]: newReason
                };
            }
            return h;
        })

        setUser({
            ...user,
            ["緊急入院時の状況"]: newHospitalizations
        })
    }

    const setFamily = (event: ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as Family;

        setUser({
            ...user,
            ["家族の状況"]: newOption
        })
    }

    return (
        <>
            <div className="grid grid-cols-4">
                <p className="h-full col-span-4 row-span-1 border-b-2 boder-solid border-black bg-gray-300">
                    診断名(特定疾病または生活機能低下の直接の原因となっている傷病名については1に記入)
                </p>
                {user["診断名"].map((d, i) => {
                    return (
                        <p key={i} className="col-span-4 row-span-1 flex p-2">
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

                <p className="col-span-4 row-span-1 border-t-2 border-b-2 boder-solid border-black bg-gray-300">緊急入院の状況</p>
                <div className="col-span-4 row-span-1 h-full border-b-2 border-solid border-black">
                    {user["緊急入院時の状況"].map((h, i) => {
                        const { yyyy, mm, dd } = h["入院日"];
                        const complaint = h["受療時の主訴"];
                        const reason = h["その他"]
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
                                        defaultValue={complaint}
                                        onChange={(event) => { onHospitalizationsComplain(event, i) }}>
                                        {COMPLAINT.map((c, j) => {
                                            return <option key={j} value={c}>{c}</option>
                                        })}
                                    </select>
                                    {complaint === "その他" ?
                                        < input value={reason} placeholder="理由" onChange={(event) => { setComplainReason(event, i) }} />
                                        : <></>}
                                </label>
                            </p >
                        )
                    })}
                </div>
            </div>

            <Medicine />

            <div className="grid grid-cols-4 grid-rows-1">
                <SelectCell
                    id="family"
                    labelText="家族の状況（※）"
                    value={user["家族の状況"]}
                    options={[...FAMILY]}
                    cellSpan={{
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 3, row: 1 }
                    }}
                    onChange={(event) => { setFamily(event) }}
                />
            </div>

            <ADLInfo />
            <ServiceEnd />
        </>
    )
}