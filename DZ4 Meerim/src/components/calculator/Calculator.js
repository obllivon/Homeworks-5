import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {plusChange} from "../../redux/actions";
import {minusChange} from "../../redux/actions";
import {umnChange} from "../../redux/actions";
import {delChange} from "../../redux/actions";
import styles from './calculator.module.css'

export default function Calculator(){
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const result = useSelector(state => state.result)
    const dispatch = useDispatch()

    const plus = () => {
        dispatch(plusChange((Number(num1) + Number(num2))))
    }

    const minus = () => {
        dispatch(minusChange(num1 - num2))
    }

    const umn = () => {
        dispatch(umnChange(num1 * num2))
    }

    const del = () => {
        dispatch(delChange(num1 / num2))
    }

    return <>
        <h2 className={styles.title}>Calculator</h2>
        <div className={styles.calculatorContainer}>
            <div className={styles.calculatorInputContainer}>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} className={styles.calculatorInput}/>
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} className={styles.calculatorInput}/>
            </div>
            <br/>
            <div className={styles.calcButton}>
                <button onClick={plus} className={styles.calculatorButton}>+</button>
                <button onClick={minus} className={styles.calculatorButton}>-</button>
                <button onClick={umn} className={styles.calculatorButton}>*</button>
                <button onClick={del} className={styles.calculatorButton}>/</button>
            </div>
            <br/>
            {
                num1 > 0 || num2 > 0
                    ?
                    <>
                        <h2>{result}</h2>
                    </>
                    :
                    <span>FULL ANSWER Calculator</span>
            }
        </div>
    </>
}