from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Set a larger viewport to capture the full desktop layout
    page.set_viewport_size({"width": 1920, "height": 1080})

    # Navigate to the marketplace page
    page.goto("http://localhost:3000/marketplace")

    # Wait for the hero section to be visible to ensure the page has loaded
    hero_title = page.get_by_role("heading", name="Welcome to the PublyFi Marketplace")
    expect(hero_title).to_be_visible(timeout=10000)

    # Wait for a moment to allow animations and glows to render
    page.wait_for_timeout(2000)

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/marketplace_redesign.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)