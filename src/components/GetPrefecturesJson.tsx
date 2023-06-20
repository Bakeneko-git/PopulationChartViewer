const GetPrefecturesJson = (callback: CallableFunction) => {
    const apikey = process.env.REACT_APP_RESAS_API_KEY;
    const headers: Record<string, string> = {
        "X-API-KEY": apikey !== undefined ? apikey : "",
        "Content-Type": "application/json",
    };
    const requestOptions: RequestInit = {
        headers: headers,
    };
    fetch(
        "https://opendata.resas-portal.go.jp/api/v1/prefectures",
        requestOptions
    )
        .then((response) => response.json())
        .then((data) => callback(data));
};

export default GetPrefecturesJson;
