import GoldenEagle from '@/components/icons/GoldenEagle';
import { IMPERIAL } from '@/lib/theme';
import {
  ArrowUpIcon,
  PlusIcon,
  CodeIcon,
  GlobeIcon,
  BrainCircuitIcon,
  FileTextIcon,
} from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';

const suggestionTags = [
  { icon: CodeIcon, label: 'بناء تطبيق' },
  { icon: GlobeIcon, label: 'إنشاء موقع' },
  { icon: BrainCircuitIcon, label: 'تحليل بيانات' },
  { icon: FileTextIcon, label: 'كتابة محتوى' },
];

export default function HeroChat() {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={{ alignItems: 'center', paddingHorizontal: 16, marginTop: 32 }}>
      <GoldenEagle size={80} />

      <Text
        style={{
          fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : undefined,
          fontSize: 28,
          color: IMPERIAL.gold,
          fontWeight: '700',
          textAlign: 'center',
          lineHeight: 40,
          marginTop: 16,
          marginBottom: 6,
        }}
      >
        سوريا AI
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: IMPERIAL.textTertiary,
          textAlign: 'center',
          marginBottom: 28,
          lineHeight: 22,
        }}
      >
        مساعدك الذكي — كيف يمكنني مساعدتك اليوم؟
      </Text>

      <View style={{ width: '100%', maxWidth: 768 }}>
        <View
          style={{
            backgroundColor: IMPERIAL.card,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: IMPERIAL.border,
            minHeight: 130,
            shadowColor: IMPERIAL.gold,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 20,
            elevation: 2,
          }}
        >
          <View style={{ paddingHorizontal: 16, paddingTop: 14, minHeight: 70 }}>
            <TextInput
              placeholder="أسند مهمة أو اسأل أي سؤال..."
              placeholderTextColor={IMPERIAL.textTertiary}
              value={inputValue}
              onChangeText={setInputValue}
              multiline
              style={{
                fontSize: 15,
                lineHeight: 24,
                color: IMPERIAL.text,
                minHeight: 50,
                textAlignVertical: 'top',
                textAlign: 'right',
                writingDirection: 'rtl',
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 12,
              paddingBottom: 12,
            }}
          >
            <TouchableOpacity
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                borderWidth: 1,
                borderColor: IMPERIAL.border,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PlusIcon size={18} color={IMPERIAL.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!inputValue.trim()}
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: inputValue.trim() ? IMPERIAL.primary : IMPERIAL.accent,
              }}
            >
              <ArrowUpIcon
                size={16}
                strokeWidth={3}
                color={inputValue.trim() ? IMPERIAL.primaryForeground : IMPERIAL.textTertiary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 18,
            gap: 8,
          }}
        >
          {suggestionTags.map((tag, index) => {
            const Icon = tag.icon;
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                style={{
                  height: 38,
                  paddingHorizontal: 14,
                  borderRadius: 19,
                  borderWidth: 1,
                  borderColor: IMPERIAL.border,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                  backgroundColor: IMPERIAL.glass,
                }}
              >
                <Icon size={16} color={IMPERIAL.gold} />
                <Text style={{ fontSize: 13, color: IMPERIAL.text }}>{tag.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
