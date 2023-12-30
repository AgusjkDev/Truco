module.exports = {
    root: true,
    env: { node: true },
    ignorePatterns: [".eslintrc.cjs", ".turbo", "dist", "node_modules"],
    plugins: ["prettier"],
    extends: [
        require.resolve("@vercel/style-guide/eslint/typescript"),
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                arrowParens: "avoid",
                printWidth: 100,
                tabWidth: 4,
                endOfLine: "auto",
            },
        ],
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
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
    },
};
