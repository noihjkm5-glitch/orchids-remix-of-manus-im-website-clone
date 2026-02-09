import { MANUS } from '@/lib/theme';
import { ChevronRightIcon, UserIcon, BellIcon, ShieldIcon, CircleHelpIcon, LogOutIcon } from 'lucide-react-native';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const settingsItems = [
  { icon: UserIcon, label: 'Account', subtitle: 'Profile, email, password' },
  { icon: BellIcon, label: 'Notifications', subtitle: 'Push, email alerts' },
  { icon: ShieldIcon, label: 'Privacy & Security', subtitle: 'Data, permissions' },
  { icon: CircleHelpIcon, label: 'Help & Support', subtitle: 'FAQ, contact us' },
];

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: MANUS.background }}
      contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: 40 }}
    >
      <View style={{ paddingHorizontal: 16, marginBottom: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: '700', color: MANUS.text }}>Settings</Text>
      </View>

      <View style={{ paddingHorizontal: 16, marginBottom: 24 }}>
        <View
          style={{
            backgroundColor: MANUS.card,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: MANUS.border,
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: MANUS.accent,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Svg height={24} width={18} viewBox="0 0 24 32">
              <Path
                d="M12 2C10.9 2 10 2.9 10 4V16.38L7.91 14.12C7.54 13.72 6.89 13.7 6.47 14.07C6.06 14.44 6.04 15.09 6.4 15.5L10.67 20.12C11.5 21.03 12.63 21.5 13.79 21.5H18C19.1 21.5 20 20.6 20 19.5V7C20 5.9 19.1 5 18 5C17.72 5 17.5 5.22 17.5 5.5V11H16.5V3C16.5 1.9 15.6 1 14.5 1C13.4 1 12.5 1.9 12.5 3V11H12V2Z"
                fill={MANUS.text}
              />
            </Svg>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: MANUS.text }}>Manus User</Text>
            <Text style={{ fontSize: 13, color: MANUS.textTertiary }}>user@manus.im</Text>
          </View>
          <ChevronRightIcon size={20} color={MANUS.textTertiary} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, marginBottom: 24 }}>
        <View
          style={{
            backgroundColor: MANUS.card,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: MANUS.border,
            overflow: 'hidden',
          }}
        >
          {settingsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <TouchableOpacity
                key={item.label}
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 16,
                  gap: 12,
                  borderBottomWidth: index < settingsItems.length - 1 ? 1 : 0,
                  borderBottomColor: MANUS.border,
                }}
              >
                <Icon size={20} color={MANUS.textSecondary} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15, fontWeight: '500', color: MANUS.text }}>{item.label}</Text>
                  <Text style={{ fontSize: 12, color: MANUS.textTertiary }}>{item.subtitle}</Text>
                </View>
                <ChevronRightIcon size={18} color={MANUS.textTertiary} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: MANUS.card,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: MANUS.border,
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <LogOutIcon size={20} color="#EF4444" />
          <Text style={{ fontSize: 15, fontWeight: '500', color: '#EF4444' }}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 16, marginTop: 24, alignItems: 'center' }}>
        <Text style={{ fontSize: 12, color: MANUS.textTertiary }}>Manus v1.0.0</Text>
      </View>
    </ScrollView>
  );
}
