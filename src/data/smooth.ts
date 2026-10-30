import Lenis from 'lenis';

// Inertial wheel scrolling for the whole site. Touch keeps the device's native scroll,
// and anyone who asks for reduced motion gets plain scrolling.
export function mountSmoothScroll() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    smoothWheel: true,
    autoRaf: true,
    // In-page links land below the sticky nav.
    anchors: { offset: -88, duration: 1.1, easing: (t: number) => 1 - Math.pow(1 - t, 4) },
    // Areas that scroll on their own keep their native scroll.
    prevent: (node: HTMLElement) =>
      !!node.closest?.('[data-lenis-prevent], .clip__log, .sheet, .sch__scroll, .mega, textarea, select'),
  });

  (window as unknown as { lenis: Lenis }).lenis = lenis;

  // Opening the mobile menu freezes the page behind it.
  const menu = document.querySelector<HTMLButtonElement>('[data-menu]');
  if (menu) {
    new MutationObserver(() => (menu.getAttribute('aria-expanded') === 'true' ? lenis.stop() : lenis.start()))
      .observe(menu, { attributes: true, attributeFilter: ['aria-expanded'] });
  }
  return lenis;
}
