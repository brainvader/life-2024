'use client'

import { DragEvent, ReactNode } from "react"

interface FileDropZoneProps {
    children: ReactNode,
    // dragActive: boolean,
    dragHandler: (event: DragEvent<HTMLFormElement | HTMLDivElement>) => void
    // dropHandler: (event: DragEvent<HTMLDivElement>) => void
}

export default function FileDropZone({ dragHandler, children }: FileDropZoneProps) {

    return (
        <form
            className="relative text-center"
            onDragEnter={dragHandler}
            onSubmit={(event) => {
                event.preventDefault()
            }}
        >
            <input
                className="hidden"
                type="file"
                hidden
                id="file-upload"
                // accept=".txt"
                multiple
            />
            {children}
            {/* <label
                className="h-full flex items-center justify-center border-2 rounded-2xl border-dashed border-[#cbd5e1] bg-[#f8fafc]"
                htmlFor="file-upload">
                <div>
                    <p>ファイルをここにドラッグ・ドロップしてください。</p>
                    <button className="cursor-pointer p-1 text-base border-none bg-transparent hover:underline">
                        アップロードするファイルを選択
                    </button>
                </div>
            </label> */}
            {/* {dragActive
                &&
                <div
                    className="absolute w-full h-full rounded-2xl top-0 right-0 bottom-0 left-0"
                    id="drag-file-element"
                    onDragEnter={dragHandler}
                    onDragLeave={dragHandler}
                    onDragOver={dragHandler}
                    onDrop={dropHandler}
                ></div>} */}
        </form>
    )
}