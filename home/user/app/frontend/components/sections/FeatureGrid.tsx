import { MANUS } from '@/lib/theme';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const features = [
  {
    title: 'Custom Web Tool',
    description: 'Create a specialized online tool, such as a custom calculator or unit converter.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/c8b332af6cc3b3aa30e1b4e0517722003f6c2f174b45d648d4061eefa75e4ae5.webp',
  },
  {
    title: 'Localize Content',
    description: 'Adapt your content for new markets with cultural and linguistic localization.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/a24da9913ab619feb9ff160c095b4830a21b7e95c46237b3b9-2.webp',
  },
  {
    title: 'Clean Data Output',
    description: 'Clean and structure your raw data into a polished, ready-to-use format.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/cc764634f0dffceddb47a83121c8cee6ac2032cb4da7f78ebf-3.webp',
  },
  {
    title: 'Automated Reminders',
    description: 'Set up automated meeting reminders from your Google Calendar.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/a954b2e9c5231aead9d482641c37c3d1367f7657778adf4572-4.webp',
  },
  {
    title: 'Career Document Crafter',
    description: 'Craft a compelling resume, CV, or cover letter to land your dream job.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/a63fbeca9d57651bfc8beb3f8e5215d993b1e75d2ce9c8fda5-5.webp',
  },
  {
    title: 'Professional Headshot',
    description: 'Generate a professional headshot for your profile picture or avatar.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/f5560a41fa82bd29e5cfbcd91437d65525959ceaad49b14a9a-6.webp',
  },
  {
    title: 'Design a Pitch Deck',
    description: 'Generate a compelling pitch deck to present a new project proposal.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/cce09837c7b09d74b47c8c24e2c697caf25159b4e9da07f11b-7.webp',
  },
  {
    title: 'Craft Professional Emails',
    description: 'Draft formal, well-structured business and professional emails.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/b186df39c0f8fd7c9e66db0a22255f7c2c8a1d2debe5cfe541-8.webp',
  },
  {
    title: 'Export to Table',
    description: 'Extract key information and organize it into a structured table format.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/15a1a5a9573688587c57da95664efded17d83a0ddc62de6872-9.webp',
  },
  {
    title: 'Build Personal Website',
    description: 'Create a professional personal website to showcase your portfolio.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/688d199a-6508-44ef-a37b-24dbf6a892f2-manus-im/assets/images/51b53d3c3d734802f062a60022a459e19ddf4e12d2bcfef8b0-10.webp',
  },
];

export default function FeatureGrid() {
  return (
    <View style={{ marginTop: 60, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 22, color: MANUS.text }}>
        What are you building?
      </Text>

      <View style={{ marginTop: 16, gap: 12 }}>
        {features.map((feature, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: MANUS.border,
              backgroundColor: MANUS.card,
              overflow: 'hidden',
            }}
          >
            <View style={{ flex: 1, padding: 16 }}>
              <Text
                numberOfLines={1}
                style={{ fontSize: 14, fontWeight: '500', lineHeight: 20, color: MANUS.text }}
              >
                {feature.title}
              </Text>
              <Text
                numberOfLines={3}
                style={{ marginTop: 4, fontSize: 13, lineHeight: 18, color: MANUS.textTertiary }}
              >
                {feature.description}
              </Text>
            </View>
            <Image
              source={{ uri: feature.image }}
              style={{ width: 88, height: 88 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
