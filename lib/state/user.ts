import { User } from "../definitions";

export const dummyUser: User = {
    name: "氏　名前",
    kana: "うじ　なまえ",
    birthday: {
        yyyy: "2024", mm: "05", dd: "10"
    },
    sex: "男",
    insurerNumber: "",
    insuredNumber: "",
    careLevel: "要介護1",
    independenceLevelWithDisabilities: "自立",
    independenceLevelWithDementia: "自立",
    evaluationDay: {
        yyyy: "2024", mm: "04", dd: "12"
    },
    evaluationPoint: "サービス利用中",
    diagnosis: ["", "", ""],
    hospitalizations: [
        {
            start: { yyyy: "2024", mm: "10", dd: "11" },
            complaints: "その他",
            reason: ""
        },
        {
            start: { yyyy: "2024", mm: "05", dd: "30" },
            complaints: "発熱",
            reason: ""
        },
        {
            start: { yyyy: "2020", mm: "03", dd: "05" },
            complaints: "転倒",
            reason: ""
        }
    ],
    medicine: ["", "", ""],
    family: "同居",
    adl: {
        eating: "自立",
        transferring: "座れるが移れない",
        grooming: "自立",
        toileting: "自立",
        bathing: "自立",
        walking: "自立",
        stairs: "自立",
        dressing: "自立",
        bladderControl: "自立",
        bowelsControl: "自立",
    },
    endService: {
        date: { yyyy: "2024", mm: "04", dd: "01" },
        reason: "その他",
    },
    height: 180.5,
    weight: 75.5,
    denture: "あり",
    choke: "なし",
    stain: "あり",
    gum: "あり",
    dementia: null,
    vitalityIndex: {
        communication: "自分から挨拶する、話しかける",
        wakeUp: "いつも定時に起床している",
        discharge: "いつも自ら便意尿意を伝える、あるいは自分で排尿、排便を行う",
        rehabilitation: "自らリハビリに向かう、活動を求める",
    }
}