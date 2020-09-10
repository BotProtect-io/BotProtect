# BotProtect API
JavaScript API for [BotProtect APIv1](https://botprotect.io)

## Installation
```
$ npm install botprotect
```

## Usage

You must be a registered client to use this API. Please [request a demo](https://botprotect.io/demo) on our website. Already registered? Here is how you use it!

To initiate the library:
```js
const { BotProtectApi } = require('botprotect');

const BotProtect = new BotProtectApi({
	publicKey: 'YOUR_PUBLIC_KEY', // String
	privateKey: 'YOUR_PRIVATE_KEY', // String
	showFingerprint: true // Boolean
});
```

To verify user token:

### Examples

#### ASYNC
```js
(async () => {
	let res = await BotProtect.verifyAsync('USER_TOKEN');
	console.log(res);
})();
```
#### SYNC

```js
BotProtect.verify('USER_TOKEN', (res) => {
	console.log(res);
});
```

### RETURN

```json

{
    "human": BOOLEAN,
    "clientIp": STRING,
    "isRdp": BOOLEAN,
    "isVNCServer": BOOLEAN,
    "solveTime": INT,
    "userAgent": STRING,
    "deviceBrowserFingerprint": STRING
}
```

Learn more on [our api page](https://beta.botprotect.io/documentation/api).