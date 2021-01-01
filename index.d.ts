declare module 'botprotect' {
	export type Options = {
		publicKey: string,
		privateKey: string,
		showFingerprint: boolean
	};

	export type BotProtectResponseError = {
		error: boolean,
		detail: string,
	}
	
	export type BotProtectResponse = {
		human: boolean,
		clientIp: string,
		isRdp: boolean,
		isVNCServer: boolean,
		solveTime: number,
		userAgent: string,
		deviceBrowserFingerprint?: string
	}
	
	export class BotProtectApi {
		constructor(opts: Options);
		
		verifyToken(token: string) : Promise<BotProtectResponseError | BotProtectResponse>;
		verify(token: string, cb?: any) : Promise<BotProtectResponseError | BotProtectResponse> | void;
	}
}