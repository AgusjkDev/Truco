module.exports = {
    root: true,
    env: { node: true },
    ignorePatterns: [".eslintrc.cjs", ".next", ".turbo", "node_modules"],
    plugins: ["prettier", "import"],
    settings: {
        "import/resolver": { typescript: { project: "tsconfig.json" } },
    },
    extends: [
        require.resolve("@vercel/style-guide/eslint/typescript"),
        require.resolve("@vercel/style-guide/eslint/react"),
        require.resolve("@vercel/style-guide/eslint/next"),
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                arrowParens: "avoid",
                printWidth: 100,
                tabWidth: 4,
                endOfLine: "auto",
                plugins: ["prettier-plugin-tailwindcss"],
            },
        ],
        "import/no-default-export": "off",
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: ["return", "export"] },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "never",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
        ],
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-sort-props": [
            "warn",
            {
                callbacksLast: true,
                shorthandFirst: true,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        "jsx-a11y/click-events-have-key-events": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
    },
    overrides: [
        {
            files: ["src/**/*.tsx", "src/middleware.ts", "src/app/sitemap.ts", "src/app/robots.ts"],
            rules: {
                "import/prefer-default-export": ["error", { target: "any" }],
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },
        {
            files: ["src/app/**/route.ts"],
            rules: { "@typescript-eslint/explicit-function-return-type": "off" },
        },
    ],
};
