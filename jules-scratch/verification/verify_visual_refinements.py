from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width': 1920, 'height': 1080})
    page = context.new_page()

    try:
        # Verify Marketplace Page Hero
        page.goto("http://localhost:3000/marketplace")
        page.wait_for_load_state('networkidle')
        expect(page.get_by_role("heading", name="PublyFi Marketplace")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/marketplace_hero_view.png")

        # Verify Marketplace Page Modal
        # Scroll to the footer to ensure it's in view
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

        # Click the footer link to open the modal
        page.get_by_role("button", name="Trading Rules").click()

        # Wait for the modal to be visible
        modal = page.get_by_role("dialog")
        expect(modal).to_be_visible()

        # Allow time for animations
        page.wait_for_timeout(500)

        page.screenshot(path="jules-scratch/verification/marketplace_modal_view.png")

    finally:
        browser.close()

with sync_playwright() as p:
    run_verification(p)