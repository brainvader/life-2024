'use client'

import UserInfo from '@/components/user-info';
import BasicInfo from '@/components/basic-info';
import OralNutritionInfo from '@/components/oral-nutrition-info';
import VitalityIndex from '@/components/vitality-index';
import General from '@/components/general';
import DementiaInfo from '@/components/dementia-info';
import FileDropZone from '@/components/ui/file-drop-zone';
import { DragEvent, useContext, useRef, useState } from 'react';
import { readLines } from '@/lib/utils';
import { UserContext } from '@/lib/state/user-provider';
import { LIFEOriginalKeys, LIFEOriginalFormat } from '@/lib/life-original';
import { dummyUser } from '@/lib/state/user';
import { ADLLevel, Communication, Discharge, IndependenceLevelDementia, IndependenceLevelDisabilities, Rehabilitation, TransferLevel, WakeUp, WalkLevel } from '@/lib/life';

function readOriginalData(lines: string[]) {
  const lifeOriginalData = { ...LIFEOriginalFormat };

  LIFEOriginalKeys.map((key) => {
    console.log(`##### ${key} ######`)

    if (key === "同居家族等" || key === "認知症の診断") {
      lifeOriginalData[key] = "";
      return;
    }

    if (key === "身長" || key == "体重") {
      const key_index = lines.indexOf(key)
      const value = lines[key_index + 1]
      const [num, unit] = value.split(" ");
      lifeOriginalData[key] = num;
      return;
    }

    if (key === "リハビリ") {
      const key_index = lines.indexOf("リハビリ・活動");
      const value = lines[key_index + 1] as Rehabilitation
      lifeOriginalData["リハビリ"] = value;
      return;
    }

    const key_index = lines.indexOf(key)
    const value = lines[key_index + 1]
    lifeOriginalData[key] = value;
  })

  return lifeOriginalData;
}

function lifeUserfromOriginal(original: typeof LIFEOriginalFormat) {
  const lifeUser = { ...dummyUser };
  lifeUser["障害高齢者の日常生活自立度"] = original["障害高齢者の日常生活自立度"] as IndependenceLevelDisabilities
  lifeUser["認知症高齢者の日常生活自立度"] = original["認知症高齢者の日常生活自立度"] as IndependenceLevelDementia
  lifeUser["家族の状況"] = "";
  lifeUser["食事"] = original["食事"] as ADLLevel
  lifeUser["椅子とベッド間の移乗"] = original["椅子とベッド間の移乗"] as TransferLevel
  lifeUser["整容"] = original["整容"] as ADLLevel
  lifeUser["トイレ動作"] = original["トイレ動作"] as ADLLevel
  lifeUser["入浴"] = original["入浴"] as ADLLevel
  lifeUser["平地歩行"] = original["平地歩行"] as WalkLevel
  lifeUser["階段昇降"] = original["階段昇降"] as ADLLevel
  lifeUser["更衣"] = original["更衣"] as ADLLevel
  lifeUser["排便コントロール"] = original["排便コントロール"] as ADLLevel
  lifeUser["排尿コントロール"] = original["排尿コントロール"] as ADLLevel
  lifeUser["身長"] = original["身長"]
  lifeUser["体重"] = original["体重"]
  lifeUser["意思疎通"] = original["意思疎通"] as Communication
  lifeUser["起床"] = original["起床"] as WakeUp
  lifeUser["排泄"] = original["排せつ"] as Discharge
  lifeUser["リハビリ"] = original["リハビリ"] as Rehabilitation
  return lifeUser;
}

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [dragActive, setDragActive] = useState(false);

  const anchorRef = useRef<HTMLAnchorElement>(null)

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

      if (extension === "txt") {
        const input = await files[0].text();
        const lines = readLines(input);
        const originalData = readOriginalData(lines);
        const lifeUser = lifeUserfromOriginal(originalData);
        lifeUser["名前"] = name;
        setUser({ ...lifeUser });
      }
    }
  }

  const downloadJSON = (filename: string): void => {
    const link = anchorRef.current
    if (!link) return

    const blob = new Blob([JSON.stringify(user)], { type: 'application/json;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    link.click()
  }

  return (
    <FileDropZone
      dragHandler={(event) => { dragHandler(event) }}
    >
      <main className="w-[90%] my-0 mx-auto"
        onDragEnter={dragHandler}
        onDragLeave={dragHandler}
        onDragOver={dragHandler}
        onDrop={dropHandler}>
        <h1>科学的介護推進に関する評価（通所・居住サービス）</h1>

        {/* <section className="box-border mb-4">
          <h2>【坂道】</h2>
          <div className='grid grid-cols-4'>
            <div className={`box-border block w-full col-span-1 row-span-1 border-r-2 border-b-2 border-solid border-black pl-1`}>
              <CellLabel id="saka" labelText={"坂道"} />
            </div>
            <div className={`w-full col-span-2 row-span-1 border-r-2 border-b-2 border-solid border-black`}>
              <select
                className="block w-full text-center bg-white appearance-none"
                id="saka"
                defaultValue={""}
                value={"日向坂"}
                onChange={(event) => { }}>
                {["日向坂46", "乃木坂46", "櫻坂46"].map((option, i) => {
                  return (<option key={i} value={option}>{option}</option>)
                })}
              </select>
            </div>
          </div>
        </section> */}

        <section className="box-border mb-4">
          <h2>【利用者情報】</h2>
          <UserInfo />
        </section>

        <section className="box-border mb-4">
          <h2>【基本情報】</h2>
          <BasicInfo />
        </section>

        <section className="box-border mb-4">
          <h2>【総論】</h2>
          <General />
        </section>

        <section className="box-border mb-4">
          <h2>【口腔・栄養】</h2>
          <OralNutritionInfo />
        </section>

        <section className="box-border mb-4">
          <h2>【認知症】</h2>
          <DementiaInfo />
        </section>

        <section className="box-border mb-4">
          <h2>【Vitality Index】</h2>
          <VitalityIndex />
        </section>
      </main>
      <a ref={anchorRef} hidden ></a>
    </FileDropZone>

  );
}
