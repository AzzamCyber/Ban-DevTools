<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2C3E50,100:000000&height=200&section=header&text=ban-devtools&fontSize=90&fontAlignY=38&desc=Enterprise-Grade%20Anti-DevTools%20for%20React&descAlignY=58&descAlign=62&fontColor=ffffff" />

# ban-devtools

**Enterprise-Grade Anti-DevTools Protection for React & Next.js**

<br />

<p align="center">
  <a href="https://github.com/AzzamCyber/Ban-DevTools/stargazers"><img src="https://img.shields.io/github/stars/AzzamCyber/Ban-DevTools?style=for-the-badge&color=2C3E50" alt="Stars Badge"/></a>
  <a href="https://www.npmjs.com/package/ban-devtools"><img src="https://img.shields.io/npm/dt/ban-devtools?style=for-the-badge&color=000000" alt="NPM Downloads"/></a>
  <a href="https://www.npmjs.com/package/ban-devtools"><img src="https://img.shields.io/npm/v/ban-devtools?style=for-the-badge&color=34495E" alt="NPM Version"/></a>
  <a href="https://github.com/AzzamCyber/Ban-DevTools/blob/main/LICENSE"><img src="https://img.shields.io/github/license/AzzamCyber/Ban-DevTools?style=for-the-badge&color=BDC3C7" alt="License Badge"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Open_Source-Yes-2C3E50?style=flat-square" alt="Open Source"/>
  <img src="https://img.shields.io/badge/Maintained-Active-000000?style=flat-square" alt="Maintained"/>
</p>

<a href="https://github.com/AzzamCyber/Ban-DevTools">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=500&size=20&duration=3000&pause=1000&color=2C3E50&center=true&vCenter=true&width=600&lines=Advanced+Debugger+Trap;Heuristic+Resize+Detection;Shortcut+Interception;Zero-Dependency+Architecture" alt="Typing SVG" />
</a>

*Engineered to protect proprietary Source Code and API Keys from unauthorized inspection in React and Next.js environments.*

---

</div>

<br/>

## Open Source Commitment

**ban-devtools** is a fully Open Source library. It is built by the community, for the community. Developers are encouraged to audit the source code, fork the repository, and contribute to the ongoing security and optimization of this package. We believe in transparency and robust security through peer review.

<br/>

## Core Features

This library utilizes a multi-layered security architecture.

<table>
  <tr>
    <td width="50%" align="center">
      <img src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png" width="45" alt="Shield"/>
      <h3>Triple-Layer Security</h3>
      <p>Protects your application through Shortcut Blocking, Debugger Traps, and Window Resize Heuristics.</p>
    </td>
    <td width="50%" align="center">
      <img src="https://cdn-icons-png.flaticon.com/512/3262/3262113.png" width="45" alt="React"/>
      <h3>Native React Integration</h3>
      <p>Provides highly optimized React Hooks and Components, avoiding heavy DOM manipulations.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <img src="https://cdn-icons-png.flaticon.com/512/3208/3208726.png" width="45" alt="Redirect"/>
      <h3>Instant Auto-Redirect</h3>
      <p>The moment DevTools is forcibly opened, the script instantly redirects the user to a secure destination.</p>
    </td>
    <td width="50%" align="center">
      <img src="https://cdn-icons-png.flaticon.com/512/2089/2089805.png" width="45" alt="Keyboard"/>
      <h3>Precision Interception</h3>
      <p>Blocks F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, and Ctrl+U at the event listener level.</p>
    </td>
  </tr>
</table>

<br/>

## Under The Hood (Architecture Logic)

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">
</p>

The internal mechanism, `useBanDevTools`, operates on three distinct vectors of detection:

1. **Shortcut Interception**: 
   Intercepts keydown events globally and invokes `e.preventDefault()`. This stops the browser's native behavior without immediately triggering a redirect, maintaining a seamless user experience for accidental keystrokes.
2. **Debugger Trap Loop**:
   Executes a continuous `debugger` instruction within a 100ms interval loop. When DevTools is opened, the JavaScript engine halts execution. Our script calculates the execution delay; if it exceeds 100ms, it confirms a breach and executes the redirect protocol.
3. **Resize Heuristic Detection**:
   A failsafe mechanism. If the debugger trap is bypassed and DevTools docks to the browser window, it forcefully reduces the `window.innerWidth` or `window.innerHeight`. The script detects this aggressive delta (>160px) and immediately redirects the user.

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">
</p>

<br/>

## Installation

```bash
npm install ban-devtools
# or
yarn add ban-devtools
```

<br/>

## Implementation Guide

### Global Protection (Next.js App Router)

To secure the entire application, wrap your application at the root layout level.

```tsx
// app/layout.tsx
import { BanDevTools } from 'ban-devtools';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BanDevTools redirectUrl="https://www.azzamcodex.site/" />
        {children}
      </body>
    </html>
  );
}
```

### Component-Level Protection (React Hooks)

For granular control, utilize the `useBanDevTools` hook directly inside specific functional components.

```tsx
import React from 'react';
import { useBanDevTools } from 'ban-devtools';

export default function SecureDashboard() {
  
  // Initialize the protection hook
  useBanDevTools({
    redirectUrl: 'https://www.azzamcodex.site/',
    disableRightClick: true,
    disableShortcuts: true,
    debuggerLoop: true,
  });

  return (
    <div>
      <h1>Enterprise Dashboard</h1>
      <p>This component is protected against source inspection.</p>
    </div>
  );
}
```

<br/>

## Configuration Reference

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `redirectUrl` | `string` | `'https://www.azzamcodex.site/'` | The secure URL destination when an inspection attempt is detected. |
| `disableRightClick` | `boolean` | `true` | Disables the context menu to prevent manual inspection. |
| `disableShortcuts` | `boolean` | `true` | Intercepts F12 and common Chromium/WebKit inspection shortcuts. |
| `debuggerLoop` | `boolean` | `true` | Activates the infinite debugger trap and execution timer. |

<br/>

## Tech Stack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=typescript,react,nextjs,nodejs,npm&theme=light" alt="Tech Stack" />
  </a>
</p>

<br/>

## Credits & License

**Designed & Engineered by [Azzam Codex](https://github.com/AzzamCyber)**

<p align="center">
  <a href="https://github.com/AzzamCyber">
    <img src="https://github-readme-stats.vercel.app/api?username=AzzamCyber&show_icons=true&theme=tokyonight" alt="AzzamCyber GitHub Stats"/>
  </a>
</p>

Copyright &copy; 2026 Azzam Codex. All Rights Reserved.
Licensed under the MIT License.

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,100:2C3E50&height=100&section=footer" width="100%"/>
</div>
