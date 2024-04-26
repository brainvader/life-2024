export type Date = {
    yyyy: string,
    mm: string,
    dd: string
}

export type Sex = | "男" | "女";

// 要介護度
export type CareLevel =
    | "要支援1"
    | "要支援2"
    | "要介護1"
    | "要介護2"
    | "要介護3"
    | "要介護4"
    | "要介護5"

// 障害高齢者の日常生活自立度
export type IndependenceLevelDisabilities =
    | "自立"
    | "J1"
    | "J2"
    | "A1"
    | "A2"
    | "B1"
    | "B2"
    | "C1"
    | "C2"

// 認知症高齢者の日常生活自立度
export type IndependenceLevelDementia =
    | "自立"
    | "Ⅰ"
    | "Ⅱa"
    | "Ⅱb"
    | "Ⅲa"
    | "Ⅲb"
    | "Ⅳ"
    | "M"

// ADL全般
export type ADLLevel = "自立" | "一部介助" | "全介助";
// 移乗
export type TransferLevel = "自立" | "監視下" | "座れるが移れない" | "全介助";
// 平地歩行
export type WalkLevel = "自立" | "歩行器等";

// サービス利用
export type EndReason =
    | "居宅サービスの利用"
    | "介護老人福祉施設入所"
    | "介護老人保健施設入所"
    | "介護医療院入所"
    | "医療機関入院"
    | "死亡"
    | "介護サービス利用をしなくなった"
    | "その他"

export type YesNo = "あり" | "なし"

// 認知症の診断
export type Dementia = | "アルツハイマー病" | "血管性認知症" | "レビー小体病" | "その他";

// Vitality Index
//意思疎通
export type Communication =
    | "自分から挨拶する、話しかける"
    | "挨拶、呼びかけに対して返答や笑顔が見られる"
    | "反応がない"
// 起床
export type WakeUp =
    | "いつも定時に起床している"
    | "起こさないと起床しないことがある"
    | "自分から起床することはない"

// 排便
export type Discharge =
    | "いつも自ら便意尿意を伝える、あるいは自分で排尿、排便を行う"
    | "時々、尿意便意を伝える"
    | "排便に全く関心がない"

// リハビリ・活動
export type Rehabilitation =
    | "自らリハビリに向かう、活動を求める"
    | "促されて向かう"
    | "拒否、無関心"

export type LIFEFormat = {
    // 【利用者情報】
    "名前": string,
    "生年月日": Date,
    "保険者番号": null | string,
    "被保険者番号": null | string,
    "性別": Sex,

    // 【基本情報】
    "要介護度": CareLevel,
    "障害高齢者の日常生活自立度": IndependenceLevelDisabilities,
    "認知症高齢者の日常生活自立度": IndependenceLevelDementia,
    "評価日": Date,
    "評価時点": "サービス利用開始時" | "サービス利用中" | "サービス利用終了時"
    //【総論】
    "診断名": string[],
    "緊急入院時の状況": {
        "入院日": "",
        "受療時の主訴": "発熱" | "転倒" | "その他",
        "その他": string,
    }[],
    "服薬情報": {
        "薬剤名": string
    }[],
    // 家族
    "家族の状況": "同居" | "独居",

    // ADL
    "食事": ADLLevel,
    "椅子とベッド間の移乗": TransferLevel,
    "整容": ADLLevel,
    "トイレ動作": ADLLevel,
    "入浴": ADLLevel,
    "平地歩行": WalkLevel,
    "階段昇降": ADLLevel,
    "更衣": ADLLevel,
    "排便コントロール": ADLLevel,
    "排尿コントロール": ADLLevel
    "サービス利用終了理由": {
        "サービス利用終了日": Date,
        "終了理由": EndReason,
        "その他": string,
    },

    //【口腔・栄養】
    "身長": string,
    "体重": string,
    "義歯の使用": YesNo,
    "むせ": YesNo,
    "歯の汚れ": YesNo,
    "歯肉の腫れ出血": YesNo

    // 【認知症】
    "認知症の診断": {
        "診断名": Dementia,
        "その他": string,
    }
    //【Vitality Index】
    "意思疎通": Communication,
    "起床": WakeUp,
    "排泄": Discharge,
    "リハビリ": Rehabilitation,
}