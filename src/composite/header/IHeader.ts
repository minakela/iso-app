export default interface IHeader {
	links: ILink[];
	showLogout: boolean;
}
interface ILink {
	href: string;
	label: string;
}
