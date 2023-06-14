import {useState} from "react"

interface ItemProps{
    prefecture: string;
    isChecked: boolean;
}

const PrefectureItem = (props :ItemProps) =>{
    const [isChecked, setIsChecked] = useState(true);
    return (
        <label>
            <input
                type="checkbox"
                checked={props.isChecked}
            />
            {props.prefecture}
        </label>
    );
}

export default PrefectureItem;