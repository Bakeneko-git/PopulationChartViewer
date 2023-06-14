import { useState } from "react";
import "./App.css";
import { PrefectureItem } from "./index";

const App = () => {
    const [prefecture, setPrefecture] = useState(true);
    const PrefectureChecked = (event: any) => {
        setPrefecture(event.target.checked);
    };
    return (
        <>
            <h1>YumemiAssignment</h1>
            <PrefectureItem prefecture="東京都" onChange={PrefectureChecked} />
        </>
    );
};

export default App;
