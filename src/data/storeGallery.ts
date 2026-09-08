export type StoreGalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: 'Mağaza' | 'Aksesuar' | 'Teknik servis';
  orientation: 'landscape' | 'portrait';
};

export const storeGallery: StoreGalleryItem[] = [
  { src: '/images/edited/magaza-genel-hero.webp', alt: 'Enes Teknoloji mağazasının genel görünümü', title: 'Mağaza genel görünümü', category: 'Mağaza', orientation: 'landscape' },
  { src: '/images/edited/magaza-giris-01.webp', alt: 'Enes Teknoloji mağaza giriş alanı', title: 'Mağaza giriş alanı', category: 'Mağaza', orientation: 'portrait' },
  { src: '/images/edited/magaza-giris-02.webp', alt: 'Enes Teknoloji mağaza içi ve karşılama alanı', title: 'Karşılama alanı', category: 'Mağaza', orientation: 'portrait' },
  { src: '/images/edited/magaza-giris-dikey.webp', alt: 'Enes Teknoloji mağazasında ürün stantları', title: 'Ürün stantları', category: 'Mağaza', orientation: 'portrait' },
  { src: '/images/edited/magaza-koridoru.webp', alt: 'Enes Teknoloji aksesuar koridoru', title: 'Aksesuar koridoru', category: 'Mağaza', orientation: 'portrait' },
  { src: '/images/edited/telefon-kilifi-duvari-01.webp', alt: 'Farklı telefon modelleri için kılıf duvarı', title: 'Telefon kılıfları', category: 'Aksesuar', orientation: 'landscape' },
  { src: '/images/edited/telefon-kilifi-duvari-02.webp', alt: 'Enes Teknoloji telefon kılıfı ve aksesuar alanı', title: 'Kılıf ve aksesuar alanı', category: 'Aksesuar', orientation: 'landscape' },
  { src: '/images/edited/aksesuar-duvari.webp', alt: 'Kulaklık, batarya ve şarj aksesuarları duvarı', title: 'Aksesuar çeşitleri', category: 'Aksesuar', orientation: 'portrait' },
  { src: '/images/edited/kulaklik-aksesuarlari.webp', alt: 'Kablolu ve kablosuz kulaklık aksesuarları', title: 'Kulaklık aksesuarları', category: 'Aksesuar', orientation: 'portrait' },
  { src: '/images/edited/sarj-aksesuarlari.webp', alt: 'Şarj kablosu ve adaptör aksesuarları', title: 'Şarj aksesuarları', category: 'Aksesuar', orientation: 'portrait' },
  { src: '/images/edited/powerbank-rafi.webp', alt: 'Powerbank ve taşınabilir şarj ürünleri', title: 'Powerbank çeşitleri', category: 'Aksesuar', orientation: 'portrait' },
  { src: '/images/edited/batarya-rafi-01.webp', alt: 'Telefon bataryası ürün rafı', title: 'Batarya seçenekleri', category: 'Teknik servis', orientation: 'portrait' },
  { src: '/images/edited/batarya-rafi-02.webp', alt: 'Farklı telefon modelleri için batarya rafı', title: 'Model bazlı bataryalar', category: 'Teknik servis', orientation: 'portrait' },
  { src: '/images/edited/servis-parca-duvari.webp', alt: 'Telefon teknik servisi için düzenlenmiş yedek parça duvarı', title: 'Servis parça alanı', category: 'Teknik servis', orientation: 'landscape' },
  { src: '/images/edited/ekran-koruyucu-rafi-01.webp', alt: 'Telefon ekranı ve ekran koruyucu ürün rafları', title: 'Ekran ürünleri', category: 'Teknik servis', orientation: 'landscape' },
  { src: '/images/edited/ekran-koruyucu-rafi-02.webp', alt: 'Farklı telefon modelleri için ekran ürünleri', title: 'Model bazlı ekran ürünleri', category: 'Teknik servis', orientation: 'landscape' },
  { src: '/images/edited/ekran-koruyucu-rafi-dikey.webp', alt: 'Dikey kadrajda ekran ve servis ürünleri rafı', title: 'Servis ürün rafı', category: 'Teknik servis', orientation: 'portrait' },
];
