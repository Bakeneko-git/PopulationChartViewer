import { render, screen } from "@testing-library/react";
import GetPrefecturesJson from "./GetPrefecturesJson";
import exp from "constants";

test("都道府県一覧を取得できているか", async () => {
    const apikey = process.env.REACT_APP_RESAS_API_KEY;
    const headers: Record<string, string> = {
        "X-API-KEY": apikey !== undefined ? apikey : "",
        "Content-Type": "application/json",
    };
    const requestOptions: RequestInit = {
        headers: headers,
    };

    const mockJson = { id: 1, name: "test" };
    let resultJson = undefined;

    // APIの呼び出しをモック化
    global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve(mockJson),
    });

    GetPrefecturesJson((data: any) => {
        //正しく取得されるか
        expect(data).toEqual(mockJson);
    });

    // APIが正しく呼び出されたかを確認
    expect(fetch).toHaveBeenCalledWith(
        "https://opendata.resas-portal.go.jp/api/v1/prefectures",
        requestOptions
    );
});
