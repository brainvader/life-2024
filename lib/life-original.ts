export type ADL =
    | "食事"
    | "椅子とベッド間の移乗"
    | "整容"
    | "トイレ動作"
    | "入浴"
    | "平地歩行"
    | "階段昇降"
    | "更衣"
    | "排便コントロール"
    | "排尿コントロール"

export type VitalityIndex =
    | "起床"
    | "意思疎通"
    | "排せつ"
    | "リハビリ"

export type LIFEOriginalKey =
    | "障害高齢者の日常生活自立度"
    | "認知症高齢者の日常生活自立度"
    | "同居家族等"
    | ADL
    | "身長"
    | "体重"
    | "認知症の診断"
    | VitalityIndex

export const LIFEOriginalKeys: Readonly<LIFEOriginalKey[]> = [
    "障害高齢者の日常生活自立度",
    "認知症高齢者の日常生活自立度",
    "同居家族等",
    "食事",
    "椅子とベッド間の移乗",
    "整容",
    "トイレ動作",
    "入浴",
    "平地歩行",
    "階段昇降",
    "更衣",
    "排便コントロール",
    "排尿コントロール",
    "身長",
    "体重",
    "認知症の診断",
    "起床",
    "意思疎通",
    "排せつ",
    "リハビリ",
]

export const LIFEOriginalFormat: Record<LIFEOriginalKey, string> = {
    "障害高齢者の日常生活自立度": "",
    "認知症高齢者の日常生活自立度": "",
    "同居家族等": "",
    "食事": "",
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
    "認知症の診断": "",
    "起床": "",
    "意思疎通": "",
    "排せつ": "",
    "リハビリ": ""
}