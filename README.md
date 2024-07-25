# MockServer

## Preparation

### Vapid-Keys
- Create a Vapid-Key-Pair.
- Create an `.env`-File
- Copy the content of `.env.example`-File
- Enter your created Vapid-Keys

### Install Dependencies

To install the dependencies run
```
pnpm i
```

## Start

To start the mock server run


```
node src/server.js
```

## Test Error Cases

To test different error cases change the `errorSetter` constant in the affected file and restart the server
