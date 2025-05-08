// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);


const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    extraNodeModules: {
      'react-native-gesture-handler': require.resolve('react-native-gesture-handler'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
