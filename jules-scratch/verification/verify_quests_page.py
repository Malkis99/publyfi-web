
import asyncio
import re
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        try:
            # Navigate to the quests page
            await page.goto("http://localhost:3000/quests")
            await page.wait_for_load_state('networkidle')

            # 1. Test Modal Opening and Content
            print("Testing modal opening and content...")
            # Click the first quest card to open the modal
            print("Attempting to click the first quest card...")
            await page.locator('button[aria-label^="Quest card for"]').first.click()
            print("Quest card clicked.")

            # Wait for the modal to appear
            await page.wait_for_timeout(2000)
            modal = page.locator('div[role="dialog"]')
            await expect(modal).to_be_visible()

            await page.wait_for_timeout(2000)

            # Check for new content sections
            await expect(modal.get_by_text("Description")).to_be_visible()
            await expect(modal.get_by_text(re.compile("Comments"))).to_be_visible()
            await expect(modal.get_by_text("Objectives")).to_be_visible()
            print("Modal content verified.")

            # 2. Test Quest Acceptance Animation
            print("Testing quest acceptance animation...")
            accept_button = modal.get_by_role("button", name="Accept Quest")
            await accept_button.click()

            # Check for linking animation
            await expect(page.get_by_text("LINKING...")).to_be_visible()
            print("Linking animation verified.")

            # Check for confirmed animation
            await expect(page.get_by_text("ACCEPTED")).to_be_visible(timeout=5000)
            print("Accepted animation verified.")

            await page.screenshot(path="jules-scratch/verification/01_modal_accepted.png")
            print("Screenshot 1 taken.")

            # 3. Test Modal Closing
            print("Testing modal closing...")
            await modal.get_by_role("button").first.click() # Click the close 'X' button
            await expect(modal).not_to_be_visible()
            print("Modal closed successfully.")

            # 4. Test Tab Animation
            print("Testing tab animation...")
            await page.get_by_role("button", name="Streamer Quests").click()
            # Wait for the animation to complete
            await page.wait_for_timeout(1000)
            await page.screenshot(path="jules-scratch/verification/02_streamer_tab.png")
            print("Screenshot 2 taken.")
            print("Verification script completed successfully!")

        except Exception as e:
            print(f"An error occurred: {e}")
            page_content = await page.content()
            with open("jules-scratch/verification/page_content.html", "w") as f:
                f.write(page_content)
            await page.screenshot(path="jules-scratch/verification/error.png")

        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
