import { render, screen, within, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { profile, featuredProjects } from "./data/portfolioData";

const goTo = async (hash) => {
  await act(async () => {
    window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  });
};

beforeEach(() => {
  window.history.replaceState(null, "", "/");
  document.documentElement.classList.remove("dark");
  localStorage.clear();
});

test("renders the hero headline on the home section", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: profile.headline })
  ).toBeInTheDocument();
});

test("opens the section named in the URL hash", () => {
  window.history.replaceState(null, "", "/#projects");
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /featured projects/i })
  ).toBeInTheDocument();
  featuredProjects.forEach((p) =>
    expect(screen.getByText(p.title)).toBeInTheDocument()
  );
});

test("switches sections on hash change and marks the active nav link", async () => {
  render(<App />);
  await goTo("#contact");

  expect(
    screen.getByRole("heading", { name: /get in touch/i })
  ).toBeInTheDocument();
  const nav = screen.getByRole("navigation", { name: "Primary" });
  expect(within(nav).getByRole("link", { name: "Contact" })).toHaveAttribute(
    "aria-current",
    "page"
  );
  expect(document.title).toMatch(/^Contact/);
});

test("encodes the WhatsApp message in contact links", async () => {
  render(<App />);
  await goTo("#contact");

  const link = screen.getByRole("link", { name: /chat on whatsapp/i });
  expect(link.getAttribute("href")).not.toMatch(/\s/);
});

test("toggles dark mode and remembers the choice", async () => {
  render(<App />);
  const nav = screen.getByRole("navigation", { name: "Primary" });
  await userEvent.click(
    within(nav).getByRole("button", { name: /switch to dark mode/i })
  );

  expect(document.documentElement).toHaveClass("dark");
  expect(localStorage.getItem("theme")).toBe("dark");
});

test("social icon links have accessible names", () => {
  render(<App />);
  expect(screen.getAllByRole("link", { name: "GitHub" }).length).toBeGreaterThan(0);
  expect(screen.getAllByRole("link", { name: "LinkedIn" }).length).toBeGreaterThan(0);
});
