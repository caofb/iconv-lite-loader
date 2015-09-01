iconv-lite-loader
=================
This is a webpack loader for opening files in arbitrary encodings.

ChangeLog
---------
v1.0.0 - Initial release 

Basic Usage
-----------
```
npm install iconv-lite-loader
```
The loader itself request the input as raw data, decodes it and exports the resulting string.
The iconv-lite library is used for that, because it doesn't need native bindings and claims to be faster than iconv.
It could be used with the "complete" iconv library with a few changes.
If you need it, please open a issue.

```js
//in webpack.config.js

module.exports = {
    module: {
        loaders: [
            { test: /\.txt(\?.*)?$/, loader: "inconv-lite?inputEncoding=iso-8859-1"}
        ]
    }
};
```
This will set the default encoding of txt files to ISO-8859-1.
You can override this (per request) by using a parameter:

```js
text = require("chinese.txt?inputEncoding=gb2312")
```

Requirements
------------
The only real dependency is the iconv-lite library.
This should hopefully build easily, even on windows.
If not, please let me hear about it.
