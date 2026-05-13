import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.beagleappsstudio.beerrater',
  appName: 'BeerRater',
  webDir: 'dist',
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#F59E0B',
      sound: 'beep.wav',
    },
  },
};

export default config;
