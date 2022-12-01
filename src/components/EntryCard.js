export const EntryCard = (props) => {

    const { entryData } = props;

    return <>
        <div style={{
            display: 'flex',
            margin: '.5em 0em',
            backgroundColor: 'gold',
            height: '3em',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <span style={{ backgroundColor: 'red' }}>
                <h5>{ entryData.entryType }</h5>
            </span>
            <span style={{ backgroundColor: 'yellow' }}>
                { entryData.entry }
            </span>
            <span style={{ backgroundColor: 'green' }}>
                <button>Remove</button>
            </span>
        </div>
    </>
}