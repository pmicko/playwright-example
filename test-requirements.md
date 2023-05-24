# Requirements for test
The test script shall verify following test scenario:

## Start 💡

- start the browser (Firefox or Chrome) and open https://salsita-qa-homework.netlify.app

**Goal** 🚀

- proceed to next page

## Main Page 💡

Just home page.

- click the Enter button -> "code" page loads

**Goal** 🚀

- proceed to next page

## Code Page 💡

Somewhere on the page is the secret code to proceed to the next page.

**Goal** 🚀

- enter secret value into the input field
- ensure that the "robot" checkbox is checked
- submit the form -> "lists" page loads (list of famous quotes)

## Lists Page 💡

On this page there are quote categories "Famous Quotes" and "Awesome Quotes", each having several quotes. Each quote has a score number in parentheses.

At the bottom there is a "Total score" number.

The texts (category names and quotes in each category) are always the same, however they are presented in random order. The score numbers are volatile.

**Goal** 🚀

- verify that all the categories and their quotes are displayed. No extra quotes, no missing ones.
- verify that the "Total score:" is the sum of all quote scores

## Notes ℹ️

Please, keep it simple, test only the scenario above (not negative scenarios or other things)
