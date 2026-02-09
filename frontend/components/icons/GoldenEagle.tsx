import Svg, { Path, Circle, G, Defs, LinearGradient, Stop, Polygon } from 'react-native-svg';

export default function GoldenEagle({ size = 120 }: { size?: number }) {
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
        <LinearGradient id="tealBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#0d3333" />
          <Stop offset="1" stopColor="#0a2a2a" />
        </LinearGradient>
      </Defs>

      <Circle cx="100" cy="100" r="94" fill="none" stroke="url(#eagleGold)" strokeWidth="2.5" opacity="0.4" />
      <Circle cx="100" cy="100" r="88" fill="none" stroke="url(#eagleGold)" strokeWidth="1" opacity="0.15" />

      <Polygon points="85,28 87,22 89,28" fill="#007A3D" />
      <Polygon points="98,25 100,19 102,25" fill="#007A3D" />
      <Polygon points="111,28 113,22 115,28" fill="#007A3D" />

      <G>
        <Path
          d="M100 38 L103 48 L108 46 L106 55 L112 52 L109 60 L116 58 L112 66 L120 64 L115 72 L124 72 L118 78 L128 80 L120 85 L130 90 L120 92 L128 98 L118 97 L122 106 L112 102 L112 112 L106 105 L100 115 L94 105 L88 112 L88 102 L78 106 L82 97 L72 98 L80 92 L70 90 L80 85 L72 80 L82 78 L76 72 L85 72 L80 66 L88 64 L84 58 L91 60 L88 52 L94 55 L92 46 L97 48 Z"
          fill="url(#eagleGold)"
        />
        <Path
          d="M100 50 L103 58 L108 56 L106 63 L112 61 L109 68 L116 67 L112 73 L120 74 L114 79 L122 82 L115 85 L122 90 L114 90 L117 97 L110 94 L110 103 L105 97 L100 105 L95 97 L90 103 L90 94 L83 97 L86 90 L78 90 L85 85 L78 82 L86 79 L80 74 L88 73 L84 67 L91 68 L88 61 L94 63 L92 56 L97 58 Z"
          fill="#0d3333"
        />
        <Circle cx="94" cy="72" r="2.5" fill="url(#eagleShine)" />
        <Circle cx="106" cy="72" r="2.5" fill="url(#eagleShine)" />
        <Path d="M98 78 L100 83 L102 78" fill="url(#eagleGold)" strokeWidth="0.5" stroke="#d4af37" />
      </G>

      <Path d="M70 120 L76 115 L72 125" fill="url(#eagleGold)" opacity="0.8" />
      <Path d="M80 122 L86 117 L82 127" fill="url(#eagleGold)" opacity="0.7" />
      <Path d="M90 123 L96 118 L92 128" fill="url(#eagleGold)" opacity="0.6" />
      <Path d="M100 124 L100 118 L100 128" fill="url(#eagleGold)" opacity="0.5" />
      <Path d="M110 123 L104 118 L108 128" fill="url(#eagleGold)" opacity="0.6" />
      <Path d="M120 122 L114 117 L118 127" fill="url(#eagleGold)" opacity="0.7" />
      <Path d="M130 120 L124 115 L128 125" fill="url(#eagleGold)" opacity="0.8" />

      <Path
        d="M65 140 Q82 148 100 150 Q118 148 135 140"
        fill="none"
        stroke="url(#eagleGold)"
        strokeWidth="2"
        opacity="0.5"
      />
      <Path
        d="M70 148 Q85 155 100 156 Q115 155 130 148"
        fill="none"
        stroke="url(#eagleGold)"
        strokeWidth="1.5"
        opacity="0.3"
      />

      <G opacity="0.6">
        <Path d="M75 160 L78 155 L81 160 Z" fill="url(#eagleGold)" />
        <Path d="M90 162 L93 157 L96 162 Z" fill="url(#eagleGold)" />
        <Path d="M104 162 L107 157 L110 162 Z" fill="url(#eagleGold)" />
        <Path d="M119 160 L122 155 L125 160 Z" fill="url(#eagleGold)" />
      </G>
    </Svg>
  );
}
