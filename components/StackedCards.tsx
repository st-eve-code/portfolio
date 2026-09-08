"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export type StackedCardItem = {
  src: string;
  alt: string;
};

type Props = {
  cards: StackedCardItem[];
  /** Milliseconds between auto-advances. Default: 3000 */
  interval?: number;
};

/**
 * A data-driven stacked card deck.
 *
 * - The "top" card is always `cards[activeIndex]`.
 * - Every `interval` ms (default 3s) the deck advances automatically.
 * - Clicking the deck also advances to the next card.
 * - Cards behind the top are fanned with rotation + translate so the
 *   full deck depth is visible.
 * - Switching cards: the outgoing top card animates to the back of the
 *   stack while the next card rises to the front.
 */
export default function StackedCards({ cards, interval = 3000 }: Props) {
  // `order` is a queue: order[last] = index of the top card.
  // Re-initialize whenever the cards array length changes.
  const [order, setOrder] = useState<number[]>(() =>
    Array.from({ length: cards.length }, (_, i) => i)
  );

  // Keep order in sync if cards.length changes (e.g. hot-reload or prop change)
  useEffect(() => {
    setOrder(Array.from({ length: cards.length }, (_, i) => i));
  }, [cards.length]);

  const advance = useCallback(() => {
    setOrder((prev) => {
      const next = [...prev];
      const top = next.pop()!;
      next.unshift(top);
      return next;
    });
  }, []);

  // Auto-advance
  useEffect(() => {
    if (cards.length <= 1) return;
    const id = setInterval(advance, interval);
    return () => clearInterval(id);
  }, [advance, cards.length, interval]);

  if (cards.length === 0) return null;

  /**
   * Returns CSS transform values for a card at position `posFromTop`
   * (0 = top/front, 1 = one below, etc.)
   */
  const getTransform = (posFromTop: number) => {
    if (posFromTop === 0) {
      return { rotate: 0, x: 0, y: 0, scale: 1 };
    }
    const dir = posFromTop % 2 === 0 ? 1 : -1;
    return {
      rotate: dir * posFromTop * 5,
      x: -posFromTop * 12,
      y: posFromTop * 5,
      scale: 1 - posFromTop * 0.035,
    };
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer select-none"
      onClick={advance}
      role="button"
      aria-label="Advance to next look"
      title="Click to see next look"
    >
      {order.map((cardIndex, stackPos) => {
        // stackPos 0 = bottom of visual stack, last = top
        const posFromTop = order.length - 1 - stackPos;
        const { rotate, x, y, scale } = getTransform(posFromTop);
        const card = cards[cardIndex];
        const isTop = posFromTop === 0;

        // Guard: skip if index is out of bounds (can happen during re-sync)
        if (!card) return null;

        return (
          <div
            key={cardIndex}
            className="absolute inset-0 overflow-hidden rounded-sm shadow-2xl"
            style={{
              transform: `rotate(${rotate}deg) translate(${x}px, ${y}px) scale(${scale})`,
              zIndex: stackPos + 1,
              transformOrigin: "bottom center",
              transition: "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)",
              opacity: isTop ? 1 : 0.92,
            }}
          >
            <Image
              src={card.src}
              alt={card.alt}
              fill
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 360px"
              className="object-cover object-top"
              priority={isTop}
            />

            {/* Subtle click hint on the top card only */}
            {isTop && (
              <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                <span className="text-[10px] font-medium tracking-wide text-white/80 uppercase">
                  tap
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
