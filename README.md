###
A React app which can be used to see the detailed information about books from GoodReads.com.

### MOCKUP
I created the following wireframe to decide on the key features of the prospective product.
![](mockup.png)

### SETUP
1. The project is based upon `Next.js`.
2. The project follows `styled-css` methodology for styling, due to Next.js.
3. All the major React components can be found under `components` folder.
4. For state management, the project uses Redux. 
5. All state management and data fetching logic can be found under `redux` folder.
6. The production site is hosted on Heroku. Check it out.

### RUNNING AND DEBUGGING
1. To start the development server
```
npm run dev
```

2. To run tests
```
npm run test
```

3. To run the linter
```
npm run lint
```

4. To fix common linting errors
```
npm run lint -- --fix
```

### FUTURE IMPROVEMENTS
- Development Side:
  - Use something `Flow` or `React.propTypes` to follow strict typing.
  - Constants like developer keys etc., can be stored and loaded with something like `dot-env`.
  - Ensure consistent `BEM` based naming convention for CSS classes.

- UI/UX Side:
  - As of now, an in-transition search cannot be cancelled, would like to make it cancellable.
  - Under the `Description` section, the app renders CDATA, instead of plain text. It could be handled appropriately.