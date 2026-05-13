import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  label?: string;
}

export function StarRating({
  value,
  onChange,
  max = 5,
  size = 'md',
  readOnly = false,
  label,
}: StarRatingProps) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
  }[size];

  const display = hovered ?? value;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <span className="text-xs font-medium text-amber-900/70 dark:text-amber-400/80 uppercase tracking-wide">
          {label}
        </span>
      )}
      <div className="flex gap-0.5">
        {Array.from({ length: max }).map((_, i) => {
          const starValue = i + 1;
          const filled = starValue <= display;
          return (
            <button
              key={i}
              type="button"
              disabled={readOnly}
              onClick={() => !readOnly && onChange?.(starValue)}
              onMouseEnter={() => !readOnly && setHovered(starValue)}
              onMouseLeave={() => !readOnly && setHovered(null)}
              className={`transition-all duration-150 ${readOnly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}`}
            >
              <Star
                className={`${sizeClass} transition-colors duration-150 ${
                  filled
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-transparent text-amber-300 dark:text-amber-600'
                }`}
              />
            </button>
          );
        })}
        {!readOnly && (
          <span className="ml-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
            {value}/5
          </span>
        )}
      </div>
    </div>
  );
}
