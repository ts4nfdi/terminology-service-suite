# Developer Information

If you are locally developing this package, here is some required information to understand the setup.

## Why patch-package and the prepare script?

`@elastic/eui` uses dynamically-computed import paths, our bundler vite can only handle static import paths. This means that we need to patch the EUI package to use statically-analyzable import paths. We do this using the `patch-package` package.

---

<details>
<summary>Dynamically-computed vs Statically-analyzable import paths</summary>

```js
// This is what we want
tokenHistogram: () => import('./assets/tokenHistogram.js')
```

```js
// This is what eui does
import(
  './assets/' + typeToPathMap[iconType]
).then(...)
```

</details>

---

<details>
<summary>Details on `patch-package` setup</summary>

`patch-package` stores the changes to apply in the `./patches` directory. The `prepare` script in `package.json` runs `patch-package` to apply the patches to the EUI package. This is run automatically when you install dependencies, so you don't need to worry about it.

Should you need to make changes to the EUI package, you can do so in the `node_modules/@elastic/eui` directory. After making your changes, run `npx patch-package @elastic/eui` to create a new patch file in the `patches` directory. This will ensure that your changes are applied when you install dependencies in the future.

⚠️ **IF YOU DO THIS MAKE SURE TO APPLY THE SAME CHANGES IN THE `../react` PACKAGE.**

After building the package to `dist` (`npm run build`), you MUST NOT find any references to `"./assets/" +` in the `dist` folder. If you do, it means that the patch was not applied correctly or something else went wrong.

</details>

---