// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import FactSection from "./components/icons/FactSection.astro";
import FactSection1 from "./components/icons/FactSection1.astro";

export const siteConfig = {
    SITE_TITLE: 'Qissa ID',
    SITE_DESCRIPTION: 'Jasa Kelola Akun Tiktok! Konten FYP, Jualan Makin Pede',
    headlineH1: 'Jasa Kelola Akun Tiktok',
    headlineH2: 'Konten FYP, Jualan Makin Pede ',
    headlineP: 'Solusi manajemen, naikkan view dan follower akun tiktok biar bisnis makin eksis',
};

export const factSection = [
    {
        title: "Pengen sosmednya rame",
        description: "Punya akun sosmed / tiktok yang berfollower real person dan aktif berinteraksi",
        icon: FactSection
    },

    {
        title: "Viral dan terkenal",
        description: "Jangkauan konten yang luas, brand bisnis anda dikenal sehingga meningkatkan penjualan",
        icon: FactSection1
    },
    {
        title: "Efisiensi biaya",
        description: "Hemat gaji karyawan untuk kelola sosmed, anda bisa pakai budgetnya untuk keperluan lain",
        icon: FactSection
    },
    {
        title: "Branding identity",
        description: "Brand lebih depat dikenal lewat sosial media termasuk tiktok, sehingga sosmed tidak bisa anda tinggalkan",
        icon: FactSection1
    }

];