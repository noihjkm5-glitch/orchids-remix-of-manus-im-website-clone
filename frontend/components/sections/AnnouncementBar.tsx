import { MANUS } from '@/lib/theme';
import { SparklesIcon } from 'lucide-react-native';
import { View, Text, TouchableOpacity } from 'react-native';

export default function AnnouncementBar() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: MANUS.accent,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: MANUS.glassBorder,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      <SparklesIcon size={14} color={MANUS.gold} />
      <Text style={{ fontSize: 13, fontWeight: '600', color: MANUS.gold, textAlign: 'center' }}>
        محرك Manus AI - الإصدار الملكي السوري
      </Text>
      <SparklesIcon size={14} color={MANUS.gold} />
    </TouchableOpacity>
  );
}
