
'use client'

import { CARE_LEVELS, CareLevel, EVALUATION_POINT, EvaluationPoint, INDEPENDENCE_LEVEL_WITH_DEMENTIA, INDEPENDENCE_LEVEL_WITH_DISABILITIES, IndependenceLevelWithDementia, IndependenceLevelWithDisabilities } from "@/lib/definitions";
import { SelectCell, TextInputCell } from "./ui/cell";
import { UserContext } from "@/lib/state/user-provider"
import { ChangeEvent, useContext } from "react";

export default function BasicInfo() {
    const { user, setUser } = useContext(UserContext);

    const selectCareLevel = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value as CareLevel;

        setUser({
            ...user,
            careLevel: newValue
        })
    }

    const selectdisabilitiesLevel = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value as IndependenceLevelWithDisabilities;

        setUser({
            ...user,
            independenceLevelWithDisabilities: newValue
        })
    }

    const selectDementiaLevel = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value as IndependenceLevelWithDementia;

        setUser({
            ...user,
            independenceLevelWithDementia: newValue
        })
    }

    const selectEvaluationDay = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        const [yyyy, mm, dd] = newValue.split("-")

        setUser({
            ...user,
            evaluationDay: { yyyy: yyyy, mm: mm, dd: dd }
        })
    }

    const selectEvaluationPoint = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value as EvaluationPoint;

        setUser({
            ...user,
            evaluationPoint: newValue
        })
    }

    return (
        <div className="grid grid-cols-4 border-4 border-solid border-black">
            <SelectCell
                id="care-level"
                labelText="要介護度"
                options={CARE_LEVELS}
                cellSpan={
                    {
                        labelSpan: { col: 2, row: 1 },
                        controlSpan: { col: 2, row: 1 }
                    }}
                onChange={(event) => { selectCareLevel(event) }} />
            <SelectCell
                id="independence-level-disabilities"
                labelText="障害高齢者の日常生活自立度"
                options={INDEPENDENCE_LEVEL_WITH_DISABILITIES}
                cellSpan={
                    {
                        labelSpan: { col: 2, row: 1 },
                        controlSpan: { col: 2, row: 1 }
                    }}
                onChange={(event) => { selectdisabilitiesLevel(event) }} />
            <SelectCell
                id="independence-level-dementia"
                labelText="認知症高齢者の日常生活自立度"
                options={INDEPENDENCE_LEVEL_WITH_DEMENTIA}
                cellSpan={
                    {
                        labelSpan: { col: 2, row: 1 },
                        controlSpan: { col: 2, row: 1 }
                    }}
                onChange={(event) => { selectDementiaLevel(event) }} />
            <TextInputCell
                id="evaluation-day"
                type="date"
                labelText="評価日"
                defaultValue={`${user.evaluationDay.yyyy}-${user.evaluationDay.mm}-${user.evaluationDay.dd}`}
                cellSpan={
                    {
                        labelSpan: { col: 2, row: 1 },
                        controlSpan: { col: 2, row: 1 }
                    }}
                onChange={(event) => { selectEvaluationDay(event) }}
            />
            <SelectCell
                id="evaluation-point"
                labelText="評価時点"
                options={EVALUATION_POINT}
                cellSpan={
                    {
                        labelSpan: { col: 2, row: 1 },
                        controlSpan: { col: 2, row: 1 }
                    }}
                onChange={(event) => { selectEvaluationPoint(event) }} />
        </div >
    )
}