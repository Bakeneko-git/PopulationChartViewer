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
    const [chartData, setChartData] = useState({});
    const [categories, setCategories] = useState([]);
    const ChartDataUpdate = (data:any) => {
        setChartData(data)
    }
    const PrefecturesUpdate = async (data: any) => {
        await setPrefecturesJson(data);
    };
    const PrefecturesChecked = (data:any) => {
        const type = 0;
        setPrefectures(data);
        //表示データを変更
        const checkedPref = Object.keys(data)
            .filter(key => data[key].isChecked === true)
        const setData = checkedPref.map((pref) => {
                let categories = data[pref].data[type].data.map((item:any) => item.year);
                console.log(categories);
                let addObj = {
                    "name" : pref,
                    "data" : data[pref].data[type].data.map((item:any) => item.value)
                }
                setCategories(categories);
                return addObj;
            })
        ChartDataUpdate(setData)
    };
    useEffect(() => {
        (async () => {
            //初回実行で都道府県名を取得
            const result = await GetPrefecturesJson();
            const transformdData: any = {};
            PrefecturesUpdate(result);
            result.result.forEach((item: any) => {
                transformdData[item.prefName] = {
                    isChecked : false,
                    prefCode : item.prefCode,
                    data : undefined
                }
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
                categories={categories}
                data={chartData}
            />
        </>
    );
};

export default App;
