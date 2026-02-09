import { IMPERIAL } from '@/lib/theme';
import Svg, { Path, Circle, G, Defs, LinearGradient, Stop } from 'react-native-svg';

export default function GoldenEagle({ size = 120 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Defs>
        <LinearGradient id="eagleGold" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#e8d48b" />
          <Stop offset="0.5" stopColor="#d4af37" />
          <Stop offset="1" stopColor="#988561" />
        </LinearGradient>
        <LinearGradient id="eagleShine" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#f5e6a3" />
          <Stop offset="1" stopColor="#d4af37" />
        </LinearGradient>
      </Defs>
      <Circle cx="100" cy="100" r="90" fill="none" stroke="url(#eagleGold)" strokeWidth="2" opacity="0.3" />
      <Circle cx="100" cy="100" r="80" fill="none" stroke="url(#eagleGold)" strokeWidth="1" opacity="0.15" />
      <G>
        <Path
          d="M100 35 L105 50 L115 45 L110 60 L125 55 L118 68 L135 65 L125 78 L140 80 L128 88 L145 95 L130 98 L142 108 L125 105 L130 118 L115 112 L115 128 L105 118 L100 135 L95 118 L85 128 L85 112 L70 118 L75 105 L58 108 L70 98 L55 95 L72 88 L60 80 L75 78 L65 65 L82 68 L75 55 L90 60 L85 45 L95 50 Z"
          fill="url(#eagleGold)"
        />
        <Path
          d="M100 55 L104 65 L112 62 L108 72 L118 70 L113 78 L125 80 L115 86 L128 90 L118 93 L128 100 L116 99 L120 108 L110 104 L110 115 L104 108 L100 118 L96 108 L90 115 L90 104 L80 108 L84 99 L72 100 L82 93 L72 90 L85 86 L75 80 L87 78 L82 70 L92 72 L88 62 L96 65 Z"
          fill={IMPERIAL.forestDark}
        />
        <Circle cx="92" cy="78" r="3" fill="url(#eagleShine)" />
        <Circle cx="108" cy="78" r="3" fill="url(#eagleShine)" />
        <Path d="M97 85 L100 90 L103 85" fill="url(#eagleGold)" />
      </G>
      <Path
        d="M60 140 Q100 160 140 140"
        fill="none"
        stroke="url(#eagleGold)"
        strokeWidth="2"
        opacity="0.5"
      />
      <Path
        d="M65 148 Q100 165 135 148"
        fill="none"
        stroke="url(#eagleGold)"
        strokeWidth="1.5"
        opacity="0.3"
      />
    </Svg>
  );
}
