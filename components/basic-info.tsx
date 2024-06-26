
'use client'

import { CareLevel, EvaluationPoint, IndependenceLevelDementia, IndependenceLevelDisabilities } from "@/lib/life";
import { SelectCell, TextInputCell } from "./ui/cell";
import { UserContext } from "@/lib/state/user-provider"
import { ChangeEvent, useContext } from "react";

export const CARE_LEVELS: readonly CareLevel[] = ["要支援1", "要支援2", "要介護1", "要介護2", "要介護3", "要介護4", "要介護5", ""] as const;
export const INDEPENDENCE_LEVEL_DISABILITIES: Readonly<IndependenceLevelDisabilities>[] = ["自立", "Ｊ１", "Ｊ２", "Ａ１", "Ａ２", "Ｂ１", "Ｂ２", "Ｃ１", "Ｃ２", ""] as const;
export const INDEPENDENCE_LEVEL_DEMENTIA: Readonly<IndependenceLevelDementia>[] = ["自立", "Ⅰ", "Ⅱａ", "Ⅱｂ", "Ⅲａ", "Ⅲｂ", "Ⅳ", "Ｍ", ""] as const
export const EVALUATION_POINT: Readonly<EvaluationPoint>[] = ["サービス利用開始時", "サービス利用中", "サービス利用終了時", ""] as const;

export default function BasicInfo() {
    const { user, setUser } = useContext(UserContext);

    const selectCareLevel = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value as CareLevel;

        setUser({
            ...user,
            ["要介護度"]: newValue
        })
    }

    const selectdisabilitiesLevel = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value as IndependenceLevelDisabilities;

        setUser({
            ...user,
            ["障害高齢者の日常生活自立度"]: newValue
        })
    }

    const selectDementiaLevel = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value as IndependenceLevelDementia;

        setUser({
            ...user,
            ["認知症高齢者の日常生活自立度"]: newValue
        })
    }

    const selectEvaluationDay = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        const [yyyy, mm, dd] = newValue.split("-")

        setUser({
            ...user,
            ["評価日"]: { yyyy: yyyy, mm: mm, dd: dd }
        })
    }

    const selectEvaluationPoint = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value as EvaluationPoint;

        setUser({
            ...user,
            ["評価時点"]: newValue
        })
    }

    return (
        <div className="grid grid-cols-4 grid-rows-5 box-border">
            <SelectCell
                id="care-level"
                labelText="要介護度"
                value={user["要介護度"]}
                options={[...CARE_LEVELS]}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 3, row: 1 }
                    }}
                onChange={(event) => { selectCareLevel(event) }} />
            <SelectCell
                id="independence-level-disabilities"
                labelText="障害高齢者の日常生活自立度"
                value={user["障害高齢者の日常生活自立度"]}
                options={[...INDEPENDENCE_LEVEL_DISABILITIES]}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 3, row: 1 }
                    }}
                onChange={(event) => { selectdisabilitiesLevel(event) }} />
            <SelectCell
                id="independence-level-dementia"
                labelText="認知症高齢者の日常生活自立度"
                value={user["認知症高齢者の日常生活自立度"]}
                options={[...INDEPENDENCE_LEVEL_DEMENTIA]}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 3, row: 1 }
                    }}
                onChange={(event) => { selectDementiaLevel(event) }} />
            <TextInputCell
                id="evaluation-day"
                type="date"
                labelText="評価日"
                defaultValue={`${user["評価日"].yyyy}-${user["評価日"].mm}-${user["評価日"].dd}`}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 3, row: 1 }
                    }}
                onChange={(event) => { selectEvaluationDay(event) }}
            />
            <SelectCell
                id="evaluation-point"
                labelText="評価時点"
                value={user["評価時点"]}
                options={[...EVALUATION_POINT]}
                cellSpan={
                    {
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 3, row: 1 }
                    }}
                onChange={(event) => { selectEvaluationPoint(event) }} />
        </div >
    )
}