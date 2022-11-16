import Item from './Item';

const List = ({ list }) => {
    return (
        <div>
            <ul>
                {
                    list.map(({ objectID, ...item }) => (
                        <Item key={objectID} {...item} />))
                }
            </ul>
        </div>
    );
};

export default List;