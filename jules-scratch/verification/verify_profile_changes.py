import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        try:
            await page.goto("http://localhost:3000/profile", timeout=60000)

            # 1. Screenshot of the login form
            await expect(page.get_by_text("Profile Access")).to_be_visible(timeout=30000)
            await page.screenshot(path="jules-scratch/verification/01_login_form.png")

            # 2. Log in
            await page.get_by_placeholder("Email").fill("malkislive@gmail.com")
            await page.get_by_placeholder("Password").fill("Dalakishvili99!")
            await page.get_by_role("button", name="Sign In").click()

            # 3. Screenshot of the Overview tab
            await expect(page.get_by_text("About @Malkis")).to_be_visible(timeout=30000)
            await asyncio.sleep(2) # Allow animations to settle
            await page.screenshot(path="jules-scratch/verification/02_overview_tab.png")

            # 4. Screenshot of the Customization modal
            await page.get_by_role("button", name="Customization").click()
            await expect(page.get_by_text("Profile Customization")).to_be_visible()
            await asyncio.sleep(1) # Allow modal animation
            await page.screenshot(path="jules-scratch/verification/03_customization_modal.png")
            await page.get_by_role("button", name="Cancel").click()

            # 5. Screenshot of the Equipment modal
            await page.get_by_role("button", name="Equipment").click()
            await expect(page.get_by_text("Equipped Gear")).to_be_visible()
            await asyncio.sleep(1) # Allow modal animation
            await page.screenshot(path="jules-scratch/verification/04_equipment_modal.png")
            await page.get_by_role("button", name="Close", exact=True).click()

            # 6. Screenshot of the Streams tab
            await page.get_by_role("button", name="Streams").click()
            await expect(page.get_by_text("Saved Streams")).to_be_visible()
            await asyncio.sleep(1)
            await page.screenshot(path="jules-scratch/verification/05_streams_tab.png")

        except Exception as e:
            print(f"An error occurred: {e}")
            await page.screenshot(path="jules-scratch/verification/error.png")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())