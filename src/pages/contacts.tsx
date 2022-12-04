import Heading from "@/components/Heading";
import { mockDataContacts } from "@/data/mockData";
import { getColors } from "@/styles/theme";
import { IContact } from "@/utils/interfaces";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { NextSeo } from "next-seo";

const Contacts = () => {
	const theme = useTheme();
	const colors = getColors(theme.palette.mode);

	const columns: GridColDef<IContact>[] = [
		{ field: "id", headerName: "ID", flex: 0.5 },
		{ field: "registeredId", headerName: "Registered ID" },
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "age",
			headerName: "Age",
			type: "number",
			headerAlign: "left",
			align: "left",
		},
		{ field: "email", headerName: "Email", flex: 1 },
		{ field: "phone", headerName: "Phone", flex: 1 },
		{ field: "address", headerName: "Address", flex: 1 },
		{ field: "city", headerName: "City", flex: 1 },
		{ field: "zipCode", headerName: "Zip Code", flex: 1 },
	];

	return (
		<Box component="section" title="team">
			<NextSeo
				title="ADMIN | Contacts"
				description="Contacts page for admin"
			/>
			<Heading
				text="CONTACTS"
				subText="List of contact for future reference"
			/>
			<Box
				height="75vh"
				mb="2.5rem"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						border: "none",
						outline: "none",
					},
					"& .name-column--cell": {
						color: colors.greenAccent[300],
					},
					"& .MuiDataGrid-columnHeaders": {
						background: colors.blueAccent[700],
						borderBottom: "none",
					},
					"& .MuiDataGrid-footerContainer": {
						background: colors.blueAccent[700],
						borderTop: "none",
					},
					"& .MuiDataGrid-virtualScrollbar": {
						background: colors.primary[400],
					},
					"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
						color: colors.grey[100],
					},
				}}
			>
				<DataGrid
					rows={mockDataContacts}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	);
};

export default Contacts;
