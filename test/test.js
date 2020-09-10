const { BotProtectApi } = require('../');

const BotProtect = new BotProtectApi({
	publicKey: 'W0TlRhKuMfUCcLaijQxqFF_ymSlFdgwc',
	privateKey: '6fPb4vzIXsXkaCb8Nb82gam8nNDSXAxdnr6tEfpI9emYUgdZdlMnW1GE7dK4NYTt',
	showFingerprint: true
});

(async () => {
	let res = await BotProtect.verifyAsync('7797ebbb10b7ceeba5ba5e9b86dc555c|Wlbz_H0iPjqOvvUBrMJLDe8LRTCzmDZ0');
	console.log(res);
})();

BotProtect.verify('7797ebbb10b7ceeba5ba5e9b86dc555c|Wlbz_H0iPjqOvvUBrMJLDe8LRTCzmDZ0', (r) => {
	console.log(r);
});