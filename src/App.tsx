import { useEffect, useState } from "react";
import "./App.css";
import { PrefecturesList, GetPrefecturesJson } from "./index";
import ChartView from "./components/ChartView";

const App = () => {
    const [prefecturesJson, setPrefecturesJson] = useState({
        message: "",
        result: [],
    });
    const [prefectures, setPrefectures] = useState({});
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
            <ChartView
                title="data"
                xAxisLabel="年"
                yAxisLabel="人口"
                categories={["1年目","2年目","3年目"]}
                data={[{name:"大阪",data:[2,1,3]},{name:"東京",data:[1,2,3]}]}
            />
        </>
    );
};

export default App;
