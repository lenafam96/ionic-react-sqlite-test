import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  server: {
    androidScheme: "http",
    allowNavigation: ["https://my-api.com"],
    cleartext: true,
  },
  appId: 'io.ionic.starter',
  appName: 'test',
  webDir: 'build',
  bundledWebRuntime: false
};

export default config;
