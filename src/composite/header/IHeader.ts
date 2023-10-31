export default interface IHeader {
	links: ILink[];
	isOnLoginPage: boolean;
}
interface ILink {
	href: string;
	label: string;
}
