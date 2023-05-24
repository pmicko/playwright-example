# 🧪 Playwright E2E Example

## 👋️ Introduction

This repository holds example of E2E test in Playwright framework

## 🥱 TL;DR

Test script is here 👉 [test-example.spec.ts](test-example.spec.ts)

## 📑 Test scenario

Test scenario (requirement) for E2E test is here: [test-requirements](test-requirements.md)

## ⚙️ Setup

### Installation

Install dependencies by running in terminal:
```shell
npm install
```

(only for 1st time installation) run below command to download required browsers:
```shell
npx playwright install
```

## 🚀 How to run test

Run in terminal:
```shell
npx playwright test
```
## 🌲 Codebase
	.
	├── tests              # E2E spec
	└── fixtures           # test data for specs

When test run finishes, file structure will be extended for these generated folders:

	.
	├── ...
	├── playwright-report  # contains html report with details like test steps, attached test code and embedded video
	├── test-results       # contains generated data like recorded video if test failed
	├── ...

## 💡 Test configuration options
You can adjust Playwright behaviour with many configuration options in following file: [playwright.config.ts](./playwright.config.ts)

### 🧪 Further reading about Playwright
For more information about Playwright framework, check out official [documentation](https://playwright.dev/docs/intro)
