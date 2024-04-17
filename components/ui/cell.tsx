import { ChangeEvent } from "react";

type GridSpan = {
    col: number,
    row: number,
}

type InputType = "text" | "date";

type CellLabelProps = {
    id: string,
    labelText: string
}

function CellLabel({ id, labelText }: CellLabelProps) {
    return (<label htmlFor={id}>{labelText}</label>)
}

type TextInputCellProps = {
    id: string,
    type: InputType,
    labelText: string,
    defaultValue: string,
    gridSpan: GridSpan,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function TextInputCell({ id, type, labelText, defaultValue, gridSpan }: TextInputCellProps) {
    const { col, row } = gridSpan;

    return (
        <>
            <div className={`col-span-${col} row-span-${row} border-r-2 border-b-2 border-solid border-black`}>
                <CellLabel id={id} labelText={labelText} />
            </div>
            <div className={`col-span-${col} row-span-${row} border-r-2 border-b-2 border-solid border-black`}>
                <input className="w-full text-center" type={type} id={id} defaultValue={defaultValue}></input>
            </div >
        </>)

}

type SelectCellCellProps = {
    id: string,
    labelText: string,
    options: Readonly<string>[],
    gridSpan: GridSpan,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function SelectCell({ id, labelText, options, gridSpan }: SelectCellCellProps) {
    const { col, row } = gridSpan;

    return (
        <>
            <div className={`col-span-${col} row-span-${row} border-r-2 border-b-2 border-solid border-black pl-1`}>
                <CellLabel id={id} labelText={labelText} />
            </div>
            <div className={`col-span-${col} row-span-${row} border-r-2 border-b-2 border-solid border-black`}>
                <select className="w-full text-center bg-white appearance-none" id={id}>
                    {options.map((option, i) => {
                        return (<option key={i} value={option}>{option}</option>)
                    })}
                </select>
            </div>
        </>
    )
}