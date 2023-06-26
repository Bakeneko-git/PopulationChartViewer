const TypeSelector = (props:any) => {
    return (
        <select onChange={e => props.onChange(e)}>
            <option value="0">総人口</option>
            <option value="1">年少人口</option>
            <option value="2">生産年齢人口</option>
            <option value="3">老年人口</option>
        </select>
    );
};

export default TypeSelector;
