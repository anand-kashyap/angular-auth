"@anand-kashyap/ng-rxform": {
  "projectType": "library",
  "root": "projects/anand-kashyap/ng-rxform",
  "sourceRoot": "projects/anand-kashyap/ng-rxform/src",
  "prefix": "rx",
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-ng-packagr:build",
      "options": {
        "tsConfig": "projects/anand-kashyap/ng-rxform/tsconfig.lib.json",
        "project": "projects/anand-kashyap/ng-rxform/ng-package.json"
      }
    },
    "test": {
      "builder": "@angular-devkit/build-angular:karma",
      "options": {
        "main": "projects/anand-kashyap/ng-rxform/src/test.ts",
        "tsConfig": "projects/anand-kashyap/ng-rxform/tsconfig.spec.json",
        "karmaConfig": "projects/anand-kashyap/ng-rxform/karma.conf.js"
      }
    },
    "lint": {
      "builder": "@angular-devkit/build-angular:tslint",
      "options": {
        "tsConfig": [
          "projects/anand-kashyap/ng-rxform/tsconfig.lib.json",
          "projects/anand-kashyap/ng-rxform/tsconfig.spec.json"
        ],
        "exclude": [
          "**/node_modules/**"
        ]
      }
    }
  }
}
