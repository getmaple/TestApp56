## Test fails after upgrading to React Native 0.56.0 - Babel 7

* `yarn install`
* `yarn test`

The following error occurs if any component class method is a non arrow function:

```
TypeError: this._instance.render is not a function
```

In App.test.js, you will find two tests. One that passes and the second that fails.
