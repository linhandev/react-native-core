/**
 * If this configuration is not provided, react-native/Libraries/Core/InitializeCore.js isn't called and a bundle execution later fails.
 * @type {import("@react-native-community/cli-types").Config}
 */
const config = {
  platforms: {
    __core__: {
      npmPackageName: '@react-native-oh/react-native-core',
      projectConfig: () => ({}),
      dependencyConfig: () => ({}),
    },
  },
};

module.exports = config;
