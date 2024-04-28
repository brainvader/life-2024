'use client'

import { UserContext } from "@/lib/state/user-provider";
import { ChangeEvent, useContext } from "react";
import { SelectCell } from "./ui/cell";
import { ADLLevel, LIFEFormat, TransferLevel, WalkLevel } from "@/lib/life";

type LIFEADLkey =
    | "食事"
    | "トイレ動作"
    | "階段昇降"
    | "更衣"
    | "排便コントロール"
    | "排尿コントロール";

const ADL_LEVEL: Record<ADLLevel, string> = {
    "自立": "10",
    "一部介助": "5",
    "全介助": "0"
};

const GROOM_LEVEL: Record<ADLLevel, string> = {
    "自立": "5",
    "一部介助": "0",
    "全介助": "0"
}

const BATH_LEVEL = { ...GROOM_LEVEL }

const TRANSFER_LEVEL: Record<TransferLevel, string> = {
    "自立": "15",
    "監視下": "10",
    "座れるが移れない": "5",
    "全介助": "0"
}

const WALK_LEVEL: Record<WalkLevel, string> = {
    "自立": "15",
    "歩行器等": "10"
}

type ADLItemProps = {
    user: LIFEFormat,
    label: string,
    levelMap: typeof ADL_LEVEL
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function ADLItem({ user, label, levelMap, onChange }: ADLItemProps) {
    const level = label as LIFEADLkey;
    const userLevel = user[level];

    return (
        <SelectCell
            id={label}
            labelText={label}
            value={`${userLevel} (${levelMap[userLevel]})`}
            options={Object.entries(levelMap).map((pair) => {
                const [level, point] = pair;
                return `${level} (${point})`
            })}
            cellSpan={{
                labelSpan: { col: 1, row: 1 },
                controlSpan: { col: 3, row: 1 }
            }}
            onChange={(event) => { onChange(event) }}
        />
    )
}

export default function ADLInfo() {
    const { user, setUser } = useContext(UserContext);

    const setADL = (event: ChangeEvent<HTMLSelectElement>) => {
        const id = event.target.id;
        const newOption = event.target.value;
        const key = newOption.split('(')[0].trim() as ADLLevel;

        setUser({
            ...user,
            [id]: key
        })
    }

    const setTransferLevel = (event: ChangeEvent<HTMLSelectElement>) => {
        const id = event.target.id;
        const newOption = event.target.value;
        const key = newOption.split('(')[0].trim() as TransferLevel;

        setUser({
            ...user,
            [id]: key
        })
    }

    const setWalkLevel = (event: ChangeEvent<HTMLSelectElement>) => {
        const id = event.target.id;
        const newOption = event.target.value;
        const key = newOption.split('(')[0].trim() as WalkLevel;

        setUser({
            ...user,
            [id]: key
        })
    }

    return (
        <>
            <h3 className="col-span-4 border-b-2 border-solid border-black  bg-gray-300 px-2">ADL</h3>
            <ADLItem
                user={user}
                label="食事"
                levelMap={ADL_LEVEL}
                onChange={setADL} />

            <SelectCell
                id="椅子とベッド間の移乗"
                labelText="椅子とベッド間の移乗"
                value={`${user["椅子とベッド間の移乗"]} (${TRANSFER_LEVEL[user["椅子とベッド間の移乗"]]})`}
                options={Object.entries(TRANSFER_LEVEL).map((pair) => {
                    const [level, point] = pair;
                    return `${level} (${point})`
                })}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { setTransferLevel(event) }}
            />

            <SelectCell
                id="整容"
                labelText="整容"
                value={`${user["整容"]} (${GROOM_LEVEL[user["整容"]]})`}
                options={Object.entries(GROOM_LEVEL).map((pair) => {
                    const [level, point] = pair;
                    return `${level} (${point})`
                })}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { setADL(event) }}
            />

            <ADLItem
                user={user}
                label="トイレ動作"
                levelMap={ADL_LEVEL}
                onChange={setADL} />

            <SelectCell
                id="入浴"
                labelText="入浴"
                value={`${user["入浴"]} (${BATH_LEVEL[user["入浴"]]})`}
                options={Object.entries(BATH_LEVEL).map((pair) => {
                    const [level, point] = pair;
                    return `${level} (${point})`
                })}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { setADL(event) }}
            />

            <SelectCell
                id="平地歩行"
                labelText="平地歩行"
                value={`${user["平地歩行"]} (${WALK_LEVEL[user["平地歩行"]]})`}
                options={Object.entries(WALK_LEVEL).map((pair) => {
                    const [level, point] = pair;
                    return `${level} (${point})`
                })}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { setWalkLevel(event) }}
            />

            <ADLItem
                user={user}
                label="階段昇降"
                levelMap={ADL_LEVEL}
                onChange={setADL} />

            <ADLItem
                user={user}
                label="更衣"
                levelMap={ADL_LEVEL}
                onChange={setADL} />

            <ADLItem
                user={user}
                label="排便コントロール"
                levelMap={ADL_LEVEL}
                onChange={setADL} />

            <ADLItem
                user={user}
                label="排尿コントロール"
                levelMap={ADL_LEVEL}
                onChange={setADL} />
        </>
    )
}