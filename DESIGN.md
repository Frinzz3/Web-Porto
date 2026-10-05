# DESIGN.md — Animated Portfolio Reference Translation

## 1. Design Intent

Buat portfolio personal satu halaman yang **mengambil bahasa visual dari video referensi**, bukan menyalin video menjadi slideshow.

Video referensi berdurasi ±37 detik, 1024×576, dan memperlihatkan urutan visual seperti:

1. Cover / hero: foto besar + label `portfolio` + nama.
2. About: headline nama + paragraf pendek + foto portrait + contact strip.
3. Education: kartu pendidikan, pencapaian, dan CTA kecil.
4. Software skills: daftar kemampuan + logo aplikasi.
5. Internship / experience: organisasi, periode, tanggung jawab, hasil, foto.
6. Community / organization experience: posisi + periode + tugas + foto.
7. Certificate: dokumen sertifikat besar sebagai visual utama.
8. Closing: foto hero yang sama + `terima kasih` + contact.

### Prinsip utama

- Editorial, personal, modern, sedikit playful.
- Banyak whitespace.
- Foto menjadi anchor utama, bukan ornamen kecil.
- Teks dibungkus dalam kartu putih dengan radius besar.
- Elemen terasa seperti kolase/editorial board.
- Background cenderung soft/off-white dengan foto yang diberi blur/opacity rendah.
- Kontras utama berasal dari hitam/putih; gunakan 1 warna aksen yang konsisten untuk CTA atau badge.
- Animasi harus terasa seperti bagian dari komposisi, bukan efek dekoratif acak.

## 2. Visual System

### Color tokens

```text
--background: #F3F1EC
--surface: #FFFFFF
--foreground: #171717
--muted: #6F6F6F
--border: rgba(23, 23, 23, 0.10)
--accent: #D7263D
--accent-soft: #F5D9DE
--overlay: rgba(255,255,255,0.72)
```

Catatan: warna aksen adalah titik awal. Agent boleh menyesuaikan setelah melihat asset final, tetapi jangan membuat palette terlalu ramai.

### Typography

Gunakan kombinasi sans modern dengan hierarchy kuat:

- Display: font sans variable yang berat, ukuran desktop sangat besar.
- Body: sans neutral dengan line-height longgar.
- Label/keterangan: uppercase/small caps atau font size kecil + tracking positif.

Rekomendasi implementasi: gunakan `next/font/google` hanya bila font pilihan sudah jelas. Jangan menambah 5–6 font.

### Shape language

- Card radius: 18–28px.
- CTA pill radius: 999px.
- Image frame: 24–32px pada elemen hero.
- Shadow: sangat halus; hindari dashboard-shadow yang berat.
- Border: 1px solid opacity rendah.

## 3. Page Architecture

Gunakan satu landing page dengan anchored sections:

```text
/
├── Hero
├── About
├── Education
├── Skills
├── Experience
├── Organization
├── Certificates
└── Contact / Closing
```

Jangan memecah menjadi banyak route kecuali memang ada konten detail yang substansial. Portfolio referensi lebih kuat sebagai continuous visual story.

## 4. Section Composition

### Hero

Komposisi desktop:

- Full viewport/min-height 100svh.
- Foto utama memenuhi ±55–70% area.
- `portfolio` sebagai headline besar.
- Nama kecil/medium di bawah atau menempel di image frame.
- Tiny meta di sudut, misalnya tahun / role.

Animation:

- Initial load: image clip-path reveal.
- Headline masuk dari bawah dengan stagger.
- Meta muncul terakhir.
- Very slow image scale 1 → 1.04 saat user scroll.

### About

Gunakan layout asymmetrical 12-column.

- Left: section label + large name.
- Center/left: short narrative.
- Right: portrait/image card.
- Bottom: compact contact chips.

Animation:

- Headline line reveal.
- Paragraph opacity + y transition.
- Portrait parallax ringan.
- Contact chips pop in berurutan.

### Education

Jangan render seperti tabel CV. Pakai 2–3 floating cards.

Card content:

- institution
- program
- period
- achievement
- optional button/link

Animation:

- Cards stagger dari posisi kecil berbeda.
- Logo/icon scale 0.92 → 1.
- Saat hover desktop: translateY(-4px) + slight rotate.

### Skills

Kiri: list text.
Kanan: visual grid/logo cloud.

Jangan menggunakan logo besar yang mengambil seluruh layar. Fokus pada hierarchy dan grouping.

Animation:

- List rows reveal saat masuk viewport.
- Logo grid muncul staggered.
- Hover: card tilt maksimal 2–3deg; jangan pakai 3D berat.

### Experience / Organization

Setiap pengalaman berupa editorial card:

```text
TITLE
ROLE / PERIOD
DESCRIPTION
OUTCOME / IMPACT
IMAGE(S)
```

Desktop bisa memakai sticky text di kiri dan image stack di kanan.

Animation yang disarankan:

- Active experience berubah berdasarkan scroll position.
- Image stack bergeser/scale sedikit.
- Text menggunakan opacity + x/y transition.
- Satu section boleh memakai `sticky` + scroll progress, tetapi harus tetap ringan.

### Certificates

Sertifikat merupakan visual hero kedua.

- Dokumen besar.
- Background netral.
- Metadata kecil di samping.
- Bisa klik untuk membuka image/fullscreen.

Animation:

- Document rotateX ringan dari 4deg ke 0deg.
- Shadow/scale masuk dengan spring.

### Closing

Gunakan hero image atau image keluarga visual yang sama seperti opening untuk membuat loop.

- `terima kasih` / closing statement besar.
- Contact links.
- Social / email.
- Tiny footer.

Animation:

- Closing text muncul perlahan.
- Background image scale turun dari 1.05 ke 1.
- Contact button mengubah state saat hover/focus.

## 5. Motion Rules

### Global

Gunakan satu motion language.

- Fast UI: 160–240ms.
- Standard reveal: 500–800ms.
- Editorial transition: 800–1400ms.
- Spring hanya untuk micro interaction/layout.
- Easing default: cubic-bezier halus, hindari semua animasi memakai `linear`.

### Scroll

Prioritas transform/opacity/clip-path daripada properties layout yang mahal.

Utamakan:

- `transform`
- `opacity`
- `clip-path`
- `filter` secukupnya

Hindari animasi terus-menerus pada:

- width/height
- top/left
- box-shadow yang sangat besar
- blur intens setiap frame

### Reduced motion

Wajib mendukung:

```css
@media (prefers-reduced-motion: reduce) {
  /* disable parallax, long transitions, continuous motion */
}
```

Pada reduced motion, konten tetap terlihat lengkap dan urutan visual tetap masuk akal.

## 6. Responsive Rules

### Desktop ≥ 1024px

Pertahankan komposisi editorial/asymmetrical.

### Tablet 768–1023px

- Kurangi overlapping.
- Ubah beberapa sticky composition menjadi normal flow.
- Kurangi display font.

### Mobile < 768px

Jangan memaksa layout desktop.

- Semua card menjadi vertical stack.
- Image ratio lebih tinggi.
- Headline tetap besar tetapi responsif.
- Hilangkan efek hover-only.
- Kurangi parallax.
- Sticky section hanya dipakai bila benar-benar meningkatkan UX.

## 7. Accessibility

Wajib:

- semantic headings.
- alt text bermakna.
- visible keyboard focus.
- contrast yang cukup.
- reduced-motion support.
- tombol/link punya accessible name.
- tidak mengandalkan animasi untuk menyampaikan informasi.

## 8. Anti-patterns

Jangan lakukan:

- gradient neon everywhere.
- glassmorphism berlebihan.
- 20 jenis animation berbeda.
- cursor follower besar yang mengganggu.
- loading screen panjang.
- fake 3D hanya untuk terlihat "keren".
- scroll hijacking yang memaksa pengguna.
- autoplay audio.
- section yang terlalu padat seperti resume PDF.
- memasukkan semua pengalaman tanpa hierarchy.
