import GetResasJson from "./GetResasJson";

const GetPopulationJson = async (prefCode:string) => {
    const requrl = "api/v1/population/composition/perYear?prefCode=" + prefCode + "&cityCode=-";
    const result = await GetResasJson(requrl);
    return result;
};

export default GetPopulationJson;