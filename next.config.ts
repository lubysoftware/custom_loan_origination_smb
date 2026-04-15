import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: "" },
  // Evita que o Turbopack use a pasta pai (outro package-lock.json) como raiz do workspace.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
