import SyrianEagle from '@/components/icons/SyrianEagle';
import { MANUS } from '@/lib/theme';
import { MenuIcon } from 'lucide-react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Navbar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: MANUS.glass,
        borderBottomWidth: 1,
        borderBottomColor: MANUS.glassBorder,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <SyrianEagle size={36} />
          <View>
            <Text style={{ fontSize: 16, fontWeight: '700', color: MANUS.gold, letterSpacing: 1 }}>
              MANUS AI
            </Text>
            <Text style={{ fontSize: 9, color: MANUS.textTertiary, letterSpacing: 0.5 }}>
              الجمهورية العربية السورية
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: MANUS.primary,
              height: 34,
              paddingHorizontal: 14,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: '600', color: MANUS.primaryForeground }}>
              تسجيل دخول
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              height: 34,
              width: 34,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: MANUS.border,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: MANUS.accent,
            }}
          >
            <MenuIcon size={18} color={MANUS.gold} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
