#!/usr/bin/env node

const fs = require('fs');

function loadModule(name) {
  try {
    return require(name)
  } catch {
    return undefined
  }
}

// read the current package.json file
const packageJson = require('../package.json')
const Vue = loadModule('vue')
const version = Vue ? Vue.version : ''

console.log(`[simplebar-vue] vue version: ${version}`)

if (!version) {
  console.log('[simplebar-vue]: you must install Vue first, if you are using an alias or a short major version, manually install @vue/composition-api plugin yourself')
}

// check if "@vue/composition-api" is already a dependency
if ((version && !version.startsWith('2.6')) || packageJson.dependencies['@vue/composition-api']) {
  // "@vue/composition-api" is already a dependency or vue version does not requires it,
  // so do not run the script
  return;
}

// add "@vue/composition-api" as a dependency
if (!packageJson.dependencies) {
  packageJson.dependencies = {};
}

console.log('[simplebar-vue]: installing @vue/composition-api as dependency')
packageJson.dependencies['@vue/composition-api'] = '^1.0.0';

// write the updated package.json file
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
