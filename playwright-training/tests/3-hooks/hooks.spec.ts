import { test, expect } from '@playwright/test';



 test.describe('Hooks Test Suite', async () => {

  test.describe.configure({ mode: 'serial' });

   test.beforeAll('Before Test', async () => {
    console.log('Before All - Setup once');
  });


test.beforeEach('Before Each Test', async () => {
    console.log('Before Each Test - Setup before each test');
  }); 

  test.afterEach('After Each Test', async () => {
    console.log('After Each Test - Cleanup after each test');
  });
  
test('Test 1', async ({ page }) => {
  console.log('Running Test 1');
});

test('Test 2', async ({ page }) => {
  console.log('Running Test 2');
});

test('Test 3', async ({ page }) => {
  console.log('Running Test 3');
});

test('Test 4', async ({ page }) => {
  console.log('Running Test 4');
});

test('Test 5', async ({ page }) => {
  console.log('Running Test 5');
}); 

test.afterAll('After Test', async () => {
    console.log('After All - Cleanup once');
  })

 });