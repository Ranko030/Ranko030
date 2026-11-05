import { Component, signal } from '@angular/core';
import { afterNextRender, DestroyRef, ElementRef, inject } from '@angular/core';
@Component({selector: 'app-root', imports: [], templateUrl: './app.html', styleUrl: './app.css'})
export class App {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const view = this.host.nativeElement.ownerDocument.defaultView;
      if (!view) return;
      const reducedMotion = view.matchMedia('(prefers-reduced-motion: reduce)');
      let frame: number | undefined;
      const update = () => {
        frame = undefined;
        const distance = this.host.nativeElement.scrollHeight - view.innerHeight;
        const progress = reducedMotion.matches || distance <= 0
          ? 0 : Math.min(1, Math.max(0, view.scrollY / distance));
        this.host.nativeElement.style.setProperty('--journey', `${progress * 100}%`);
        this.host.nativeElement.style.setProperty('--journey-scale', String(progress));
      };
      const schedule = () => {
        if (frame === undefined) frame = view.requestAnimationFrame(update);
      };
      view.addEventListener('scroll', schedule, { passive: true });
      view.addEventListener('resize', schedule);
      reducedMotion.addEventListener('change', schedule);
      const observer = new ResizeObserver(schedule);
      observer.observe(this.host.nativeElement);
      update();
      this.destroyRef.onDestroy(() => {
        view.removeEventListener('scroll', schedule);
        view.removeEventListener('resize', schedule);
        reducedMotion.removeEventListener('change', schedule);
        observer.disconnect();
        if (frame !== undefined) view.cancelAnimationFrame(frame);
      });
    });
  }

  readonly activeFilter = signal('All');
  readonly filters = ['All', 'Professional', 'Systems', 'Web', 'Games'];
  readonly projects = [
    { category: 'Professional', title: 'SFTC platform capabilities', description: 'Reliable services and product workflows for pool allocation, four-eyes approvals, undo reversal, and complete trades and settlements experiences.', tag: 'Java / Spring / Angular', status: 'FIS' },
    { category: 'Systems', title: 'Multiprogramming system', description: 'A multiprogramming operating-system project written in C, developed and tested in a virtualized environment.', tag: 'C / Operating Systems', status: 'Built' },
    { category: 'Games', title: 'Forgotten Kingdom', description: 'A 2D game built by a three-person team in collaboration with Ubisoft Belgrade, using a component-based architecture.', tag: 'C++17 / OpenGL / ECS', status: 'Team project', link: 'https://ubibeletf.github.io/course2020/#tired-bunch' },
    { category: 'Web', title: 'Full-stack web application', description: 'An end-to-end internet application built from a detailed specification, connecting an Angular interface to Node.js services.', tag: 'Angular / Node.js', status: 'Built' },
    { category: 'Systems', title: 'Assembler and linker', description: 'A custom assembler and linker implemented in C on Linux, turning low-level specifications into working system software.', tag: 'C / Linux', status: 'Built' },
    { category: 'Systems', title: 'MicroJava compiler', description: 'A compiler for MicroJava with lexical analysis and parsing, built with JFlex, CUP, and Java.', tag: 'Java / JFlex / CUP', status: 'Built' }
  ];

  readonly capabilities = [
    { number: '01', title: 'Reliable services', text: 'REST APIs, domain entities, workflow logic, and production features designed for dependable financial operations.' },
    { number: '02', title: 'Full-stack delivery', text: 'Backend services and Angular interfaces delivered together, including filters, actions, and complete page behavior.' },
    { number: '03', title: 'Systems thinking', text: 'A foundation in electrical engineering, operating systems, compilers, and low-level software that informs everyday design decisions.' }
  ];
}
