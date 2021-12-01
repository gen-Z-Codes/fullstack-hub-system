import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, AddOutlined, GroupAddOutlined, SendOutlined } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            {/* <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];
  

  
  
  return (
    <div className="userList">
      <div>
        <div className="customerlistbuttons">
            <Link to="/newUser">
              <button className="userButton">Add New 
              <AddOutlined className="buttonIcon"/>
              </button>
            </Link>

            <button className="userButton groupButton">Group
              <GroupAddOutlined className="buttonIcon"/>
                {/* onClick={() => handleDelete(params.row.id)} */}
              </button>
        
        
              <button className="userButton deleteButton">Delete
              <DeleteOutline className="buttonIcon"/>
                {/* onClick={() => handleDelete(params.row.id)} */}
              </button>

              <button className="userButton sendMesaageButton">Send Message
              <SendOutlined className="buttonIcon"/>
                {/* onClick={() => handleDelete(params.row.id)} */}
              </button>
  
       
          </div>

      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection

      />
    </div>
  );
}
