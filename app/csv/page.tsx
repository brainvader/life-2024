'use client'

import { ChangeEvent, useState } from "react";

// type InputUser = {
//     "椅子とベッド間の移乗": "自立" | "一部介助" | "全介助",
// }

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

export default function DataInput() {
    const [csv, setCSV] = useState("");

    const toCSV = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const input = await event.target.files[0].text();
            const lines = input.split(/\r?\n|\r|\n/g);
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
        <div className="w-[90%]">
            <h1 className="font-bold text-4xl mb-4">データ変換</h1>
            <div className="mb-4">
                <h2 className="mb-2">データ入力</h2>

                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            onChange={(event) => { toCSV(event) }}
                        />
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">クリックしてアップロード</span>(ファイルをドラッグ・ドロップ)してください</p>
                        </div>
                    </label>
                </div>


            </div>

            <div>
                <h2>出力(CSV)</h2>
                <div>
                    <p></p>
                    <p>{csv}</p>
                </div>
            </div>
        </div>
    )
}