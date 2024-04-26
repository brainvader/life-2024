'use client'

import FileDropZone from "@/components/ui/file-drop-zone";
import { LIFEOriginalKeys, LIFEOriginalUser } from "@/lib/life-original";
import { DragEvent, useState } from "react";

function readLines(input: string) {
    return input.split(/\r?\n|\r|\n/g);
}

export default function DataInput() {
    const [dragActive, setDragActive] = useState(false);
    const [name, setName] = useState("");
    const [labels, setLabels] = useState("");
    const [values, setValues] = useState("");

    const dragHandler = (event: DragEvent<HTMLFormElement | HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.type === "dragenter" || event.type === "dragover") {
            setDragActive(true);
        } else if (event.type === "dragleave") {
            setDragActive(false);
        }
    }

    const dropHandler = async (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);

        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const files = event.dataTransfer.files;

            const [name, extension] = files[0].name.split('.');
            setName(name);

            const input = await files[0].text();
            const lines = readLines(input);
            const pair = { "名前": name, ...LIFEOriginalUser };

            LIFEOriginalKeys.map((key) => {
                console.log(`##### ${key} ######`)
                if (key === "同居家族等" || key === "認知症の診断") {
                    pair[key] = "手入力"
                    return;
                }

                if (key === "身長" || key == "体重") {
                    const key_index = lines.indexOf(key)
                    const value = lines[key_index + 1]
                    const [num, unit] = value.split(" ");
                    pair[key] = num
                    return;
                }

                if (key === "リハビリ") {
                    const key_index = lines.indexOf("リハビリ・活動");
                    const value = lines[key_index + 1]
                    pair[key] = value
                    return;
                }

                const key_index = lines.indexOf(key)
                const value = lines[key_index + 1]

                console.log(`${key}: ${value}`);

                pair[key] = value
            })

            const labels = Object.keys(pair).map((key) => {
                if (key === "リハビリ") {
                    return "リハビリ・活動";
                }
                return key;
            }).toString();
            const values = Object.values(pair).toString();

            setLabels(labels)
            setValues(values);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-4">データ変換</h1>
            <div>
                <h2 className="text-center font-bold text-2xl mb-4">対象ファイル: {name ? `(${name}.txt)` : ""}</h2>
                <FileDropZone
                    dragActive={dragActive}
                    dragHandler={(event) => { dragHandler(event) }}
                    dropHandler={(event) => { dropHandler(event) }} />
            </div>

            <div className="mt-4 text-center">
                <h2 className="font-bold text-2xl mb-4">出力: {name ? `(${name}.csv)` : ""}</h2>
                <div>
                    {labels && <p className="text-left mb-4">{labels}</p>}
                    {values && <p className="text-left mb-4">{values}</p>}
                </div>
                {values && <a href={`data:text/csv;charset=utf-8,${labels}\r\n${values}`} download={`${name}.csv`}>Save</a>}
            </div>
        </div>
    )
}