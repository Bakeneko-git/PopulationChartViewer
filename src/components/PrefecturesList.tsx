import PrefectureItem from "./PrefectureItem";
import GetPopulationJson from "./GetPopulationJson";

const PrefecturesList = (props: any) => {
    const prefectures = props.prefectures;
    return (
        <>
            {Object.entries(prefectures).map(([name, data]) => (
                <PrefectureItem
                    key={name}
                    prefecture={name}
                    onChange={async (event: any) => {
                        const getData: any = data;
                        const population = event.target.checked
                            ? (await GetPopulationJson(getData.prefCode)).result
                                  .data
                            : undefined;
                        const setData = {
                            ...prefectures,
                            [name]: {
                                ...getData,
                                isChecked: event.target.checked,
                                data: population,
                            },
                        };
                        props.onChange(setData);
                    }}
                />
            ))}
        </>
    );
};
export default PrefecturesList;
