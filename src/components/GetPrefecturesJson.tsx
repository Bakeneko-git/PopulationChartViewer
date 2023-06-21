const GetPrefecturesJson = async () => {
    const apikey = process.env.REACT_APP_RESAS_API_KEY;
    const headers: Record<string, string> = {
        "X-API-KEY": apikey !== undefined ? apikey : "",
        "Content-Type": "application/json",
    };
    const requestOptions: RequestInit = {
        headers: headers,
    };
    const result = await fetch(
        "https://opendata.resas-portal.go.jp/api/v1/prefectures",
        requestOptions
    ).then((response) => response.json());
    return result;
};

export default GetPrefecturesJson;
