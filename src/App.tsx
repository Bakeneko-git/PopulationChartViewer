import { useState } from "react";
import "./App.css";
import { PrefecturesList } from "./index";

const App = () => {
    const [prefectures, setPrefectures] = useState({"東京都":false,"大阪府":false,"北海道":false});
    const PrefecturesChecked = (event: any, index: string) => {
        setPrefectures({...prefectures, [index]:event.target.checked});
    };
    return (
        <>
            <h1>YumemiAssignment</h1>
            <PrefecturesList prefectures={prefectures} onChange={PrefecturesChecked} />
        </>
    );
};

export default App;
