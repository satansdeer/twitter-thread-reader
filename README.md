# Twitter Thread Reader

This thread reader application can only read recent threads due to Twitter API limitation.

Example thread id `1392377427381399558`.

## Notes

### Get Twitter type definitions

We use [openapi-typescript](https://github.com/drwpow/openapi-typescript) to generate the types from the openapi spec.

```
$ npx openapi-typescript https://api.twitter.com/2/openapi.json --output twitter.ts
```

### Generate Server type declarations

`tsc --declaration`