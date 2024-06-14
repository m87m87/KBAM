import {React, useEffect, useMemo, useState} from "react";
import hometext from "./hometext";
import inburmese from "./inburmese";
import comments from "./comments";
import commentsinburmese from "./commentsinburmese";
import translation from "./translation";
import translationinburmese from "./translationinburmese";
import Create from "./forms/Create";
import AxiosInstance from "./Axios";
import { MaterialReactTable} from 'material-react-table';





const Homepage = () => {
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
            headerAlign: 'center',

            muiTableBodyCellProps: {align: 'center'},
            muiTableFooterCellProps: {align: 'center'},
            muiTableHeadCellProps: {align: 'center'},


        },
        ],
        [],
    );

    return (
        <div className="title">
            <h4>Our Purpose</h4>
            <p>{hometext}</p>
            <p>{inburmese}</p>

            <div className="comments">
                <h4>Comments</h4>
                <p>{comments}</p>
                <p>{commentsinburmese}</p>
            </div>
            <div className="translatecredit">
                <p>{translation}</p>
                <p>{translationinburmese}</p>

            </div>
            <div>
                <Create/>
                <p>..All comments should be displayed here..</p>
                <div className="col-center">
                { loading ? <p>Loading data...</p> :
                <MaterialReactTable columns={columns} data={myData} />
                }
            </div>

            </div>
        </div>
    );
        
}

export default Homepage;