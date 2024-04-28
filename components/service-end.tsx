import { ChangeEvent, useContext } from "react"
import { SelectCell, TextInputCell } from "./ui/cell"
import { UserContext } from "@/lib/state/user-provider"
import { EndReason, LIFEFormat } from "@/lib/life";

const END_REASON: Readonly<EndReason[]> = [
    "居宅サービスの利用",
    "介護老人福祉施設入所",
    "介護老人保健施設入所",
    "介護医療院入所",
    "医療機関入院",
    "死亡",
    "介護サービス利用をしなくなった",
    "その他"
]

const LIFEKey: keyof LIFEFormat & "サービス利用終了理由" = "サービス利用終了理由";

export default function ServiceEnd() {
    const { user, setUser } = useContext(UserContext);

    const { yyyy, mm, dd } = user[LIFEKey]["サービス利用終了日"];

    const setData = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const [yyyy, mm, dd] = value.split("-");
    }

    const setReason = (event: ChangeEvent<HTMLSelectElement>) => {
        const id = event.target.id;
        const value = event.target.value as EndReason;

        const preEndReason = user[LIFEKey];
        const endReason = {
            "サービス利用終了日": preEndReason["サービス利用終了日"],
            "終了理由": value,
            "その他": ""
        }

        setUser({
            ...user,
            "サービス利用終了理由": endReason
        })
    }

    const setReasonExtra = (event: ChangeEvent<HTMLInputElement>) => {
        const extraReason = event.target.value;

        const preEndReason = user[LIFEKey];
        const endReason = {
            "サービス利用終了日": preEndReason["サービス利用終了日"],
            "終了理由": preEndReason["終了理由"],
            "その他": extraReason
        }

        setUser({
            ...user,
            "サービス利用終了理由": endReason
        })
    }

    return (
        <>
            <h3 className="col-span-4 border-b-2 border-solid border-black  bg-gray-300 px-2">{LIFEKey}</h3>
            <TextInputCell
                id="終了理由"
                type="date"
                labelText="終了日"
                defaultValue={`${yyyy}-${mm}-${dd}`}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 3, row: 1 }
                }}
                onChange={(event) => { setData(event) }}
            />

            <SelectCell
                id="終了理由"
                labelText="理由"
                value={user[LIFEKey]["終了理由"]}
                options={[...END_REASON]}
                cellSpan={{
                    labelSpan: { col: 1, row: 1 },
                    controlSpan: { col: 2, row: 1 }
                }}
                onChange={(event) => { setReason(event) }}
            />
            <div className="col-span-1">
                <input className="w-full text-center"
                    defaultValue={user[LIFEKey]["その他"]}
                    placeholder="理由"
                    onChange={(event) => { setReasonExtra(event) }}
                    disabled={user[LIFEKey]["終了理由"] === "その他" ? false : true}
                />
            </div>
        </>
    )
}