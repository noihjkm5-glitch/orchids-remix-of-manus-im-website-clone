import AnnouncementBar from '@/components/sections/AnnouncementBar';
import FeatureGrid from '@/components/sections/FeatureGrid';
import Footer from '@/components/sections/Footer';
import HeroChat from '@/components/sections/HeroChat';
import Navbar from '@/components/sections/Navbar';
import { MANUS } from '@/lib/theme';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ backgroundColor: MANUS.background }}
    >
      <ScrollView
        className="flex-1"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Navbar />
        <AnnouncementBar />
        <HeroChat />
        <FeatureGrid />
        <Footer />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
