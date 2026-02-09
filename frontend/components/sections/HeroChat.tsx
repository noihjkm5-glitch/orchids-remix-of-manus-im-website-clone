import { MANUS } from '@/lib/theme';
import {
  ArrowUpIcon,
  PlusIcon,
  SmartphoneIcon,
  MonitorIcon,
  GlobeIcon,
  PaletteIcon,
} from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';

const suggestionTags = [
  { icon: MonitorIcon, label: 'Create slides' },
  { icon: GlobeIcon, label: 'Build website' },
  { icon: SmartphoneIcon, label: 'Develop apps' },
  { icon: PaletteIcon, label: 'Design' },
];

export default function HeroChat() {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={{ alignItems: 'center', paddingHorizontal: 16, marginTop: 60 }}>
      <Text
        style={{
          fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : undefined,
          fontSize: 32,
          color: MANUS.text,
          fontWeight: '400',
          textAlign: 'center',
          lineHeight: 40,
          marginBottom: 32,
        }}
      >
        What can I do for you?
      </Text>

      <View style={{ width: '100%', maxWidth: 768 }}>
        <View
          style={{
            backgroundColor: MANUS.card,
            borderRadius: 22,
            borderWidth: 1,
            borderColor: MANUS.border,
            minHeight: 140,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 12 },
            shadowOpacity: 0.02,
            shadowRadius: 32,
            elevation: 1,
          }}
        >
          <View style={{ paddingHorizontal: 16, paddingTop: 12, minHeight: 80 }}>
            <TextInput
              placeholder="Assign a task or ask anything"
              placeholderTextColor={MANUS.textTertiary}
              value={inputValue}
              onChangeText={setInputValue}
              multiline
              style={{
                fontSize: 15,
                lineHeight: 24,
                color: MANUS.text,
                minHeight: 60,
                textAlignVertical: 'top',
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
                width: 32,
                height: 32,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: MANUS.border,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PlusIcon size={18} color={MANUS.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!inputValue.trim()}
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: inputValue.trim() ? MANUS.primary : MANUS.accent,
              }}
            >
              <ArrowUpIcon
                size={16}
                strokeWidth={3}
                color={inputValue.trim() ? MANUS.primaryForeground : MANUS.textTertiary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20, gap: 8 }}>
          {suggestionTags.map((tag, index) => {
            const Icon = tag.icon;
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                style={{
                  height: 40,
                  paddingHorizontal: 14,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: MANUS.border,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                }}
              >
                <Icon size={18} color={MANUS.textSecondary} />
                <Text style={{ fontSize: 14, color: MANUS.text }}>{tag.label}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 40,
              paddingHorizontal: 14,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: MANUS.border,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          >
            <Text style={{ fontSize: 14, color: MANUS.text }}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
