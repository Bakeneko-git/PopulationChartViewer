import { useEffect, useState } from "react";
import "./App.css";
import { PrefectureItem, GetPrefecturesJson } from "./index";

const App = () => {
    const [prefecturesJson, setPrefecturesJson] = useState("");
    const prefecturesUpdate = (data: string) => {
        setPrefecturesJson(data);
    };
    useEffect(() => {
        //初回実行で都道府県名を取得
        GetPrefecturesJson(prefecturesUpdate);
    }, []);
    return (
        <>
            <h1>YumemiAssignment</h1>
        </>
    );
};

export default App;
