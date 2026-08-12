# Product Requirement Document — dowa-labs.com

**Project**: Master Showcase Website — Dowa Labs
**Versi**: 1.0
**Tanggal**: 29 Juli 2026
**Author**: Jeki Sauwani

---

## 1. Overview

Dowa Labs adalah product studio yang membangun software SaaS untuk menyelesaikan masalah nyata bisnis di Indonesia. Saat ini Dowa Labs menaungi dua produk aktif — **DowaLabs** (AI content generation untuk online seller) dan **DealerFlow** (sistem manajemen penjualan dealer mobil) — dengan rencana penambahan produk baru secara berkala.

`dowa-labs.com` dibangun sebagai **master showcase website**: satu halaman hub yang memperkenalkan Dowa Labs sebagai company/studio, menampilkan seluruh portofolio produk SaaS, dan mengarahkan pengunjung keluar ke domain masing-masing produk. Website ini **tidak** menjalankan fungsi produk (bukan aplikasi SaaS itu sendiri) — perannya murni sebagai etalase dan pusat kredibilitas.

**Target audiens**: campuran antara calon customer langsung, investor/partner potensial, dan calon klien custom development (Nvolve).

**Tujuan utama**:

1. Membangun kredibilitas Dowa Labs sebagai product studio, bukan sekadar individu/freelancer.
2. Menjadi pusat rujukan (single source of truth) untuk seluruh produk yang ada.
3. Mengarahkan traffic ke domain produk masing-masing dengan konversi yang jelas.
4. Mudah di-maintain saat jumlah produk bertambah, tanpa perlu redesign besar.

---

## 2. Requirement

### 2.1 Functional Requirements

| ID   | Requirement                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------------ |
| FR-1 | Sistem menampilkan daftar seluruh produk Dowa Labs dalam bentuk grid/card di homepage                              |
| FR-2 | Setiap card produk menampilkan nama, tagline, status (Live/Beta/Coming Soon), dan CTA link keluar ke domain produk |
| FR-3 | Sistem menyediakan form kontak yang mengirim pesan ke email/WhatsApp Dowa Labs                                     |
| FR-4 | Admin dapat menambah, mengubah, atau menyembunyikan produk tanpa perlu deploy ulang kode                           |
| FR-5 | Sistem mencatat setiap submission form kontak ke database                                                          |
| FR-6 | Website menampilkan section "Why Dowa Labs" dan "About/Founder story" sebagai konten statis yang mudah diedit      |

### 2.2 Non-Functional Requirements

| ID    | Requirement                                                      |
| ----- | ---------------------------------------------------------------- |
| NFR-1 | Waktu load halaman < 2 detik (Lighthouse Performance score > 90) |
| NFR-2 | Fully responsive — mobile, tablet, desktop                       |
| NFR-3 | SEO-friendly (meta tags, OpenGraph, sitemap, robots.txt)         |
| NFR-4 | Aksesibel di dark/light mode browser                             |
| NFR-5 | Hosting dan deployment murah/scalable (Vercel)                   |
| NFR-6 | Form kontak terproteksi dari spam (rate limiting/basic honeypot) |

---

## 3. Core Features

1. **Hero Section** — statement singkat tentang misi Dowa Labs.
2. **Product Showcase Grid** — komponen dinamis (data-driven, bukan hardcode) yang menampilkan seluruh produk aktif.
3. **Why Dowa Labs** — 3 poin diferensiasi (eksekusi cepat, lahir dari masalah nyata, AI-native).
4. **About/Founder Section** — cerita singkat di balik Dowa Labs.
5. **Contact Section** — form kontak + link WhatsApp Business.
6. **Admin Dashboard (internal, protected)** — CRUD sederhana untuk mengelola data produk (nama, tagline, status, link, logo) tanpa sentuh kode.
7. **Footer** — social links, copyright.

---

## 4. User Flow

**Flow utama — pengunjung umum**

```
Landing di dowa-labs.com
   → Baca hero statement
   → Scroll ke Product Grid
   → Klik card produk yang relevan
   → Redirect ke domain produk (mis. dowalabs.id)
```

**Flow sekunder — investor/partner**

```
Landing di dowa-labs.com
   → Scroll ke "Why Dowa Labs"
   → Baca About/Founder story
   → Isi form kontak untuk diskusi lebih lanjut
```

**Flow admin (internal)**

```
Login ke /admin (protected route)
   → Tambah/edit produk baru
   → Update status produk (Live/Beta/Coming Soon)
   → Simpan → otomatis muncul di homepage tanpa redeploy
```

---

## 5. Arsitektur

**Tech stack** (konsisten dengan stack Dowa Labs/DealerFlow yang sudah ada):

- **Frontend & Backend**: Next.js (App Router)
- **Database**: MongoDB (Atlas) via Mongoose
- **Auth (admin only)**: Better Auth, single admin role
- **Hosting**: Vercel
- **Styling**: Tailwind CSS
- **Form handling**: Server Action / API Route → simpan ke MongoDB + notifikasi (email/WhatsApp API opsional)

**High-level architecture:**

```
[Browser]
   │
   ▼
[Next.js App (Vercel)]
   ├── Public routes: /, /contact
   ├── Admin routes: /admin (protected via Better Auth)
   ├── API routes: /api/products, /api/contact
   │
   ▼
[MongoDB Atlas]
   ├── products collection
   └── contact_submissions collection
```

Produk (DowaLabs, DealerFlow, dst) berjalan sebagai **aplikasi terpisah di domain masing-masing** — tidak ada shared codebase atau shared auth dengan dowa-labs.com. Website ini murni layer presentasi/marketing di atasnya.

---

## 6. Desain & Technical Constraint

**Desain:**

- Gaya visual: clean, minimalis, ala studio SaaS modern (referensi: Vercel, Linear) — bukan warna-warni/playful.
- Tipografi: maksimal 2 font family (1 untuk heading, 1 untuk body).
- Palet warna netral dengan 1 accent color untuk CTA.
- Konsistensi komponen card antara homepage dan (nanti) halaman detail produk.

**Technical constraint:**

- Tidak boleh menyimpan kredensial/API key produk lain di sini — dowa-labs.com sepenuhnya independen dari sistem produk.
- Admin dashboard wajib protected (tidak boleh publicly accessible tanpa login).
- Data produk harus data-driven (dari database), bukan hardcoded di komponen, supaya scalable saat produk bertambah.
- Semua external link ke domain produk wajib `rel="noopener noreferrer"` dan dibuka di tab baru.
- Mobile-first development.

---

## 7. Entity Relationship Diagram (ERD)

```
┌─────────────────────────┐
│        Product           │
├─────────────────────────┤
│ _id            ObjectId  │  PK
│ name           String    │
│ slug           String    │  unique
│ tagline        String    │
│ description    String    │
│ status         Enum      │  (live | beta | coming_soon)
│ logo_url       String    │
│ external_url   String    │
│ category       String    │
│ order          Number    │  (urutan tampil di grid)
│ is_active      Boolean   │
│ created_at     Date      │
│ updated_at     Date      │
└─────────────────────────┘

┌─────────────────────────┐
│   ContactSubmission       │
├─────────────────────────┤
│ _id            ObjectId  │  PK
│ name           String    │
│ email          String    │
│ message        String    │
│ source_page    String    │
│ status         Enum      │  (new | read | replied)
│ created_at     Date      │
└─────────────────────────┘

┌─────────────────────────┐
│        AdminUser          │
├─────────────────────────┤
│ _id            ObjectId  │  PK
│ email          String    │  unique
│ password_hash  String    │
│ role           Enum      │  (owner)
│ created_at     Date      │
└─────────────────────────┘
```

Catatan: tidak ada relasi antar collection karena skalanya kecil (single admin, product list flat). Jika ke depan butuh kategori/tag lebih kompleks, `category` di `Product` bisa dipecah jadi collection terpisah dengan relasi.

---

## 8. Development Phases

**Phase 1 — Foundation (1 minggu)**

- Setup project Next.js + Tailwind + MongoDB connection
- Setup skema `Product` dan seed data (DowaLabs, DealerFlow)
- Build homepage statis (hero, grid, why section, footer) dengan data dummy

**Phase 2 — Dynamic Data (3-4 hari)**

- Hubungkan Product Grid ke database (API route `/api/products`)
- Build form kontak + simpan ke `ContactSubmission`
- SEO setup (meta tags, sitemap, OG image)

**Phase 3 — Admin Dashboard (3-4 hari)**

- Setup Better Auth untuk admin login
- Build CRUD sederhana untuk `Product` (tambah/edit/hapus/reorder)
- Build list view untuk `ContactSubmission`

**Phase 4 — Polish & Launch (2-3 hari)**

- Responsive check di semua breakpoint
- Performance audit (Lighthouse)
- Deploy ke Vercel + connect domain dowa-labs.com
- Final content review (copy, screenshot produk)

**Phase 5 — Post-launch (ongoing)**

- Tambah produk baru via admin dashboard saat ada rilis baru
- Iterasi copy berdasarkan feedback/analytics
- Opsional: tambah halaman detail per produk jika showcase-only dirasa kurang cukup
