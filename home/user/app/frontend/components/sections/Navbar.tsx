import { MANUS } from '@/lib/theme';
import { MenuIcon } from 'lucide-react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

function ManusLogo({ size = 24 }: { size?: number }) {
  return (
    <Svg height={size} width={size * 0.75} viewBox="0 0 24 32">
      <Path
        d="M12 2C10.9 2 10 2.9 10 4V16.38L7.91 14.12C7.54 13.72 6.89 13.7 6.47 14.07C6.06 14.44 6.04 15.09 6.4 15.5L10.67 20.12C11.5 21.03 12.63 21.5 13.79 21.5H18C19.1 21.5 20 20.6 20 19.5V7C20 5.9 19.1 5 18 5C17.72 5 17.5 5.22 17.5 5.5V11H16.5V3C16.5 1.9 15.6 1 14.5 1C13.4 1 12.5 1.9 12.5 3V11H12V2Z"
        fill={MANUS.text}
      />
    </Svg>
  );
}

export default function Navbar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: MANUS.background,
        borderBottomWidth: 1,
        borderBottomColor: MANUS.border,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <ManusLogo size={28} />
          <Text style={{ fontSize: 18, fontWeight: '700', color: MANUS.text, letterSpacing: -0.5 }}>
            manus
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: MANUS.primary,
              height: 32,
              paddingHorizontal: 12,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: '500', color: MANUS.primaryForeground }}>
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              height: 32,
              paddingHorizontal: 12,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: MANUS.border,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: '500', color: MANUS.text }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
