import Item from './Item';

const List = ({ list }) => {
    return (
        <table className='table is-fullwidth'>
            <tbody>
                {
                    list.map(({ objectID, ...item }) => (
                        <Item key={objectID} {...item} />))
                }
            </tbody>
        </table>
    );
};

export default List;