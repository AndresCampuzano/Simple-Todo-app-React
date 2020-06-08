# TODO app made in React

I made this simple react app to practice this.state and how we can modify it using this.setState.  [Live Demo](https://upbeat-goldstine-913e83.netlify.app/)

```js
this.state = {
  newItem: '',
  list: []
};
```
```js
this.setState({
  newItem: value
});
```

Also each item can be deleted by .filter().

```js
deleteItem = id => {
  const list = [...this.state.list];
  const listFiltered = list.filter(e => e.id !== id);
  this.setState({
  list: listFiltered
  });
};

```

### Screenshot

![TODO image](https://raw.githubusercontent.com/AndresCampuzano/Simple-Todo-app-React/master/src/images/capture01.PNG)


## Install

If you want to see the app, please follow this steps:

```bash
git clone https://github.com/AndresCampuzano/Simple-Todo-app-React.git && cd todo-app && npm i && npm run start
```

## Start & watch

```bash
npm start
```
> Pull requests are welcome. They help me to improve.
