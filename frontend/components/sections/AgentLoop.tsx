import { IMPERIAL } from '@/lib/theme';
import {
  CheckCircleIcon,
  CircleDotIcon,
  CircleIcon,
} from 'lucide-react-native';
import { View, Text } from 'react-native';

const stages = [
  { key: 'plan', label: 'التخطيط', labelEn: 'Plan' },
  { key: 'research', label: 'البحث', labelEn: 'Research' },
  { key: 'code', label: 'البرمجة', labelEn: 'Code' },
  { key: 'test', label: 'الاختبار', labelEn: 'Test' },
  { key: 'review', label: 'المراجعة', labelEn: 'Review' },
  { key: 'refine', label: 'التحسين', labelEn: 'Refine' },
  { key: 'deploy', label: 'النشر', labelEn: 'Deploy' },
];

interface AgentLoopProps {
  activeStage?: number;
}

export default function AgentLoop({ activeStage = 2 }: AgentLoopProps) {
  return (
    <View style={{ marginTop: 32, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: '700', color: IMPERIAL.gold, marginBottom: 4, textAlign: 'right' }}>
        محرك Agent Loop
      </Text>
      <Text style={{ fontSize: 12, color: IMPERIAL.textTertiary, marginBottom: 16, textAlign: 'right' }}>
        7 مراحل ذكية لتنفيذ مهامك بدقة
      </Text>

      <View
        style={{
          backgroundColor: IMPERIAL.card,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: IMPERIAL.border,
          padding: 16,
          gap: 6,
        }}
      >
        {stages.map((stage, index) => {
          const isCompleted = index < activeStage;
          const isActive = index === activeStage;

          return (
            <View
              key={stage.key}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: isActive ? IMPERIAL.accent : 'transparent',
                borderWidth: isActive ? 1 : 0,
                borderColor: IMPERIAL.border,
              }}
            >
              {isCompleted ? (
                <CheckCircleIcon size={18} color={IMPERIAL.success} />
              ) : isActive ? (
                <CircleDotIcon size={18} color={IMPERIAL.gold} />
              ) : (
                <CircleIcon size={18} color={IMPERIAL.textTertiary} />
              )}

              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text
                  style={{
                    fontSize: 11,
                    color: isActive ? IMPERIAL.gold : IMPERIAL.textTertiary,
                    fontWeight: '500',
                  }}
                >
                  {stage.labelEn}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? '700' : '500',
                    color: isCompleted ? IMPERIAL.success : isActive ? IMPERIAL.gold : IMPERIAL.textTertiary,
                  }}
                >
                  {stage.label}
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: isCompleted
                    ? IMPERIAL.success
                    : isActive
                      ? IMPERIAL.gold
                      : 'rgba(255,255,255,0.1)',
                }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
