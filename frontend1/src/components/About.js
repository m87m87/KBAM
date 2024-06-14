import {React, useEffect, useMemo, useState} from "react";
import AxiosInstance from "./Axios";
import { MaterialReactTable} from 'material-react-table';

const Aboutpage = () => {

    const [myData,setMyData] = useState()
    const [loading,setLoading] = useState(true)

    const GetData = () => {
        AxiosInstance.get(`comments/`).then((res) =>{
            setMyData(res.data)
            console.log(res.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        GetData();
    },[])

    const columns = useMemo(
        () => [
        {
            accessorKey: 'comments', //access nested data with dot notation
            header: 'Comments',
            size: 150,
            muiTableBodyCellProps: {align: 'center'},
            muiTableFooterCellProps: {align: 'center'},
            muiTableHeadCellProps: {align: 'center'},



        },
        ],
        [],
    );


    return (

        <div className="title">
            <h4>This is my About Page. Should be more here.</h4>
            { loading ? <p>Loading data...</p> :
            <MaterialReactTable  columns={columns} data={myData} />
            }
        </div>
    )
}

export default Aboutpage;