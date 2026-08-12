# Codex Prompt — Redesign Hero Section (Abstract Background Graphic + Animation)

Konteks: ini adalah hero section landing page Next.js (App Router + Tailwind CSS + Framer Motion sudah ter-install) untuk Dowa Labs. Tugasmu adalah menambahkan ilustrasi abstrak/3D-look sebagai background layer di belakang teks hero, dengan animasi halus. JANGAN gunakan Three.js/WebGL/library 3D berat — gunakan pendekatan CSS + SVG + Framer Motion agar tetap ringan dan cepat load. Jangan ubah copy/teks yang sudah ada.

---

## 1. Struktur Layer

Hero section harus punya 3 layer, di-stack pakai `position: relative` pada container dan `position: absolute` untuk layer background:

```
[Layer 3 - paling depan]  Teks (headline, subheadline, CTA, avatar stack) — z-index: 10
[Layer 2 - tengah]        Geometric shapes (outline shapes, garis tipis)   — z-index: 5
[Layer 1 - paling belakang] Gradient blobs (soft blur, organic shapes)     — z-index: 0
```

Container hero: pastikan `overflow: hidden` supaya shape yang keluar dari viewport ter-crop rapi, dan `position: relative`.

---

## 2. Layer 1 — Gradient Blobs (organic, soft)

Buat 3 buah `<div>` blob dengan spesifikasi:

```tsx
<motion.div
  className="absolute rounded-full blur-3xl opacity-30"
  style={{
    width: 480,
    height: 480,
    background: "radial-gradient(circle, #10A876 0%, transparent 70%)",
    top: "-10%",
    right: "-5%",
  }}
  animate={{
    y: [0, -30, 0],
    x: [0, 15, 0],
  }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
/>
```

Buat 3 blob dengan variasi:

- Blob 1: hijau vibrant (`#10A876`), besar, posisi kanan-atas, animasi durasi 10s
- Blob 2: hijau muda (`#6ED9A8`), medium, posisi kiri-bawah, animasi durasi 14s, delay 2s, arah gerak berlawanan dengan Blob 1
- Blob 3: krem/putih kehangatan (`#FBF9F3`), kecil, posisi tengah, opacity lebih rendah (~15%), durasi 8s

Pastikan animasi masing-masing blob punya durasi dan delay berbeda supaya gerakannya tidak terlihat sinkron/robotik.

---

## 3. Layer 2 — Geometric Shapes (outline, abstract 3D-look)

Tambahkan 4-5 shape SVG outline (bukan solid fill) yang tersebar di sekitar area hero, memberi kesan "abstract tech/3D":

- 1 lingkaran outline tipis (stroke 1px, warna emerald-500 opacity 20%), diameter ~120px
- 1 persegi outline dengan sudut membulat, di-rotate 15 derajat, stroke tipis
- 2-3 garis diagonal tipis (seperti "grid lines"), opacity rendah
- Opsional: 1 shape "dot grid" kecil (kumpulan titik 3x3 atau 4x4) sebagai aksen dekoratif

Setiap shape diberi animasi float halus berbeda dari blob (gerakan lebih kecil, subtle rotate):

```tsx
<motion.div
  animate={{ rotate: [0, 8, 0], y: [0, -10, 0] }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
>
  {/* SVG shape di sini */}
</motion.div>
```

Posisikan shape-shape ini tersebar (jangan menumpuk di satu titik) — sebagian di area kanan (dekat mockup/produk area lama), sebagian kecil di sekitar teks headline (tapi tetap di belakang teks, opacity rendah supaya tidak mengganggu keterbacaan).

---

## 4. Parallax Halus (kesan depth)

Implementasikan parallax scroll ringan khusus untuk Layer 1 dan Layer 2 (bukan untuk teks):

- Gunakan `useScroll` dan `useTransform` dari Framer Motion untuk memetakan scroll position ke translateY.
- Layer 1 (blob) bergerak paling lambat (mis. `translateY` maksimal 40px saat scroll 300px pertama).
- Layer 2 (shapes) bergerak sedikit lebih cepat dari Layer 1 tapi tetap lebih lambat dari scroll asli (mis. maksimal 70px).
- Teks (Layer 3) TIDAK ikut parallax — tetap diam relatif terhadap scroll normal.

Contoh pola:

```tsx
const { scrollY } = useScroll();
const yBlob = useTransform(scrollY, [0, 300], [0, 40]);
const yShapes = useTransform(scrollY, [0, 300], [0, 70]);
```

---

## 5. Performance Constraint (WAJIB)

- Semua animasi HANYA boleh menganimasikan `transform` (translate, rotate, scale) dan `opacity` — dilarang animasikan `width`, `height`, `top`, `left` secara langsung di style yang bukan lewat transform, karena akan trigger reflow dan bikin lag.
- Blur (`blur-3xl` dll) hanya diterapkan pada blob yang jumlahnya sedikit (maksimal 3) — jangan blur banyak elemen sekaligus karena berat di GPU low-end/mobile.
- Di breakpoint mobile (`<768px`): sembunyikan Layer 2 (geometric shapes) sepenuhnya via `hidden md:block`, dan kurangi Layer 1 jadi maksimal 1 blob saja (matikan animasi parallax di mobile, gunakan `useMediaQuery` atau cek `window.innerWidth` untuk conditional rendering).
- Semua shape/blob harus `aria-hidden="true"` dan `pointer-events: none` karena murni dekoratif — tidak boleh mengganggu klik pada teks/tombol di depannya.
- Pastikan kontras teks headline tetap tinggi — background di belakang teks maksimal opacity 30% pada titik manapun. Jika Codex perlu, tambahkan subtle overlay putih/gelap semi-transparan tepat di belakang blok teks saja untuk menjamin keterbacaan (bukan di seluruh hero).

---

## 6. Testing

Setelah implementasi:

1. Jalankan `npm run build` — pastikan tidak ada error TypeScript/ESLint.
2. Cek di browser: pastikan teks headline tetap terbaca jelas dengan kontras baik di atas background baru.
3. Cek performance: buka DevTools → Performance tab, scroll hero section, pastikan FPS tetap di atas 50fps (tidak ada jank).
4. Cek responsive: resize browser ke ukuran mobile, pastikan shape kompleks ter-hide dan tidak ada horizontal scroll akibat shape yang overflow.
