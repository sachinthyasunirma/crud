import Status from '../../Components/Status/Status';
import Dropdown from '../../Components/Dropdown/Dropdown';


//customized column
export const columns = [
    {
        name: '#',
        selector: (row,index) => index+1
    },
    {
        name: 'Question',
        selector: row => row.question,
    },
    {
        name: 'Category',
        selector: row => row.category.categoryName,
    },
    {
        name: 'Status',
        cell: (row) => {
            return (<Status status={row.status} />)
        }
    },
    {
        name: 'Action',
        cell: (row) => {
            return (<Dropdown isActive={row.isActive} id={row._id}/>)
        },
        allowOverflow: 'visible',
        button: true,
        width: '56px',
    },
];