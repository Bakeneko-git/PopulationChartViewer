import { render, screen } from "@testing-library/react";
import PrefectureItem from "./PrefectureItem";

test("PrefecutureItemが与えられた都道府県を表示する", () => {
    const prefectureName = "東京都";
    const mockFunction = jest.fn();
    //対象コンポーネント
    render(
        <PrefectureItem prefecture={prefectureName} onChange={mockFunction} />
    );
    //テスト
    const prefectureNameOutput = screen.getByText(new RegExp(prefectureName));
    expect(prefectureNameOutput).toBeInTheDocument();
});
