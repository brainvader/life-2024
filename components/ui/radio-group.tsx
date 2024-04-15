import styles from '../../styles/radio-group.module.css';

type RadioProps = {
    name: string,
    value: string,
}

export function Radio({ name, value }: RadioProps) {
    return <input type="radio" name={name} id={value} value={value} />
}

export type RadioGroupProps = {
    name: string,
    labels: Readonly<string[]>
}

export function RadioGroup({ name, labels }: RadioGroupProps) {
    return labels.map((label, index) => {
        return (
            <label className={styles.useInfoItem} key={index} >
                <Radio name={name} value={label} />
                {`${label}`}
            </label>
        )
    })
}