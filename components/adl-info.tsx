import { UserContext } from "@/lib/state/user-provider";
import { ChangeEvent, useContext } from "react";
import { SelectCell } from "./ui/cell";
import { ADL, ADLLevel, ADLMap, ADL_LEVEL, TRANSFER_LEVEL, TransferLevel, WALK_LEVEL, WalkLevel } from "@/lib/definitions";

function getOptions(key: keyof ADL): Readonly<ADLLevel | TransferLevel | WalkLevel>[] {
    if (key === "transfer") {
        return TRANSFER_LEVEL;
    }

    if (key === "walking") {
        return WALK_LEVEL;
    }

    return ADL_LEVEL;

}

export default function ADLInfo() {
    const { user, setUser } = useContext(UserContext);

    const setADL = (event: ChangeEvent<HTMLSelectElement>) => {
        const id = event.target.id;
        const newOption = event.target.value;

        setUser({
            ...user,
            [id]: newOption
        })
    }

    return (<>
        <h3 className="col-span-4 row-span-1 border-b-2 border-solid border-black  bg-gray-300 px-2">ADL</h3>
        {Object.keys(user.adl).map((key, i) => {
            return (
                <SelectCell
                    key={i}
                    id={key}
                    labelText={ADLMap[key as keyof ADL]}
                    defaultValue={user.adl.eating}
                    options={getOptions(key as keyof ADL)}
                    cellSpan={{
                        labelSpan: { col: 1, row: 1 },
                        controlSpan: { col: 3, row: 1 }
                    }}
                    onChange={(event) => { setADL(event) }}
                />)
        })}
    </>
    )
}