'use client'

import FileDropZone from "@/components/ui/file-drop-zone";
import { DragEvent, MouseEvent, useState } from "react";

const InputUser = {
    "椅子とベッド間の移乗": "",
    "整容": "",
    "トイレ動作": "",
    "入浴": "",
    "平地歩行": "",
    "階段昇降": "",
    "更衣": "",
    "排便コントロール": "",
    "排尿コントロール": "",
    "身長": "",
    "体重": "",
    "硬いものを避け柔らかいものばかり食べている": "",
    "入れ歯を使っている": "",
    "むせやすい": "",
    "認知症の診断有無": "",
    "起床": "",
    "意思疎通": "",
    "食事": "",
    "排せつ": "",
    "リハビリ・活動": ""
};

type UserKey = keyof typeof InputUser;

function readLines(input: string) {
    return input.split(/\r?\n|\r|\n/g);
}

export default function DataInput() {
    const [dragActive, setDragActive] = useState(false);
    const [csv, setCSV] = useState("");
    const [name, setName] = useState("");

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
            console.log(files);
            const input = await files[0].text();
            const [name, extension] = files[0].name.split('.');
            setName(name);
            const lines = readLines(input);
            const user = { ...InputUser };

            Object.keys(InputUser).map((key, i) => {
                const key_index = lines.indexOf(key as UserKey);


                if (key === "身長" || key == "体重") {
                    const [value, unit] = lines[key_index + 1].split(" ");
                    user[key as UserKey] = value;
                    return;
                }
                const value = lines[key_index + 1];
                user[key as UserKey] = value;
            })

            console.log(user);

            const keys = Object.keys(user).toString();
            const values = Object.values(user).toString();

            setCSV(values);

            console.log(keys.concat(values));
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-4">データ変換</h1>
            <div>
                <h2 className="text-center font-bold text-2xl mb-4">対象ファイル</h2>
                <FileDropZone
                    dragActive={dragActive}
                    dragHandler={(event) => { dragHandler(event) }}
                    dropHandler={(event) => { dropHandler(event) }} />
            </div>

            <div className="mt-4 text-center">
                <h2 className="font-bold text-2xl mb-4">出力{name ? `(${name}.csv)` : ""}</h2>
                <div>
                    <p className="text-left mb-4">{Object.keys(InputUser).toString()}</p>
                    <p className="text-left mb-4">{csv}</p>
                </div>
                {csv && <a href={`data:text/plain;charset=utf-8,${csv}`} download={`${name}.csv`}>Save</a>}
            </div>
        </div>
    )
}