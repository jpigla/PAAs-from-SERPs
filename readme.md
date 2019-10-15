# Get PAAs from Google SERPs
![GitHub](https://img.shields.io/github/license/jpigla/PAAs-from-SERPs) ![node](https://img.shields.io/node/v/puppeteer) ![npm](https://img.shields.io/npm/v/puppeteer) ![GitHub last commit](https://img.shields.io/github/last-commit/jpigla/PAAs-from-SERPs)

<p align="center"><img src="https://user-images.githubusercontent.com/14932296/66319614-b61a2180-e91d-11e9-8fd9-c390a6762fbb.png" width=700></p>

## ⚠ Disclaimer
> This software is not authorized by Google and doesn't follow Google's
> robots.txt. Scraping without Google explicit written permission is a violation of thei
> terms and conditions on scraping and can potentially cause a lawsuit

## Requirements

**Local Environment**
* NodeJS (https://nodejs.org/de/)

**NPM-Packages**
* Puppeteer (https://www.npmjs.com/package/puppeteer)
* Minimist (https://www.npmjs.com/package/minimist)

## Installation

1. Download [latest project release](https://github.com/jpigla/PAAs-from-SERPs/releases/latest), extract and (if desired) move folder to your home directory
2. Check if Node and NPM are already installed. Open Terminal and ...
  * type `node -v` in Terminal to check NodeJS version number (and if installed already)
  * type `npm -v` in Terminal to check NPM-Manager version number (and if installed already)
  * **if not**, install Homebrew (from https://brew.sh/index_de; Mac) and then NodeJS with `brew update && brew install node`
3. In Terminal move to project folder (type `cd folder/` if you named the project folder "folder")
4. Install required NPM packages, type `npm install` in Terminal

## Usage

**Type `npm run scraper -- --help` for help _(or read on)_.**

**Run script with arguments with one of the following commands**
* `npm run scraper -- --clicks=[0-2/max] --kw=[...] --lang=[de/en] (--output=csv)`
* `node get_paas.js --clicks=[0-2/max] --kw=[...] --lang=[de/en] (--output=csv)`

**Arguments**
* **--clicks=[0-2/max]** : how often click on new questions [0-2/max] **(be patient when using `max`, ~3min)**
* **--kw=[...]** : input of keyword (search term) or "keywords" for batch mode (read line by line keywords from `keywords.txt`)
* **--lang=[de/en]** : choose languange of google search [de/en]
* _**--output=csv**_ : (optional) to export list of questions

**Examples**
* `npm run scraper`
  * `-- --clicks=max --kw=firefox --output=csv --lang=en`
  * `-- --clicks=0 --kw=angela+merkel --lang=de`
  * `-- --clicks=0 --output=csv --kw=keywords --lang=en` (_batch mode_)
* `node get_paas.js`
  * `--clicks=max --kw=firefox --output=csv --lang=en`
  * `--clicks=0 --kw=angela+merkel --lang=de`
  * `--clicks=0 --output=csv --kw=keywords --lang=en` (_batch mode_)


**What happens here**

1. Browser goes to https://www.google.com/search?hl=de&gl=DE&ie=utf-8&oe=utf-8&no_sw_cr=1&pws=0&q=[KEYWORD] (default/de)
2. If `clicks` is set to `0` initially found questions are returend
3. If `clicks` is set > `0` then sets of appearing questions (after clicks) are clicked `N` times _(first set = 4 (initial) questions)_
5. Extract all questions from serp after clicking is done
6. Output to CLI and CSV file _(if csv argument is given)_

## Help & Information
* If something breaks or errors occur during runtime, please ask Philipp at hello@jpigla.de.

### Changelog

**Version 1.1** (15.10.2019)
* Add npm script
* Optimize performance
* Add `--help` argument
* Add `--lang` (language) argument [de/en]
* Edit readme

**Version 1.0** (07.10.2019)
* Initial upload
* Working version

## License

All assets and code are under the GPL v3 License unless specified otherwise.
