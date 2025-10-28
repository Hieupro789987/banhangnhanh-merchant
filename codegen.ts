import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://api.banhangnhanh.shop/graphql",
  documents: ["src/components/features/**/*.graphql"],
  generates: {
    "./src/generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
