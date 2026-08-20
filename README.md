<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF2B2B,100:38B2AC&height=200&section=header&text=ban-devtools&fontSize=90&fontAlignY=38&desc=Ultimate%20React%20%26%20Next.js%20Protection&descAlignY=58&descAlign=62&fontColor=ffffff" />

# 🚀 ban-devtools

**Ultimate Anti-DevTools Protection for React & Next.js**

<p align="center">
  <a href="https://www.azzamcodex.site/" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Official_Website-azzamcodex.site-38B2AC?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Website"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/AzzamCyber/ban-devtools/stargazers"><img src="https://img.shields.io/github/stars/AzzamCyber/ban-devtools?style=for-the-badge&color=88CE02" alt="Stars Badge"/></a>
  <a href="https://www.npmjs.com/package/ban-devtools"><img src="https://img.shields.io/npm/dt/ban-devtools?style=for-the-badge&color=38B2AC" alt="NPM Downloads"/></a>
  <a href="https://www.npmjs.com/package/ban-devtools"><img src="https://img.shields.io/npm/v/ban-devtools?style=for-the-badge&color=FF2B2B" alt="NPM Version"/></a>
  <a href="https://github.com/AzzamCyber/ban-devtools/issues"><img src="https://img.shields.io/github/issues/AzzamCyber/ban-devtools?style=for-the-badge&color=blue" alt="Issues Badge"/></a>
  <a href="https://github.com/AzzamCyber/ban-devtools/blob/master/LICENSE"><img src="https://img.shields.io/github/license/AzzamCyber/ban-devtools?style=for-the-badge&color=yellow" alt="License Badge"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Online-brightgreen?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square" alt="Version"/>
  <img src="https://img.shields.io/badge/Maintained%3F-Yes-green?style=flat-square" alt="Maintained"/>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js"/></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/></a>
</p>

<a href="https://github.com/AzzamCyber/ban-devtools">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=1000&color=38B2AC&center=true&vCenter=true&width=600&lines=Block+F12+%26+Right+Click;Advanced+Debugger+Trap;Auto+Redirect+On+Breach;Native+React+Hooks" alt="Typing SVG" />
</a>

*Dibangun khusus untuk melindungi Source Code dan API Key dari tangan-tangan jahil di lingkungan React & Next.js.*

---

</div>

<br/>

## ✨ Fitur Unggulan

**`ban-devtools`** dibangun dengan arsitektur modern yang mengedepankan keamanan berlapis. Berikut adalah fitur utamanya:

<table>
  <tr>
    <td width="50%" align="center">
      <img src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png" width="50" alt="Icon"/>
      <h3>🛡️ Triple-Layer Protection</h3>
      <p>Melindungi aplikasi Anda dengan 3 cara: Blokir Shortcut, Jebakan Debugger, dan Heuristik Ukuran Layar. Tak ada celah untuk <i>Inspect Element</i>.</p>
    </td>
    <td width="50%" align="center">
      <img src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png" width="50" alt="Icon"/>
      <h3>⚡ Native React / Next.js</h3>
      <p>Bukan sekadar <i>vanilla script</i> yang diinjeksi. Library ini menyediakan <i>Component</i> dan <i>Hook</i> khusus (<code>&lt;BanDevTools /&gt;</code>) yang super ringan.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <img src="https://cdn-icons-png.flaticon.com/512/2783/2783321.png" width="50" alt="Icon"/>
      <h3>⏳ Instant Redirect</h3>
      <p>Jika DevTools berhasil dibuka secara paksa, pengguna akan seketika di-redirect ke URL yang Anda tentukan. Bawaan: <b>azzamcodex.site</b>.</p>
    </td>
    <td width="50%" align="center">
      <img src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png" width="50" alt="Icon"/>
      <h3>🔐 Block All Shortcuts</h3>
      <p>Menangkal secara presisi tombol <b>F12</b>, <b>Ctrl+Shift+I</b>, <b>Ctrl+Shift+J</b>, <b>Ctrl+Shift+C</b>, dan <b>Ctrl+U</b> (View Source) di Windows maupun Mac.</p>
    </td>
  </tr>
</table>

<br/>

## 🧠 Core Logic & Architecture

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" alt="line" width="100%">
</p>

Sistem perlindungan kami bekerja di belakang layar menggunakan **3 Algoritma Deteksi Utama**:

1. **Shortcut Interception**: 
   Sistem mencegat *event keyboard* dan menolak (*preventDefault*) setiap tombol yang mengarah ke Developer Tools. Aksi ini tidak akan langsung me-redirect pengguna, sehingga *experience* web tetap mulus jika tidak sengaja terpencet.
2. **Debugger Trap Loop**:
   Sistem menjalankan `debugger` secara *infinite loop* setiap 100ms. Jika DevTools terbuka, JavaScript akan membeku. Sistem menghitung *delay* eksekusi ini. Jika terlambat >100ms, sistem tahu DevTools terbuka dan mengeksekusi **Auto Redirect**.
3. **Resize Heuristic Detection**:
   Jika pengguna berhasil melewati jebakan *debugger* dan berhasil membuka DevTools (baik diposisikan di bawah atau samping layar), sistem membaca selisih antara `window.outerWidth` dan `window.innerWidth`. Jika selisihnya drastis (>160px), sistem akan langsung **Redirect**!

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" alt="line" width="100%">
</p>

<br/>

## 📖 Quick Start

Gunakan perlindungan mutlak ini dengan instalasi super mudah:

### 1. Instalasi
```bash
npm install ban-devtools
# atau
yarn add ban-devtools
# atau
pnpm add ban-devtools
```

### 2. Penggunaan di Next.js (App Router)
Cara terbaik untuk melindungi seluruh halaman secara global adalah memasangnya di `app/layout.tsx`.

```tsx
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

### 3. Penggunaan Spesifik Halaman (React / Pages Router)
Jika Anda hanya ingin melindungi halaman tertentu, gunakan *React Hook* `useBanDevTools`.

```tsx
import React from 'react';
import { useBanDevTools } from 'ban-devtools';

export default function TopSecretPage() {
  useBanDevTools({
    redirectUrl: 'https://www.azzamcodex.site/',
    disableRightClick: true,
  });

  return (
    <div>
      <h1>Halaman Rahasia Azzam Codex</h1>
      <p>Coba inspect elemen halaman ini jika bisa! 😎</p>
    </div>
  );
}
```

<br/>

## ⚙️ Configuration / API Options

| Properti | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `redirectUrl` | `string` | `'https://www.azzamcodex.site/'` | URL pengalihan saat DevTools terdeteksi. |
| `disableRightClick` | `boolean` | `true` | Memblokir menu konteks (Klik Kanan) agar *Inspect Element* tidak muncul. |
| `disableShortcuts` | `boolean` | `true` | Mencegah tombol F12, Ctrl+Shift+I/J/C, dan Ctrl+U. |
| `debuggerLoop` | `boolean` | `true` | Menjalankan jebakan `debugger` tanpa batas untuk mem-freeze browser jika DevTools diakses paksa. |

<br/>

## 💻 Tech Stack

Proyek ini dirancang menggunakan standar tinggi:

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=typescript,react,nextjs,nodejs,npm&theme=dark" alt="Tech Stack" />
  </a>
</p>

<br/>

## 🤝 Contributing & Support

Kontribusi selalu diterima! Lihat file [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan berkontribusi. 
- 🆘 Butuh bantuan? Cek [SUPPORT.md](SUPPORT.md).
- ⚠️ Baca [DISCLAIMER.md](DISCLAIMER.md) untuk informasi penggunaan (Gunakan dengan bijak, tidak disarankan untuk situs publik umum yang memerlukan aksesbilitas tinggi).

<br/>

## 💖 Support the Project

Jika proyek ini membantu mengamankan web Anda, pertimbangkan untuk memberikan dukungan:
- ⭐ Berikan **Star** pada repositori ini.
- 🚀 Bagikan proyek ini kepada teman-teman developer Anda.
- 💬 Berikan masukan atau saran melalui [Issues](https://github.com/AzzamCyber/ban-devtools/issues).

<br/>

## 👨‍💻 Credits

**Designed & Developed by [Azzam Codex](https://github.com/AzzamCyber)**

<p align="center">
  <a href="https://github.com/AzzamCyber">
    <img src="https://github-readme-stats.vercel.app/api?username=AzzamCyber&show_icons=true&theme=tokyonight" alt="AzzamCyber GitHub Stats"/>
  </a>
</p>

> *"Securing the web, one line of code at a time."*

Hak Cipta &copy; 2026 PT Azzam Codex. Dilindungi Undang-Undang.

---

<div align="center">
  <img src="https://img.shields.io/badge/Made%20with-💖%20&%20☕-ff69b4?style=for-the-badge" alt="Made with Love">
  <br/>
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF2B2B,100:38B2AC&height=100&section=footer" width="100%"/>
</div>
