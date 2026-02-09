import { IMPERIAL } from '@/lib/theme';
import { Tabs } from 'expo-router';
import {
  HomeIcon,
  MessageSquareIcon,
  LayoutDashboardIcon,
  StoreIcon,
  SettingsIcon,
} from 'lucide-react-native';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: IMPERIAL.gold,
        tabBarInactiveTintColor: IMPERIAL.textTertiary,
        tabBarStyle: {
          backgroundColor: IMPERIAL.cardSolid,
          borderTopColor: IMPERIAL.border,
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 88 : 64,
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
          paddingTop: 8,
          elevation: 0,
          shadowColor: IMPERIAL.gold,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',
          tabBarIcon: ({ color, size }) => <HomeIcon size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '\u0627\u0644\u0645\u062d\u0627\u062f\u062b\u0629',
          tabBarIcon: ({ color, size }) => <MessageSquareIcon size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: '\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645',
          tabBarIcon: ({ color, size }) => <LayoutDashboardIcon size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          title: '\u0627\u0644\u0633\u0648\u0642',
          tabBarIcon: ({ color, size }) => <StoreIcon size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a',
          tabBarIcon: ({ color, size }) => <SettingsIcon size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
