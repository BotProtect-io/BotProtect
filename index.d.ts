declare module 'botprotect' {
	export type Options = {
		publicKey: string,
		privateKey: string,
		showFingerprint: boolean
	};

	export type BotProtectResponse = {
		error?: boolean,
		detail?: string,
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
		
		verifyToken(token: string) : Promise<BotProtectResponse>;
		verify(token: string, cb?: any) : Promise<BotProtectResponse> | void;
	}
}