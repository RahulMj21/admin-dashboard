export interface IColorModeContext {
	toggleColorMode: () => void;
}
export interface ISidebarLink {
	icon: JSX.Element;
	text: string;
	route: string;
}

export interface ITeam {
	id: number;
	name: string;
	email: string;
	age: number;
	phone: string;
	access: string;
}
export interface IContact {
	id: number;
	name: string;
	email: string;
	age: number;
	phone: string;
	address: string;
	city: string;
	zipCode: string;
	registeredId: number;
}
