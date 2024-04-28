import { UserContext } from "@/lib/state/user-provider"
import { ChangeEvent, useContext } from "react"
import { TextInputCell } from "./ui/cell"

export default function Medicine() {
    const { user, setUser } = useContext(UserContext)

    const setMedicine = (event: ChangeEvent<HTMLInputElement>, i: number) => {
        const newValue = event.target.value;
        const preMedicine = user["服薬情報"];
        const newMedicine = preMedicine.map((d, j) => {
            if (j === i) {
                return { "薬剤名": newValue };
            }
            return d;
        })

        setUser({
            ...user,
            ["服薬情報"]: newMedicine
        })

    }
    return (
        <>
            <h3 className="col-span-4 row-span-1 border-b-2 border-solid border-black  bg-gray-300 px-2">服薬情報（※）</h3>
            {user["服薬情報"].map((m, i) => {
                return (
                    <TextInputCell
                        key={i}
                        type="text"
                        id={`medicine-${i}`}
                        labelText={`薬剤名${i}`}
                        defaultValue={m['薬剤名']}
                        cellSpan={{
                            labelSpan: { col: 1, row: 1 },
                            controlSpan: { col: 3, row: 1 }
                        }}
                        onChange={(event) => { setMedicine(event, i) }}
                    />
                )
            })}
        </>
    )
}