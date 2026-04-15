import { test, expect } from "@playwright/test";

test.describe("Custom Loan Origination — formulário de contato", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("página carrega com título correto", async ({ page }) => {
    await expect(page).toHaveTitle(/Custom Loan Origination Platform for SMB Lenders/i);
  });

  test("seção de contato está visível", async ({ page }) => {
    const section = page.locator("#contact");
    await expect(section).toBeVisible();
  });

  test("campos obrigatórios estão presentes e habilitados", async ({ page }) => {
    await expect(page.locator("#smb-name")).toBeVisible();
    await expect(page.locator("#smb-lastname")).toBeVisible();
    await expect(page.locator("#smb-email")).toBeVisible();
    await expect(page.locator("#smb-phone")).toBeVisible();
    await expect(page.locator("#smb-message")).toBeVisible();

    const submitBtn = page.getByRole("button", { name: /Request My Origination Audit/i });
    await expect(submitBtn).toBeEnabled();
  });

  test("submissão completa do formulário exibe mensagem de sucesso", async ({ page }) => {
    await page.locator("#smb-name").fill("E2E");
    await page.locator("#smb-lastname").fill("Test");
    await page.locator("#smb-email").fill("karime.kumagai@luby.com.br");
    await page.locator("#smb-phone").fill("+55 11 99999-0000");
    await page.locator("#smb-message").fill("Teste automatizado — deploy CI/CD.");

    await page.getByRole("button", { name: /Request My Origination Audit/i }).click();

    await expect(
      page.getByText(/Message sent!/i)
    ).toBeVisible({ timeout: 15_000 });
  });
});
