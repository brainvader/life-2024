
import styles from '../styles/care-level.module.css'

import { CARE_LEVELS } from '@/lib/definitions';

import { RadioGroup } from './ui/radio-group';

type CareLevelProps = {
    title: string,
}

export function CareLevel({ title }: CareLevelProps) {
    return (
        <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{title}</legend>
            <RadioGroup name='care level' labels={CARE_LEVELS} />
        </fieldset>
    )
}