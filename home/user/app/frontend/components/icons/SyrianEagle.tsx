import { IMPERIAL } from '@/lib/theme';
import Svg, { Path, Circle, G, Defs, LinearGradient, Stop, Polygon } from 'react-native-svg';

export default function SyrianEagle({ size = 120 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Defs>
        <LinearGradient id="eagleGold" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#f5e6a3" />
          <Stop offset="0.3" stopColor="#e8d48b" />
          <Stop offset="0.6" stopColor="#d4af37" />
          <Stop offset="1" stopColor="#988561" />
        </LinearGradient>
        <LinearGradient id="eagleShine" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#f5e6a3" />
          <Stop offset="1" stopColor="#d4af37" />
        </LinearGradient>
        <LinearGradient id="bodyGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <Stop offset="0" stopColor="#e8d48b" />
          <Stop offset="1" stopColor="#b8941f" />
        </LinearGradient>
      </Defs>

      <Circle cx="100" cy="100" r="92" fill="none" stroke="url(#eagleGold)" strokeWidth="1.5" opacity="0.25" />

      <Polygon points="78,28 80,22 82,28" fill={IMPERIAL.syGreen} />
      <Polygon points="98,23 100,17 102,23" fill={IMPERIAL.syGreen} />
      <Polygon points="118,28 120,22 122,28" fill={IMPERIAL.syGreen} />

      <Path
        d="M100 42 L106 38 L104 46 L112 40 L108 50 L118 44 L112 54 L122 48 L115 58 L126 54 L118 64 L130 60 L120 70 L134 68 L122 76 L138 76 L124 82 L140 84 L126 88 L142 92 L128 94"
        fill="none" stroke="url(#eagleGold)" strokeWidth="2.5" strokeLinecap="round"
      />
      <Path
        d="M100 42 L94 38 L96 46 L88 40 L92 50 L82 44 L88 54 L78 48 L85 58 L74 54 L82 64 L70 60 L80 70 L66 68 L78 76 L62 76 L76 82 L60 84 L74 88 L58 92 L72 94"
        fill="none" stroke="url(#eagleGold)" strokeWidth="2.5" strokeLinecap="round"
      />

      <Path
        d="M100 40 C95 40 88 46 85 55 C82 64 80 72 78 80 C76 88 75 94 76 100 C77 106 80 110 85 115 C90 120 95 122 100 122 C105 122 110 120 115 115 C120 110 123 106 124 100 C125 94 124 88 122 80 C120 72 118 64 115 55 C112 46 105 40 100 40Z"
        fill="url(#bodyGrad)" opacity="0.9"
      />
      <Path
        d="M100 45 C96 45 91 50 88 58 C85 66 83 73 82 80 C81 87 81 92 82 97 C83 102 86 106 90 110 C94 114 97 115 100 115 C103 115 106 114 110 110 C114 106 117 102 118 97 C119 92 119 87 118 80 C117 73 115 66 112 58 C109 50 104 45 100 45Z"
        fill={IMPERIAL.forestDark}
      />

      <Path
        d="M100 48 L102 55 L99 55 Z"
        fill="url(#eagleShine)"
      />

      <Circle cx="93" cy="62" r="3.5" fill="url(#eagleShine)" />
      <Circle cx="93" cy="62" r="1.5" fill={IMPERIAL.forestDeep} />
      <Circle cx="107" cy="62" r="3.5" fill="url(#eagleShine)" />
      <Circle cx="107" cy="62" r="1.5" fill={IMPERIAL.forestDeep} />

      <Path d="M96 72 L100 78 L104 72" fill="url(#eagleGold)" strokeWidth="0.5" stroke="#b8941f" />

      <Path
        d="M128 94 L132 100 L128 106 L132 112 L126 116 L130 122"
        fill="none" stroke="url(#eagleGold)" strokeWidth="2" strokeLinecap="round"
      />
      <Path
        d="M124 96 L128 102 L124 108 L128 114 L122 118"
        fill="none" stroke="url(#eagleGold)" strokeWidth="1.5" strokeLinecap="round"
      />
      <Path
        d="M72 94 L68 100 L72 106 L68 112 L74 116 L70 122"
        fill="none" stroke="url(#eagleGold)" strokeWidth="2" strokeLinecap="round"
      />
      <Path
        d="M76 96 L72 102 L76 108 L72 114 L78 118"
        fill="none" stroke="url(#eagleGold)" strokeWidth="1.5" strokeLinecap="round"
      />

      <Path
        d="M88 122 L86 130 L84 138 L88 140 L92 134"
        fill="url(#eagleGold)" opacity="0.8"
      />
      <Path
        d="M96 124 L94 132 L92 140 L96 142 L100 136"
        fill="url(#eagleGold)" opacity="0.8"
      />
      <Path
        d="M104 124 L106 132 L108 140 L104 142 L100 136"
        fill="url(#eagleGold)" opacity="0.8"
      />
      <Path
        d="M112 122 L114 130 L116 138 L112 140 L108 134"
        fill="url(#eagleGold)" opacity="0.8"
      />
      <Path
        d="M100 126 L100 142 L98 142 L98 126"
        fill="url(#eagleGold)" opacity="0.8"
      />

      <Path
        d="M62 150 Q100 168 138 150"
        fill="none" stroke="url(#eagleGold)" strokeWidth="2" opacity="0.6"
      />

      <G opacity="0.12">
        <Path
          d="M55 165 L100 180 L145 165"
          fill="none" stroke={IMPERIAL.syGreen} strokeWidth="3"
        />
        <Path
          d="M55 170 L100 185 L145 170"
          fill="none" stroke={IMPERIAL.syWhite} strokeWidth="3"
        />
        <Path
          d="M55 175 L100 190 L145 175"
          fill="none" stroke={IMPERIAL.syBlack} strokeWidth="3"
        />
      </G>
    </Svg>
  );
}
