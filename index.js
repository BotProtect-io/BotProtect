const request = require('request');

class BotProtectApi {
	clientPublicKey = '';
	clientPrivateKey = '';
	showFP = true;
	
	options = {
		headers: {
			'user-agent': 'BotProtectAPI v1.0.0',
		},
		json: true,
		timeout: 3000,
	};
	
	APIEndPoint = 'https://api.botprotect.io/api/v1/verify?';
	
	constructor(opts = {}) {
		if(!opts.publicKey) {
			throw new Error('Please specify a public key. Dont have one? Request a demo now at https://botprotect.io/demo !');
		} else if(!opts.privateKey) {
			throw new Error('Please specify a private key. Dont have one? Request a demo now at https://botprotect.io/demo !');
		}
		
		this.clientPublicKey = opts.publicKey;
		this.clientPrivateKey = opts.privateKey;
		if(opts.showFingerprint !== undefined || opts.showFingerprint !== null) this.showFP = opts.showFingerprint;
		
		this.APIEndPoint += `publicKey=${this.clientPublicKey}&privateKey=${this.clientPrivateKey}&showFP=${this.showFP}&token=`;
	}
	
	async verifyToken(token) {
		if(token.includes('|')) token = encodeURIComponent(token);
		return new Promise(async (resolve, reject) => {
			request.get({...this.options, ...{url: `${this.APIEndPoint}${token}`}}, (e, r, b) => {
				if(e) {
					reject(`Something went wrong while attempting API call -> ${e}`);
				} else {
					if(b) {
						if(b.err) {
							resolve({
								error: true,
								detail: b.reason
							});
						} else {
							resolve(b);
						}
					} else {
						reject(`Something went wrong.`);
					}
				}
			});
		});
	}
	
	verify(token, cb) {
		if(cb) {
			this.verifyToken(token).then(cb).catch((e) => {
				cb(e);
			});
		} else {
			return this.verifyToken(token);
		}
	}
}


module.exports = { BotProtectApi };