import { MANUS } from '@/lib/theme';
import { ArrowUpIcon, PlusIcon } from 'lucide-react-native';
import { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Message {
  id: string;
  text: string;
  role: 'user' | 'assistant';
}

export default function ChatScreen() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const insets = useSafeAreaInsets();
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), text: inputValue.trim(), role: 'user' };
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: "I'm Manus, your AI assistant. This is a demo response.",
      role: 'assistant',
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputValue('');
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      className={`px-4 py-2 ${item.role === 'user' ? 'items-end' : 'items-start'}`}
    >
      <View
        style={{
          maxWidth: '80%',
          backgroundColor: item.role === 'user' ? MANUS.primary : MANUS.card,
          borderRadius: 16,
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderWidth: item.role === 'assistant' ? 1 : 0,
          borderColor: MANUS.border,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: item.role === 'user' ? MANUS.primaryForeground : MANUS.text,
          }}
        >
          {item.text}
        </Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ backgroundColor: MANUS.background }}
    >
      <View style={{ paddingTop: insets.top + 12, paddingHorizontal: 16, paddingBottom: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: MANUS.text }}>Chat</Text>
      </View>

      {messages.length === 0 ? (
        <View className="flex-1 items-center justify-center px-8">
          <Text style={{ fontSize: 20, fontWeight: '400', color: MANUS.text, textAlign: 'center' }}>
            Start a conversation
          </Text>
          <Text style={{ fontSize: 14, color: MANUS.textTertiary, textAlign: 'center', marginTop: 8 }}>
            Ask anything or assign a task
          </Text>
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          className="flex-1"
          contentContainerStyle={{ paddingVertical: 8 }}
        />
      )}

      <View style={{ paddingHorizontal: 12, paddingBottom: insets.bottom + 8, paddingTop: 8 }}>
        <View
          style={{
            backgroundColor: MANUS.card,
            borderRadius: 22,
            borderWidth: 1,
            borderColor: MANUS.border,
            flexDirection: 'row',
            alignItems: 'flex-end',
            paddingHorizontal: 12,
            paddingVertical: 8,
            gap: 8,
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

          <TextInput
            placeholder="Message..."
            placeholderTextColor={MANUS.textTertiary}
            value={inputValue}
            onChangeText={setInputValue}
            multiline
            style={{
              flex: 1,
              fontSize: 15,
              lineHeight: 22,
              color: MANUS.text,
              maxHeight: 100,
              paddingVertical: 4,
            }}
          />

          <TouchableOpacity
            onPress={sendMessage}
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
    </KeyboardAvoidingView>
  );
}
