import { useEffect, useState } from "react";
import "./App.css";
import { PrefecturesList, GetPrefecturesJson } from "./index";

const App = () => {
    const [prefecturesJson, setPrefecturesJson] = useState({
        message: "",
        result: [],
    });
    const [prefectures, setPrefectures] = useState({
        東京都: false,
        大阪府: false,
        北海道: false,
    });
    const PrefecturesUpdate = async (data: any) => {
        await setPrefecturesJson(data);
    };
    const PrefecturesChecked = (event: any, index: string) => {
        setPrefectures({ ...prefectures, [index]: event.target.checked });
    };
    useEffect(() => {
        (async () => {
            //初回実行で都道府県名を取得
            const result = await GetPrefecturesJson();
            const transformdData: any = {};
            PrefecturesUpdate(result);
            result.result.forEach((item: any) => {
                transformdData[item.prefName] = false;
            });
            setPrefectures(transformdData);
        })();
    }, []);
    return (
        <>
            <h1>YumemiAssignment</h1>
            <PrefecturesList
                prefectures={prefectures}
                onChange={PrefecturesChecked}
            />
        </>
    );
};

export default App;
