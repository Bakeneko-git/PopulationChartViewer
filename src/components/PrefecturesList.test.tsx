import { render, screen } from "@testing-library/react";
import PrefecturesList from "./PrefecturesList";

test("PrefecuturesListが与えられた都道府県配列を表示する", () => {
    const prefectures = {"東京都":false,"大阪府":true,"北海道":false};
    const mockOnChange = jest.fn();
    //対象コンポーネント
    render(
        <PrefecturesList prefectures={prefectures} onChange={mockOnChange}/>
    );
    //表示項目が期待通り揃うか？
    const prefectureName1 = screen.getByText(new RegExp("東京都"));
    expect(prefectureName1).toBeInTheDocument();
    const prefectureName2 = screen.getByText(new RegExp("大阪府"));
    expect(prefectureName2).toBeInTheDocument();
    const prefectureName3 = screen.getByText(new RegExp("北海道"));
    expect(prefectureName3).toBeInTheDocument();
});