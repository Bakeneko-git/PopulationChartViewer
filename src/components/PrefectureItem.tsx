import {useState} from "react"

interface ItemProps{
    prefecture: string;
    onChange: any;
}

const PrefectureItem = (props :ItemProps) =>{
    return (
        <label>
            <input
                type="checkbox"
                onChange={props.onChange}
            />
            {props.prefecture}
        </label>
    );
}

export default PrefectureItem;