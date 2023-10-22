import { Injectable } from '@angular/core';

interface Hooks {
  [index: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class HooksServiceService {
  hooks: Hooks;

  constructor() {
    this.hooks = {
      apps: [],
    };
  }

  getHook(name: string): string[] {
    return this.hooks[name];
  }

  register(name: string, hook: any): void {
    this.hooks[name] = hook;
  }
}
