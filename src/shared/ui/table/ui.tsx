import './style.scss';

type Column = string;

interface Props {
    columns: Column[];
    columnsToText: Record<Column, string>;
    data: Array<Record<Column, string | number>>;
}

export const Table = ({ columns, columnsToText, data }: Props) => {
    return (
        <div className='table__wrapper'>
            <table className='table'>
                <thead>
                    <tr className='table__row'>
                        {columns.map(el => (
                            <th key={el}>{columnsToText[el]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr className='table__row' key={row.toString()}>
                            {columns.map(el => (
                                <td key={el}>{row[el]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
