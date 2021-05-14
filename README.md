# Twitter Thread Reader

This thread reader application can only read recent threads due to Twitter API limitation.

Example thread id `1392377427381399558`.

This application uses:
* [craco](https://github.com/gsoft-inc/craco), to add tailwind support without ejecting
* [tailwind](https://tailwindcss.com/), for styles
* [nodemon](https://nodemon.io/), to reload server when we update the code
* [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme), to run client and server simultaneously

## Notes

### Get Twitter type definitions

We use [openapi-typescript](https://github.com/drwpow/openapi-typescript) to generate the types from the openapi spec.

```
$ npx openapi-typescript https://api.twitter.com/2/openapi.json --output twitter.ts
```

### Generate Server type declarations

`tsc --declaration`