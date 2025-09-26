from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Verify Home Page
        page.goto("http://localhost:3000")
        expect(page.get_by_role("heading", name="PublyFi")).to_be_visible()
        expect(page.get_by_text("Play. Stream. Earn. Evolve.")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/01-home-page.png")

        # Verify Whitepaper Page
        page.get_by_role("link", name="Whitepaper").click()
        expect(page).to_have_url("http://localhost:3000/whitepaper")
        expect(page.get_by_role("heading", name="PublyFi Whitepaper")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/02-whitepaper-page.png")

        # Verify Waitlist Page from Whitepaper
        page.get_by_role("link", name="Join Waitlist").click()
        expect(page).to_have_url("http://localhost:3000/waitlist")
        expect(page.get_by_role("heading", name="Join the PublyFi Waitlist")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/03-waitlist-page.png")

        # Test Waitlist Form
        page.get_by_placeholder("Enter your email").fill("test@example.com")
        page.get_by_role("button", name="Join Now").click()
        expect(page.get_by_text("✅ You're on the list!")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/04-waitlist-success.png")

        # Verify Back to Home from Waitlist
        page.get_by_role("link", name="← Back to Home").nth(1).click()
        expect(page).to_have_url("http://localhost:3000/")

        print("Verification script completed successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)