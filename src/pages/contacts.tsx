import Heading from "@/components/Heading";
import { mockDataTeam } from "@/data/mockData";
import { getColors } from "@/styles/theme";
import { USER_ROLE_ICON } from "@/utils/constants";
import { ITeam } from "@/utils/interfaces";
import { TUserRole } from "@/utils/types";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Contacts = () => {
	const theme = useTheme();
	const colors = getColors(theme.palette.mode);

	const columns: GridColDef<ITeam>[] = [
		{ field: "id", headerName: "ID" },
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
			sortable: false,
		},
		{ field: "email", headerName: "Email", flex: 1 },
		{ field: "phone", headerName: "Phone", flex: 1 },
		{
			field: "access",
			headerName: "Access Level",
			flex: 1,
			renderCell: ({ row: { access } }) => (
				<Button
					variant="contained"
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "0.3rem",
						background:
							access === "admin"
								? colors.greenAccent[600]
								: colors.greenAccent[700],
						":hover": {
							background:
								access === "admin"
									? colors.greenAccent[600]
									: colors.greenAccent[700],
						},
					}}
				>
					{USER_ROLE_ICON[access as TUserRole]}
					<Typography
						color={colors.grey[100]}
						textTransform="capitalize"
					>
						{access}
					</Typography>
				</Button>
			),
		},
	];

	return (
		<Box component="section" title="team">
			<Heading text="CONTACTS" subText="Managing the Contacts" />
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
				}}
			>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</Box>
		</Box>
	);
};

export default Contacts;
