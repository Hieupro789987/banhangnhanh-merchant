import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema/**/*.graphql", // Load tất cả .graphql files
  documents: ["src/components/features/**/*.graphql"],
  generates: {
    "./src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        namingConvention: "keep",
        skipTypeNameForRoot: true,
        useTypeImports: true,
      },
    },
  },
};
export default config;
