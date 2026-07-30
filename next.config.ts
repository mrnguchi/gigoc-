import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep module resolution anchored to this app when parent directories
    // contain unrelated package-lock.json files.
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
