from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width': 1920, 'height': 1080})
    page = context.new_page()
    page.goto("http://localhost:3000/marketplace")
    # Wait for the hero animation to complete plus a little extra
    page.wait_for_timeout(2000)
    page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)
    browser.close()

with sync_playwright() as playwright:
    run(playwright)