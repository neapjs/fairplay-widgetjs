# Where Am I Hosted?

[https://unpkg.com/@neap/fairplay-widgetjs](https://unpkg.com/@neap/fairplay-widgetjs)

# How To
## How To Use Me

Simply run this:

```
npm run dev
```

This will host 2 versionof the widget:

__Dev__: [http://localhost:8080/dev](http://localhost:8080/dev)
__Prod__: [http://localhost:8080/prod](http://localhost:8080/prod)

 Prod uses the minified/uglified ES5 version of the code (to see how to compile that code, jump to the  section). 

## How To Compile The Code To ES5

Simply run:

```
npm run build
```

This will produce multiple artefacts under the __dist__ folder.

## How To Deploy A New Version

1. Make sure the code is linted properly: `npm run lint`
2. Build all the artefacts: `npm run build`
3. Commit your changes: `git cm 'your message'`
4. Get the current verison: `npm run v`
5. Bump to higher version: `npm run rls <the new version>`
6: Publish: `npm run push`

This will host the minified and unminified versions to [https://unpkg.com/@neap/fairplay-widgetjs](https://unpkg.com/@neap/fairplay-widgetjs).