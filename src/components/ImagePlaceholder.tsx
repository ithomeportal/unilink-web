import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  description: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait';
}

export default function ImagePlaceholder({
  description,
  className = '',
  aspectRatio = 'video',
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    portrait: 'aspect-[3/4]',
  };

  return (
    <div
      className={`image-placeholder ${aspectClasses[aspectRatio]} ${className}`}
    >
      <div className="flex flex-col items-center gap-3">
        <ImageIcon size={48} className="opacity-50" />
        <p className="text-sm font-medium max-w-xs">{description}</p>
      </div>
    </div>
  );
}
