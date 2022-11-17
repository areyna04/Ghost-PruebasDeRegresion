import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD } from './../properties.json';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:2368/ghost/');
    await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
    await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
    await page.locator('#ember10').click();
    await page.goto('http://localhost:2368/ghost/#/members');
});

test('No debes ser capaz de crear un miembro sin email', async ({ page }) => {
  await page.click('text=New member');
  await page.screenshot({path: 'screenshot/miembro1.png', fullPage: true});
  await page.locator('id=member-name').fill(faker.name.fullName());
  await page.screenshot({path: 'screenshot/miembro2.png', fullPage: true});
  await page.click('text=Save');
  await page.screenshot({path: 'screenshot/miembro3.png', fullPage: true});
  await page.goto('http://localhost:2368/ghost/#/members');
  await page.screenshot({path: 'screenshot/miembro4.png', fullPage: true});
  await page.getByText(/Leave/).click();
  await page.screenshot({path: 'screenshot/miembro5.png', fullPage: true});
  await expect(page.getByText('usuario@uniandes.edu.co')).toBeFalsy;
  await page.screenshot({path: 'screenshot/miembro6.png', fullPage: true});
});

test('Debes ser capaz de crear un miembro sin nombre', async ({ page }) => {
  await page.click('text=New member');
  await page.screenshot({path: 'screenshot/miembro7.png', fullPage: true});
  await page.locator('id=member-email').fill(faker.internet.email());
  await page.screenshot({path: 'screenshot/miembro8.png', fullPage: true});
  await page.click('text=Save');
  await page.screenshot({path: 'screenshot/miembro9.png', fullPage: true});
  await page.goto('http://localhost:2368/ghost/#/members');
  await page.screenshot({path: 'screenshot/miembro10.png', fullPage: true});
  await expect(page.getByText('usuario@uniandes.edu.co')).toBeTruthy();
  await page.screenshot({path: 'screenshot/miembro11.png', fullPage: true});
});

test('No debes ser capaz de crear un miembro con email repetido', async ({ page }) => {
  await page.click('text=New member');
  await page.screenshot({path: 'screenshot/miembro12.png', fullPage: true});
  await page.locator('id=member-email').fill('usuario2@uniandes.edu.co');
  await page.screenshot({path: 'screenshot/miembro13.png', fullPage: true});
  await page.click('text=Save');
  await page.screenshot({path: 'screenshot/miembro14.png', fullPage: true});
  await page.goto('http://localhost:2368/ghost/#/members');
  await page.screenshot({path: 'screenshot/miembro15.png', fullPage: true});
  await expect(page.getByText('usuario2@uniandes.edu.co')).toBeTruthy();
  await page.screenshot({path: 'screenshot/miembro16.png', fullPage: true});
});

test('Debes ser capaz de crear un miembro con nombre y email', async ({ page }) => {
  await page.click('text=New member');
  await page.screenshot({path: 'screenshot/miembro17.png', fullPage: true});
  await page.locator('id=member-name').fill(faker.name.findName());
  await page.screenshot({path: 'screenshot/miembro18.png', fullPage: true});
  await page.locator('id=member-email').fill(faker.internet.email());
  await page.screenshot({path: 'screenshot/miembro19.png', fullPage: true});
  await page.click('text=Save');
  await page.screenshot({path: 'screenshot/miembro20.png', fullPage: true});
  await page.goto('http://localhost:2368/ghost/#/members');
  await page.screenshot({path: 'screenshot/miembro21.png', fullPage: true});
  await expect(page.getByText('usuario@uniandes.edu.co')).toBeTruthy();
  await page.screenshot({path: 'screenshot/miembro22.png', fullPage: true});
});
