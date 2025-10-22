import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: [['html', { open: 'never' }]],

  // Config
  use: {
    baseURL: 'https://www.saucedemo.com',
    viewport: { width: 1280, height: 800 },
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // Navegadores
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
