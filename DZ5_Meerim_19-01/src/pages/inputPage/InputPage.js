import {useDispatch, useSelector} from "react-redux";
import {addNumberAction, clearNum, updateInp} from "../../redux/actions";

export default function InputPage(){
    const dispatch = useDispatch()
    const {list} = useSelector(state => state.inputReducer)
    const {input} = useSelector(state => state.inputReducer)

    const addNum = () => {
        dispatch(addNumberAction(input))
    }

    const clearList = () => {
        dispatch(clearNum())
    }

    const update = ({target}) => {
        dispatch(updateInp(target.value))
    }

    return <>
        <input type="number" value={input} onChange={update}/>
        <button onClick={addNum}>Add</button>
        <button onClick={clearList}>Clear</button>

        {
            list.map((e, i)=> <div key={i}>
                <p>{e}</p>
            </div>)
        }
    </>
}