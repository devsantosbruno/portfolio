import gsap from 'gsap';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageIn = (href: string, router: AppRouterInstance) => {
  const pageTransitionElement = document.getElementById(
    'pageTransitionElement'
  );

  if (pageTransitionElement) {
    const tl = gsap.timeline();

    tl.set([pageTransitionElement], {
      top: 2000,
      transition: 1,
    }).to([pageTransitionElement], {
      top: 0,
      transition: 1,
      onComplete: () => {
        setTimeout(() => {
          animatePageOut(href, router);
        }, 1500);
      },
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const pageTransitionElement = document.getElementById(
    'pageTransitionElement'
  );

  if (pageTransitionElement) {
    const tl = gsap.timeline();

    tl.set([pageTransitionElement], {
      top: 0,
      transition: 1,
    }).to([pageTransitionElement], {
      top: -2000,
      transition: 1,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
