import React, { useState } from 'react'
import DataTable from 'react-data-table-component';


//custom stayles 
const customStyles = {
    rows: {
        style: {
            minHeight: '60px', // override the row height
        },
    },
};

function Table({columns,data,setPerpage,setPage,totalRows}) {

    // const handlePerRowsChanage =(newPerPage)=>{
    //     setPerpage(newPerPage)
    //     console.log(newPerPage);
    // }
    // const handlePageChange = (page) =>{
    //     setPage(page)
    //     console.log(page);
    // }
    return (
        <div className='container-fluid mb-4 rounded'>
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                pagination
                // paginationServer
                // paginationTotalRows={totalRows}
                // onChangeRowsPerPage={handlePerRowsChanage}
                // onChangePage={handlePageChange}
            />
        </div>
    )
}

export default Table