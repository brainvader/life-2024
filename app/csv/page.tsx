'use client'

import FileDropZone from "@/components/ui/file-drop-zone";
import { Discharge, Rehabilitation } from "@/lib/life";
import { LIFEOriginalKeys } from "@/lib/life-original";
import { dummyUser } from "@/lib/state/user";
import { UserContext } from "@/lib/state/user-provider";
import { DragEvent, useContext, useState } from "react";

function readLines(input: string) {
    return input.split(/\r?\n|\r|\n/g);
}

export default function DataInput() {
    const { user, setUser } = useContext(UserContext);

    const [dragActive, setDragActive] = useState(false);
    const [name, setName] = useState("");
    const [load, setLoad] = useState(false);

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
        setLoad(false);

        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const files = event.dataTransfer.files;

            const [name, extension] = files[0].name.split('.');
            setName(name)

            const input = await files[0].text();
            const lines = readLines(input);
            const lifeData = { ...dummyUser };

            LIFEOriginalKeys.map((key) => {
                console.log(`##### ${key} ######`)
                if (key === "同居家族等" || key === "認知症の診断") {
                    const lifeKey = key === "同居家族等" ? "家族の状況" : "認知症の診断";
                    lifeData[lifeKey] = null;
                    return;
                }

                if (key === "身長" || key == "体重") {
                    const key_index = lines.indexOf(key)
                    const value = lines[key_index + 1]
                    const [num, unit] = value.split(" ");
                    lifeData[key] = num;
                    return;
                }

                if (key === "排せつ") {
                    const key_index = lines.indexOf(key)
                    const value = lines[key_index + 1] as Discharge
                    const lifeKey = "排泄";
                    lifeData[lifeKey] = value;
                    return;
                }

                if (key === "リハビリ") {
                    const key_index = lines.indexOf("リハビリ・活動");
                    const value = lines[key_index + 1] as Rehabilitation
                    console.log(value);
                    lifeData["リハビリ"] = value;
                    return;
                }

                const key_index = lines.indexOf(key)
                const value = lines[key_index + 1]
                // lifeData[key] = value as any;
                setUser({
                    ...user,
                    [key]: value
                })
                // console.log(`${key}: ${value}`);
            })
        }

        setLoad(true)
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
                    {load && <pre className="text-left mb-4">{JSON.stringify(user, null, 2)}</pre>}
                </div>
                {/* {values && <a href={`data:text/csv;charset=utf-8,${labels}\r\n${values}`} download={`${name}.csv`}>Save</a>} */}
                {load && <a href={`data:text/text/json;charset=utf-8,${JSON.stringify(user, null, 2)}`} download={`${name}.json`}>Save</a>}
            </div>
        </div>
    )
}