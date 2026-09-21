# Playwright Commands

## Setup

npm init -y
npm init playwright@latest
npm install -D @playwright/test
npx playwright install

------------------------------------------

## Run Tests

npx playwright test
npx playwright test tests/example.spec.js
npx playwright test -g "test name"

-----------------------------------------

## Run Modes

npx playwright test --headed
npx playwright test --debug
npx playwright test --ui

------------------------------------------

## Browser Specific

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

-----------------------------------------

## Code Generator

npx playwright codegen
npx playwright codegen https://example.com

----------------------------------------------
##  Grep (Run Specific Tests Smartly)

# Run test by name (exact or partial match)
npx playwright test --grep "login test"

# Run multiple matching tests
npx playwright test --grep "login|cart"

# Ignore specific tests
npx playwright test --grep-invert "login"

# Run tests with tag
npx playwright test --grep "@smoke"

# Run multiple tags
npx playwright test --grep "@smoke|@regression"

# Combine grep with browser
npx playwright test --grep "@smoke" --project=chromium

# Combine with headed mode
npx playwright test --grep "login" --headed

# Combine with debug
npx playwright test --grep "login" --debug

----------------------------------------------------
## Reports

npx playwright show-report
npx playwright test --reporter=html

------------------------------------------

## Debug / Slow

npx playwright test --headed --slow-mo=1000
npx playwright test --debug

-------------------------------------------

## Retry / Parallel

npx playwright test --retries=2
npx playwright test --workers=4

----------------------------------------------

## Advanced

npx playwright test --last-failed
npx playwright test --trace on
npx playwright show-trace trace.zip

--------------------------------------------------

## Config

npx playwright test --config=playwright.config.ts

-----------------------------------------------------

## Clean Install

rm -rf node_modules
npm install
-------------------------------------------------------
# Windows
rm -r node_modules
npm install

