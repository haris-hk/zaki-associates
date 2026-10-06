export default function StarburstIcon({
  size = 24,
  color = 'currentColor',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="1.5" />
      <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="1.5" />
      <line x1="5.05" y1="5.05" x2="18.95" y2="18.95" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
      <line x1="18.95" y1="5.05" x2="5.05" y2="18.95" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
  );
}
