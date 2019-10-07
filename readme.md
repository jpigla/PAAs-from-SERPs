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

**Run script with arguments**
`node get_paas.js --clicks=X --kw=Y (--output=csv)`
* **--clicks=X** : number of clicks on new questions (0-2/max) **(be patient when using `max`, ~3min)**
* **--kw=Y** : input of keyword (search term) or "keywords" for batch mode (read list of keywords from `keywords.txt`)
* _**--output=csv**_ : (optional) to export list of questions

**Examples**
* `node get_paas.js --clicks=max --kw=firefox --output=csv`
* `node get_paas.js --clicks=1 --kw=angela+merkel --output=csv`
* `node get_paas.js --clicks=0 --kw=barack+obama`
* `node get_paas.js --clicks=0 --output=csv --kw=keywords` (_batch mode_)

**What happens here**

1. Go to https://www.google.de/search?pws=0&no_sw_cr=1&q=[KEYWORD]
2. Click on first batch of PAA questions.
3. Extract all questions from SERP
4. If `--click` argument is set, click N-times on newly found questions (after click & wait)
3. Extract all questions from SERP
4. Output to CLI and CSV file (if csv argument given)

## Help & Information
* If something breaks or errors occur during runtime, please ask Philipp at hello@jpigla.de.

### Changelog

**Version 1.0** (07.10.2019)
* Initial Upload
* Working Version

## License

All assets and code are under the GPL v3 License unless specified otherwise.
