export default interface IAuthService {
	login: (data: { email: string; password: string }) => Promise<string>;
}
