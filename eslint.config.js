import next from "eslint-config-next";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", ".git/**"],
  },
  ...next,
];

export default eslintConfig;
