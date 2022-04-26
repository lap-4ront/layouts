const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  base: "",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        blog: resolve(__dirname, "blog.html"),
        contact: resolve(__dirname, "contact.html")
      }
    }
  },
  resolve: {
    alias: {
      "~bootstrap": "bootstrap"
    }
  }
});
