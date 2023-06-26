import GetResasJson from "./GetResasJson";

const GetPrefecturesJson = async () => {
    const requrl = "api/v1/prefectures";
    const result = await GetResasJson(requrl);
    return result;
};

export default GetPrefecturesJson;
