export type Date = {
    yyyy: string,
    mm: string,
    dd: string
}

// 要介護度
export type CareLevel =
    | "要支援1"
    | "要支援2"
    | "要介護1"
    | "要介護2"
    | "要介護3"
    | "要介護4"
    | "要介護5"

export const CARE_LEVELS: Readonly<CareLevel>[] = ["要支援1", "要支援2", "要介護1", "要介護2", "要介護3", "要介護4", "要介護5"] as const;

// 性別
export type Sex = | "男" | "女";

export const SEX: Readonly<Sex>[] = ["男", "女"] as const

// 障害高齢者の日常生活自立度
export type IndependenceLevelWithDisabilities =
    | "自立"
    | "J1"
    | "J2"
    | "A1"
    | "A2"
    | "B1"
    | "B2"
    | "C1"
    | "C2"

export const INDEPENDENCE_LEVEL_WITH_DISABILITIES: Readonly<IndependenceLevelWithDisabilities>[] = ["自立", "J1", "J2", "A1", "A2", "B1", "B2", "C1", "C2"] as const;

// 認知症高齢者の日常生活自立度
export type IndependenceLevelWithDementia =
    | "自立"
    | "Ⅰ"
    | "Ⅱa"
    | "Ⅱb"
    | "Ⅲa"
    | "Ⅲb"
    | "Ⅳ"
    | "M"

export const INDEPENDENCE_LEVEL_WITH_DEMENTIA: Readonly<IndependenceLevelWithDementia>[] = ["自立", "Ⅰ", "Ⅱa", "Ⅱb", "Ⅲa", "Ⅲb", "Ⅳ", "M"] as const

// 評価時点
export type EvaluationPoint = "サービス利用開始時" | "サービス利用中" | "サービス利用終了時";

export const EVALUATION_POINT: Readonly<EvaluationPoint>[] = ["サービス利用開始時", "サービス利用中", "サービス利用終了時"] as const;

// 主訴
export type Complaint = "発熱" | "転倒" | "その他";

export const COMPLAINT: Readonly<Complaint>[] = ["発熱", "転倒", "その他"] as const;

// 緊急入院の状況
export type Hospitalizations = {
    start: Date,
    complaints: Complaint,
    reason: string,
}

// 家族
export type Family = | "同居" | "独居";

// ADL全般
export type ADLLevel = "自立" | "一部介助" | "全介助";

// 移乗
export type TransferLevel = "自立" | "監視下" | "座れるが移れない" | "全介助";

// 平地歩行
export type WalkLevel = "自立" | "歩行器等";

export type ADL = {
    eating: ADLLevel, // 食事
    transferring: TransferLevel, // 移乗
    grooming: ADLLevel, // 整容
    toileting: ADLLevel, // トイレ動作
    bathing: ADLLevel, // 入浴
    walking: WalkLevel, // 平地歩行
    stairs: ADLLevel, // 階段昇降
    dressing: ADLLevel, // 更衣
    bladderControl: ADLLevel, // 排尿コントロール
    bowelsControl: ADLLevel, // 排便コントロール
};

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

export type End = {
    date: Date,
    reason: EndReason
}

// 義歯
export type Denture = "あり" | "なし";

export const DENTURE: Readonly<Denture>[] = ["あり", "なし"];

// むせ
export type Choke = Denture;

export const CHOKE = DENTURE;

// 歯の汚れ
export type Stain = Denture;

export const STAIN = DENTURE;

// 歯肉の腫れ・出血
export type Gum = Denture;

export const GUM = DENTURE;

// 認知症の診断
export type Dementia = | "アルツハイマー病" | "血管性認知症" | "レビー小体病" | "その他";

export const DEMENTIA: Readonly<Dementia>[] = ["アルツハイマー病", "血管性認知症", "レビー小体病", "その他"]

export type Communication =
    | "自分から挨拶する、話しかける"
    | "挨拶、呼びかけに対して返答や笑顔が見られる"
    | "反応がない"

export const COMMUNICATION: Readonly<Communication>[] = ["自分から挨拶する、話しかける", "挨拶、呼びかけに対して返答や笑顔が見られる", "反応がない"]

export type WakeUp =
    | "いつも定時に起床している"
    | "起こさないと起床しないことがある"
    | "自分から起床することはない"

export const WAKE_UP: Readonly<WakeUp>[] = ["いつも定時に起床している", "起こさないと起床しないことがある", "自分から起床することはない"]

// 排便
export type Discharge =
    | "いつも自ら便意尿意を伝える、あるいは自分で排尿、排便を行う"
    | "時々、尿意便意を伝える"
    | "排便に全く関心がない"

export const DISCHARGE: Readonly<Discharge>[] = ["いつも自ら便意尿意を伝える、あるいは自分で排尿、排便を行う", "時々、尿意便意を伝える", "排便に全く関心がない"]

// リハビリ・活動
export type Rehabilitation =
    | "自らリハビリに向かう、活動を求める"
    | "促されて向かう"
    | "拒否、無関心"

export const REHABILITATION: Readonly<Rehabilitation>[] = ["自らリハビリに向かう、活動を求める", "促されて向かう", "拒否、無関心"]

export type VitalityIndex = {
    communication: Communication,
    wakeUp: WakeUp,
    discharge: Discharge,
    rehabilitation: Rehabilitation,
}

export type User = {
    name: string,
    kana: string,
    birthday: Date,
    sex: Sex,
    insurerNumber: string,
    insuredNumber: string,
    careLevel: CareLevel,
    independenceLevelWithDisabilities: IndependenceLevelWithDisabilities,
    independenceLevelWithDementia: IndependenceLevelWithDementia,
    evaluationDay: Date,
    evaluationPoint: EvaluationPoint,
    diagnosis: string[],
    hospitalizations: Hospitalizations[],
    medicine: string[],
    family: Family,
    adl: ADL,
    endService: End,
    height: number,
    weight: number,
    denture: Denture,
    choke: Choke,
    stain: Stain,
    gum: Gum,
    dementia: {
        type: Dementia,
        cause: string
    },
    vitalityIndex: VitalityIndex
}
