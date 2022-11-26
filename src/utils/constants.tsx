import {
	HomeOutlined,
	PeopleOutline,
	ContactsOutlined,
	ReceiptOutlined,
	PersonOutline,
	CalendarTodayOutlined,
	HelpOutlined,
	BarChartOutlined,
	PieChartOutlineOutlined,
	TimelineOutlined,
	MapOutlined,
} from "@mui/icons-material";
import { ISidebarLink } from "@/utils/interfaces";

export const SIDEBAR_ITEMS: Record<string, ISidebarLink[]> = {
	first: [
		{
			icon: <HomeOutlined fontSize="small" />,
			text: "Dashboard",
			route: "/",
		},
	],
	data: [
		{
			icon: <PeopleOutline fontSize="small" />,
			text: "Manage Team",
			route: "/team",
		},
		{
			icon: <ContactsOutlined fontSize="small" />,
			text: "Contacts Information",
			route: "/contacts",
		},
		{
			icon: <ReceiptOutlined fontSize="small" />,
			text: "Invoices Balances",
			route: "/invoices",
		},
	],
	pages: [
		{
			icon: <PersonOutline fontSize="small" />,
			text: "Profile Form",
			route: "/form",
		},
		{
			icon: <CalendarTodayOutlined fontSize="small" />,
			text: "Calender",
			route: "/calender",
		},
		{
			icon: <HelpOutlined fontSize="small" />,
			text: "FAQ Page",
			route: "/faq",
		},
	],
	Charts: [
		{
			icon: <BarChartOutlined fontSize="small" />,
			text: "Bar Chart",
			route: "/bar",
		},
		{
			icon: <PieChartOutlineOutlined fontSize="small" />,
			text: "Pie Chart",
			route: "/pie",
		},
		{
			icon: <TimelineOutlined fontSize="small" />,
			text: "Line Chart",
			route: "/line",
		},
		{
			icon: <MapOutlined fontSize="small" />,
			text: "Geography Chart",
			route: "/geography",
		},
	],
};
