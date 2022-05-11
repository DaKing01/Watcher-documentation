# Into API


::: warning Important
Do NOT SHARE you account token!
:::


## Rate Limits

:::tip Limit

```js
401: Unauthorized
200: Approved
501: Invalid Token/password Provided
```
:::

## Getting Started


### Bot status

```
https://api.watcherbot.xyz/bot/status/:botid
```

* Authorization: ``Your token``
* BOTID: ``ID of the bot you want to get status of``


```js
//Node.js

const axios = require('axios').default;

await axios.post('https://api.watcherbot.xyz/bot/status/:botid', {
  headers: {
    'Authorization': 'fwrsg-edsgresgr-esgrsearg-grewsg'
    `BOTID`: `924540290461736971`
  }
}).then((response => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
```


