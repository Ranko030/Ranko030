import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { vi } from 'vitest';
describe('App', () => {
  it('reverses the palette on upward scroll and freezes it for reduced motion', async () => {
    const preference = Object.assign(new EventTarget(), { matches: false });
    vi.stubGlobal('matchMedia', () => preference);
    vi.stubGlobal('scrollY', 0);
    vi.stubGlobal('innerHeight', 800);
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    const element = fixture.nativeElement as HTMLElement;
    Object.defineProperty(element, 'scrollHeight', { configurable: true, value: 2800 });
    try {
      await fixture.whenStable();
      const scrollTo = async (position: number) => {
        vi.stubGlobal('scrollY', position);
        window.dispatchEvent(new Event('scroll'));
        await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      };
      await scrollTo(2000);
      expect(element.style.getPropertyValue('--journey')).toBe('100%');
      await scrollTo(1000);
      expect(element.style.getPropertyValue('--journey')).toBe('50%');
      await scrollTo(0);
      expect(element.style.getPropertyValue('--journey')).toBe('0%');
      preference.matches = true;
      preference.dispatchEvent(new Event('change'));
      await scrollTo(2000);
      expect(element.style.getPropertyValue('--journey')).toBe('0%');
    } finally {
      fixture.destroy();
      vi.unstubAllGlobals();
    }
  });

  it('filters the workspace projects and restores all projects', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Systems.');
    const buttons = element.querySelectorAll<HTMLButtonElement>('.filters button');
    buttons[1].click();
    await fixture.whenStable();
    expect(element.querySelectorAll('.project').length).toBe(1);
    expect(element.querySelector('.project h3')?.textContent).toContain('SFTC platform capabilities');
    expect(buttons[1].getAttribute('aria-pressed')).toBe('true');
    buttons[0].click();
    await fixture.whenStable();
    expect(element.querySelectorAll('.project').length).toBe(6);
  });
});
