import { UserContext } from "@/lib/state/user-provider"
import { ChangeEvent, useContext } from "react"
import { TextInputCell } from "./ui/cell"

export default function Medicine() {
    const { user, setUser } = useContext(UserContext)

    const setMedicine = (event: ChangeEvent<HTMLInputElement>, i: number) => {
        console.log(i);

        const newValue = event.target.value;
        const preMedicine = user.medicine;
        const newMedicine = preMedicine.map((d, j) => {
            if (j === i) {
                return newValue;
            }
            return d;
        })

        setUser({
            ...user,
            medicine: newMedicine
        })

    }
    return (
        <>
            <h3 className="col-span-4 row-span-1 border-b-2 border-solid border-black  bg-gray-300 px-2">服薬情報（※）</h3>
            {user.medicine.map((m, i) => {
                return (
                    <TextInputCell
                        key={i}
                        type="text"
                        id={`medicine-${i}`}
                        labelText={`薬剤名${i}`}
                        defaultValue={m}
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