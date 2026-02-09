import { IMPERIAL } from '@/lib/theme';
import {
  StarIcon,
  DownloadIcon,
  TerminalIcon,
  GlobeIcon,
  BrainCircuitIcon,
  DatabaseIcon,
  ImageIcon,
  MailIcon,
  GitBranchIcon,
  MessageSquareIcon,
  SearchIcon,
} from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tools = [
  { icon: TerminalIcon, name: 'Shell Explorer', desc: 'تنفيذ أوامر متقدمة', rating: 4.8, downloads: '12K', cat: 'dev' },
  { icon: GlobeIcon, name: 'Browser Auto', desc: 'أتمتة المتصفح', rating: 4.6, downloads: '8.5K', cat: 'auto' },
  { icon: BrainCircuitIcon, name: 'OpenAI Connector', desc: 'ربط مع GPT-4', rating: 4.9, downloads: '25K', cat: 'ai' },
  { icon: DatabaseIcon, name: 'Supabase Manager', desc: 'إدارة قاعدة البيانات', rating: 4.7, downloads: '15K', cat: 'dev' },
  { icon: ImageIcon, name: 'Image Generator', desc: 'توليد الصور بالذكاء', rating: 4.5, downloads: '18K', cat: 'ai' },
  { icon: MailIcon, name: 'Twilio SMS', desc: 'إرسال رسائل نصية', rating: 4.3, downloads: '6K', cat: 'comm' },
  { icon: GitBranchIcon, name: 'GitHub Sync', desc: 'مزامنة المستودعات', rating: 4.8, downloads: '20K', cat: 'dev' },
  { icon: MessageSquareIcon, name: 'Slack Bot', desc: 'ربط مع Slack', rating: 4.4, downloads: '9K', cat: 'comm' },
];

const categories = [
  { key: 'all', label: 'الكل' },
  { key: 'dev', label: 'تطوير' },
  { key: 'ai', label: 'ذكاء اصطناعي' },
  { key: 'auto', label: 'أتمتة' },
  { key: 'comm', label: 'تواصل' },
];

export default function MarketplaceScreen() {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter((t) => {
    const matchCat = activeCategory === 'all' || t.cat === activeCategory;
    const matchSearch = !searchQuery || t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.desc.includes(searchQuery);
    return matchCat && matchSearch;
  });

  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: IMPERIAL.background }}
      contentContainerStyle={{ paddingTop: insets.top + 8, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: IMPERIAL.gold, textAlign: 'right' }}>
          سوق الأدوات
        </Text>
        <Text style={{ fontSize: 13, color: IMPERIAL.textTertiary, textAlign: 'right', marginTop: 4 }}>
          تصفح وثبّت إضافات وأدوات جاهزة
        </Text>
      </View>

      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <View
          style={{
            backgroundColor: IMPERIAL.card,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: IMPERIAL.border,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
            gap: 8,
          }}
        >
          <SearchIcon size={18} color={IMPERIAL.textTertiary} />
          <TextInput
            placeholder="ابحث عن أداة..."
            placeholderTextColor={IMPERIAL.textTertiary}
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{
              flex: 1,
              fontSize: 14,
              color: IMPERIAL.text,
              paddingVertical: 12,
              textAlign: 'right',
              writingDirection: 'rtl',
            }}
          />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 8, marginBottom: 16 }}
        style={{ marginBottom: 16 }}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.key}
            onPress={() => setActiveCategory(cat.key)}
            activeOpacity={0.7}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: activeCategory === cat.key ? IMPERIAL.primary : IMPERIAL.card,
              borderWidth: 1,
              borderColor: activeCategory === cat.key ? IMPERIAL.gold : IMPERIAL.border,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: activeCategory === cat.key ? IMPERIAL.primaryForeground : IMPERIAL.text,
              }}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ paddingHorizontal: 16, gap: 10 }}>
        {filteredTools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <View
              key={index}
              style={{
                backgroundColor: IMPERIAL.card,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: IMPERIAL.border,
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 8,
                  backgroundColor: IMPERIAL.accent,
                  borderWidth: 1,
                  borderColor: IMPERIAL.border,
                }}
              >
                <Text style={{ fontSize: 11, fontWeight: '600', color: IMPERIAL.gold }}>تثبيت</Text>
              </TouchableOpacity>

              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: IMPERIAL.text }}>{tool.name}</Text>
                <Text style={{ fontSize: 12, color: IMPERIAL.textTertiary, marginTop: 2 }}>{tool.desc}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 6 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <Text style={{ fontSize: 11, color: IMPERIAL.textTertiary }}>{tool.downloads}</Text>
                    <DownloadIcon size={12} color={IMPERIAL.textTertiary} />
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <Text style={{ fontSize: 11, color: IMPERIAL.gold }}>{tool.rating}</Text>
                    <StarIcon size={12} color={IMPERIAL.gold} fill={IMPERIAL.gold} />
                  </View>
                </View>
              </View>

              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: IMPERIAL.accent,
                  borderWidth: 1,
                  borderColor: IMPERIAL.border,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={22} color={IMPERIAL.gold} />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
