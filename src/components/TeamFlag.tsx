import { getFlagUrl } from '../data/teams';

interface Props {
  flagCode: string;
  name: string;
  size?: number;
}

export default function TeamFlag({ flagCode, name, size = 20 }: Props) {
  return (
    <img
      src={getFlagUrl(flagCode)}
      alt={name}
      width={size}
      height={Math.round(size * 0.75)}
      className="inline-block rounded-sm object-cover"
      style={{ width: size, height: Math.round(size * 0.75) }}
      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
    />
  );
}
