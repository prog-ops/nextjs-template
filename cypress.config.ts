import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "webpage-viewer",
  component: {
    specPattern: "app/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  e2e: {
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000/",
    supportFile: false,
    setupNodeEvents(on, config) {
      // node event listeners implementation
    },
  },
});
