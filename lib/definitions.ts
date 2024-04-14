export type CareLevel =
    | "要支援1"
    | "要支援2"
    | "要介護1"
    | "要介護2"
    | "要介護3"
    | "要介護4"
    | "要介護5"


export const CARE_LEVELS: Readonly<CareLevel[]> = ["要支援1", "要支援2", "要介護1", "要介護2", "要介護3", "要介護4", "要介護5"] as const;

export type Age = | "男" | "女";

export const AGE: Readonly<Age>[] = ["男", "女"] as const

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

export type EvaluationPoint = "サービス利用開始時" | "サービス利用中" | "サービス利用終了時";

export const EVALUATION_POINT: Readonly<EvaluationPoint>[] = ["サービス利用開始時", "サービス利用中", "サービス利用終了時"] as const;

export type Dementia = | "アルツハイマー病" | "血管性認知症" | "レビー小体病" | "その他"

export type Family = | "同居" | "独居"

export type EndReason =
    | "居宅サービスの利用"
    | "介護老人福祉施設入所"
    | "介護老人保健施設入所"
    | "介護医療院入所"
    | "医療機関入院"
    | "死亡"
    | "介護サービス利用をしなくなった"
    | "その他"

export type User = {
    name: string,
    birthday: string,
    age: Age,
    careLevel: CareLevel,
    evaluationDay: string,
    evaluationPoint: EvaluationPoint,
    independenceLevelWithDisabilities: IndependenceLevelWithDisabilities,
    independenceLevelWithDementia: IndependenceLevelWithDementia,
    diagnosis: string[],
    dementia: Dementia | null,
    family: Family,
    endDay: string,
    endReason: EndReason
}
