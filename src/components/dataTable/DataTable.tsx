import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import "./datatable.scss";
import { Link } from "react-router-dom";
import { deleteIcon, viewIcon } from "../../assets/icons";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    console.log(id + "ok");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img className="img-icon" src={viewIcon} alt="view-icon" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img className="img-icon" src={deleteIcon} alt="delete-icon" />
          </div>
        </div>
      );
    },
  };
  return (
    <div className="datatable">
      <DataGrid
        className="data-grid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 500,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
