import { ChangeEvent } from "react";

type GridSpan = {
    col: number,
    row: number,
}

type CellSpan = {
    labelSpan: GridSpan,
    controlSpan: GridSpan
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
    cellSpan: CellSpan,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function TextInputCell({ id, type, labelText, defaultValue, cellSpan, onChange }: TextInputCellProps) {
    const { labelSpan, controlSpan } = cellSpan;

    return (
        <>
            <div className={`col-span-${labelSpan.col} row-span-${labelSpan.row} border-r-2 border-b-2 border-solid border-black`}>
                <CellLabel id={id} labelText={labelText} />
            </div>
            <div className={`col-span-${controlSpan.col} row-span-${controlSpan.row} border-r-2 border-b-2 border-solid border-black`}>
                <input
                    className="w-full text-center"
                    type={type}
                    id={id}
                    defaultValue={defaultValue}
                    onChange={(event) => { onChange(event) }}
                />
            </div >
        </>)

}

type SelectCellCellProps = {
    id: string,
    labelText: string,
    options: Readonly<string>[],
    cellSpan: CellSpan,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function SelectCell({ id, labelText, options, cellSpan, onChange }: SelectCellCellProps) {
    const { labelSpan, controlSpan } = cellSpan;

    return (
        <>
            <div className={`col-span-${labelSpan.col} row-span-${labelSpan.row} border-r-2 border-b-2 border-solid border-black pl-1`}>
                <CellLabel id={id} labelText={labelText} />
            </div>
            <div className={`col-span-${controlSpan.col} row-span-${controlSpan.row} border-r-2 border-b-2 border-solid border-black`}>
                <select
                    className="w-full text-center bg-white appearance-none"
                    id={id}
                    onChange={(event) => onChange(event)}>
                    {options.map((option, i) => {
                        return (<option key={i} value={option}>{option}</option>)
                    })}
                </select>
            </div>
        </>
    )
}