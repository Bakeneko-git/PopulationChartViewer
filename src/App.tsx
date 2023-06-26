import { useEffect, useState } from "react";
import "./App.css";
import { PrefecturesList, GetPrefecturesJson, TypeSelector} from "./index";
import ChartView from "./components/ChartView";

const App = () => {
    const [prefecturesJson, setPrefecturesJson] = useState({
        message: "",
        result: [],
    });
    const [prefectures, setPrefectures] = useState({});
    const [chartData, setChartData] = useState({});
    const [categories, setCategories] = useState([]);
    const viewChoice = ["総人口","年少人口","生産年齢人口","老年人口"]
    const [viewSelectNumber, setViewSelectNumber] = useState(0);
    const [viewSelectText, setViewSelectText] = useState(viewChoice[0]);

    const ChangeViewType = (e:any) => {
        const titleText = viewChoice[e.target.value];
        const num = e.target.value;
        setViewSelectNumber(num);
        setViewSelectText(titleText);
        ChangeViewData(num,prefectures)
    }
    const ChartDataUpdate = (data:any) => {
        setChartData(data)
    }
    const PrefecturesUpdate = (data: any) => {
        setPrefecturesJson(data);
    };
    const PrefecturesChecked = (data:any) => {
        setPrefectures(data);
        ChangeViewData(viewSelectNumber,data);
    };

    const ChangeViewData = (type :number,data:any) => {
        //表示データを変更
        const checkedPref = Object.keys(data)
            .filter(key => data[key].isChecked === true)
        const setData = checkedPref.map((pref) => {
                let categories = data[pref].data[type].data.map((item:any) => item.year);
                let addObj = {
                    "name" : pref,
                    "data" : data[pref].data[type].data.map((item:any) => item.value)
                }
                setCategories(categories);
                return addObj;
            })
        ChartDataUpdate(setData)
    }
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
            <div>
                <PrefecturesList
                    prefectures={prefectures}
                    onChange={PrefecturesChecked}
                />
            </div>
            <TypeSelector
                onChange={ChangeViewType}
            />
            <ChartView
                title={viewSelectText}
                xAxisLabel="年"
                yAxisLabel="人口"
                categories={categories}
                data={chartData}
            />
        </>
    );
};

export default App;
