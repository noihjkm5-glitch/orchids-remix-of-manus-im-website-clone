import { MANUS } from '@/lib/theme';
import { ArrowRightIcon } from 'lucide-react-native';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

export default function AnnouncementBar() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => Linking.openURL('https://manus.im/blog/manus-joins-meta-for-next-era-of-innovation')}
      style={{
        backgroundColor: MANUS.glass,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: MANUS.border,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 20, color: MANUS.text, textAlign: 'center' }}>
        Manus is now part of Meta
      </Text>
      <ArrowRightIcon size={16} color={MANUS.text} strokeWidth={2} />
    </TouchableOpacity>
  );
}
