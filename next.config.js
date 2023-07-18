/** @type {import('next').NextConfig} */
const webpackConfig = (config) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};

module.exports = {
  httpAgentOptions: {
    keepAlive: false,
  },
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return webpackConfig(config);
  },
};



// module.exports = {
//     httpAgentOptions: {
//     keepAlive: false,
//   },
//     experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
//     webpack(config) {
//         config.experiments = { ...config.experiments, topLevelAwait: true };
//         return config;
//     },
    
// };
// export const experimental = { appDir: true, serverComponentsExternalPackages: ["mongoose"] };

// export function webpack(config) {
//     config.experiments = { ...config.experiments, topLevelAwait: true };
//     return config;
// }
// const nextConfig = {}

// module.exports = nextConfig
