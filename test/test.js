const { BotProtectApi } = require('../');

const BotProtect = new BotProtectApi({
	publicKey: 'test',
	privateKey: 'test',
	showFingerprint: true
});

(async () => {
	let res = await BotProtect.verify('7797ebbb10b7ceeba5ba5e9b86dc555c|Wlbz_H0iPjqOvvUBrMJLDe8LRTCzmDZ0');
	console.log(res);
})();

BotProtect.verify('7797ebbb10b7ceeba5ba5e9b86dc555c|Wlbz_H0iPjqOvvUBrMJLDe8LRTCzmDZ0', (r) => {
	console.log(r);
});