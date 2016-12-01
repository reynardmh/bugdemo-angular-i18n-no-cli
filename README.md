# ng-xi18n Bug Demo

This code is for demonstrating a problem with ng-xi18n when the project imports angular2 component from another node module.

```
$ npm install
$ npm start
```

It should launch a browser for `http://localhost:3000/`

There is a `CoolComponent` that is imported from another npm package `https://github.com/reynardmh/angular2-component-module`

However, running ng-xi18n will cause error

```
$ ./node_modules/.bin/ng-xi18n

Error: Unexpected value 'CoolComponent' declared by the module 'AppModule'
```

## More Detailed Explanation

This applications imports `CoolComponent` from another node_module `https://github.com/reynardmh/angular2-component-module`

```
// app.module.ts
import { CoolComponent } from 'angular2-component-module/lib';

@NgModule({
  declarations: [
    AppComponent,
    CoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

On the template, we use the `<app-cool>` tag which is imported from `https://github.com/reynardmh/angular2-component-module`

```
<h1 i18n>Hello {{name}}</h1>
<app-cool></app-cool>
```

If you build and run it, you can see the imported CoolComponent works as expected.

However running ng-xi18n failed:

```
$ ./node_modules/.bin/ng-xi18n

Error: Unexpected value 'CoolComponent' declared by the module 'AppModule'
    at /angular-quickstart/node_modules/@angular/compiler/bundles/compiler.umd.js:14725:29
    at Array.forEach (native)
    at CompileMetadataResolver._loadNgModuleMetadata (/angular-quickstart/node_modules/@angular/compiler/bundles/compiler.umd.js:14702:56)
    at CompileMetadataResolver.getUnloadedNgModuleMetadata (/angular-quickstart/node_modules/@angular/compiler/bundles/compiler.umd.js:14636:23)
    at addNgModule (/angular-quickstart/node_modules/@angular/compiler/bundles/compiler.umd.js:12944:43)
    at /angular-quickstart/node_modules/@angular/compiler/bundles/compiler.umd.js:12957:16
    at Array.forEach (native)
    at _createNgModules (/angular-quickstart/node_modules/@angular/compiler/bundles/compiler.umd.js:12956:28)
    at analyzeNgModules (/angular-quickstart/node_modules/@angular/compiler/bundles/compiler.umd.js:12700:16)
    at Object.analyzeAndValidateNgModules (/angular-quickstart/node_modules/@angular/compiler/bundles/compiler.umd.js:12704:20)
```

---
This project was seeded from [angular quickstart](https://github.com/angular/quickstart)
