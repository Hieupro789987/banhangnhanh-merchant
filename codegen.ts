import type { CodegenConfig } from "@graphql-codegen/cli";
import fs from "fs";
import path from "path";

const getFeatures = () => {
  const featuresPath = path.join(__dirname, "src/components/features");
  if (!fs.existsSync(featuresPath)) return [];

  return fs.readdirSync(featuresPath).filter((folder) => {
    return fs.statSync(path.join(featuresPath, folder)).isDirectory();
  });
};

const features = getFeatures();

const config: CodegenConfig = {
  schema: "./schema.graphql",
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
