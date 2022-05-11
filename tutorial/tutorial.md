# Into Tutorial


::: warning Important
Do NOT SHARE you account token!
:::

## Getting Started

**To get started with the API, send `$crate` in your server.** It doesn't matter where you do it, Watcher will DM you your token. If you forget your token it simply going to [Dashboard](https://watcherbot.xyz/) and going to your profile:


<img :src="$withBase('https://i.ibb.co/qCpPCtf/szqec43ft-r6bnjh.png')" alt="foo">


Once you on you profile page, you have the options to re-generate your token:
<img :src="$withBase('https://i.ibb.co/SRn2WpB/ewsrgearg.png')" alt="foo">

## Token Ranks

### Basic:

:::tip Limit
```
Route: /v1/bot/stats/

Request Type: ANY

Requests Allowed Per X Minute(s): 20 / 5m

Punishment if Exceeded: Unknown Block
```
:::

### Premium:

:::tip Limit
```
Route: /v1/bot/stats/

Request Type: ANY

Requests Allowed Per X Minute(s): 100 / 5m

Punishment if Exceeded: Unknown Block
```
:::

### Company:

:::tip Limit
```
Route: /v1/bot/stats/

Request Type: ANY

Requests Allowed Per X Minute(s): 250 / 5m

Punishment if Exceeded: Unknown Block
```
:::


## Rate Limits

:::tip Limit

```js
401: Unauthorized
200: Approved
501: Invalid Token/password Provided
```
:::