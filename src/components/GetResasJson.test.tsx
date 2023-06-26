import GetResasJson from "./GetResasJson";

test("fetchが正しく機能するか？", async () => {
    const apikey = process.env.REACT_APP_RESAS_API_KEY;
    const headers: Record<string, string> = {
        "X-API-KEY": apikey !== undefined ? apikey : "",
        "Content-Type": "application/json",
    };
    const requestOptions: RequestInit = {
        headers: headers,
    };

    const mockJson = { id: 1, name: "test" };

    // APIの呼び出しをモック化
    global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve(mockJson),
    });

    //正しく取得されるか（都道府県一覧）
    expect(await GetResasJson("api/v1/prefectures")).toEqual(mockJson);

    // APIが正しく呼び出されたかを確認
    expect(fetch).toHaveBeenCalledWith(
        "https://opendata.resas-portal.go.jp/api/v1/prefectures",
        requestOptions
    );
});
