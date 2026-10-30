// A soft settle when a number changes, so the eye catches the update.
const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export function tick(el: Element) {
  if (reduce) return;
  el.animate(
    [
      { transform: 'translateY(-3px)', opacity: 0.4, filter: 'blur(2px)' },
      { transform: 'none', opacity: 1, filter: 'blur(0)' },
    ],
    { duration: 240, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }
  );
}
