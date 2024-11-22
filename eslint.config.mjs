import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default antfu(
  {
    type: "app",
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "single",
    },
    plugins: {
      "@tanstack/query": pluginQuery,
      "@next/next": nextPlugin,
    },
  },
  {
    rules: {
      "no-console": ["warn"],
      "@tanstack/query/exhaustive-deps": ["error"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "perfectionist/sort-imports": [
        "error",
        {
          internalPattern: ["@/**"],
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md", ".*classes.*"],
        },
      ],
    },
  },
);
