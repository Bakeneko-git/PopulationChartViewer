import PrefectureItem from "./PrefectureItem";

const PrefecturesList = (props: any) => {
    const prefectures = props.prefectures;
    return (
        <>
            {Object.entries(prefectures).map(([name, check]) => (
                <PrefectureItem key={name} prefecture={name} onChange={(event: any) => props.onChange(event,name)} />
            ))}
        </>
    );
};
export default PrefecturesList;
