import React from 'react';

const List = (props) => {
    console.log(props)
    if (props.status === false) {
        return <div><table>
            <tr>
                <th>name</th>
                <th>title</th>
                <th>subject</th>
            </tr>
        </table></div>;
    }
    return (
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>title</th>
                    <th>subject</th>
                </tr>
            </table>

            {props.propsNotes.map((note, i) =>
            (
                <tr key={i}>
                    <td>{note.name}</td>
                    <td>{note.title}</td>
                    <td>{note.subject}</td>
                </tr>
            ))}


        </div>
    );
};

export default List;