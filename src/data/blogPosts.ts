export type BlogPost = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  publishedDate: string;
  paragraphs: string[];
  tips: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'telefon-bataryasi-degisim-zamani',
    category: 'Batarya',
    readTime: '4 dk okuma',
    title: 'Telefon bataryasının değişim zamanı nasıl anlaşılır?',
    excerpt: 'Hızlı tükenme, ani kapanma ve ısınma gibi belirtiler bataryanızın artık sağlıklı çalışmadığını gösterebilir.',
    image: '/blog/batarya-degisimi-rehberi.webp',
    publishedAt: '1 Eylül 2026',
    publishedDate: '2026-09-01',
    paragraphs: [
      'Telefon bataryaları kullanım süresi ve şarj döngüleri arttıkça doğal olarak kapasite kaybeder. Sabah tam dolu olan cihazınız gün ortasında kapanıyorsa veya yüzde değeri aniden düşüyorsa batarya kontrolü yaptırmanın zamanı gelmiş olabilir.',
      'Batarya performansındaki düşüş her zaman yalnızca kullanım süresiyle ilgili değildir. Kalitesiz şarj aksesuarları, yüksek sıcaklık ve cihazı sürekli tamamen boşaltmak da bataryanın daha hızlı yıpranmasına neden olabilir.',
      'Şişme, aşırı ısınma veya ekranın kasadan ayrılması gibi fiziksel belirtilerde cihazı şarja takmaya devam etmeyin. Güvenli bir teknik inceleme ile sorunun bataryadan mı yoksa güç yönetimi bileşenlerinden mi kaynaklandığı belirlenmelidir.',
    ],
    tips: ['Ani yüzde düşüşlerini takip edin', 'Şişmiş bataryayı kullanmayın', 'Kaliteli ve uyumlu parça tercih edin'],
  },
  {
    slug: 'kirik-ekran-kullanmaya-devam-etmek',
    category: 'Ekran',
    readTime: '3 dk okuma',
    title: 'Kırık ekranı kullanmaya devam etmek doğru mu?',
    excerpt: 'Küçük görünen bir çatlak zamanla dokunmatik, görüntü ve cihaz güvenliği sorunlarına dönüşebilir.',
    image: '/blog/kirik-ekran-rehberi.webp',
    publishedAt: '1 Eylül 2026',
    publishedDate: '2026-09-01',
    paragraphs: [
      'Ekrandaki çatlak yalnızca kozmetik bir sorun olmayabilir. Darbe sonrası dokunmatik katman, görüntü paneli veya ekran bağlantıları da etkilenebilir. Çatlağın büyümesi, görüntüde çizgiler ve kendi kendine basma gibi sorunlara yol açabilir.',
      'Kırık cam yüzeyi parmaklarınız için risk oluştururken koruyucu yapısını kaybeden ekran nem ve toza karşı da savunmasız hale gelir. Bu durum cihazın iç bileşenlerinde daha maliyetli arızalara neden olabilir.',
      'Verilerinizi yedekleyin, ekrana baskı uygulamayın ve uygun onarım seçeneğini belirlemek için cihazı kontrol ettirin. Ekran koruyucu film geçici olarak çatlağın dağılmasını azaltabilir ancak onarımın yerini tutmaz.',
    ],
    tips: ['Önemli verilerinizi yedekleyin', 'Ekrana baskı uygulamayın', 'Nem ve sıvıdan uzak tutun'],
  },
  {
    slug: 'sarj-kablosu-secerken-dikkat',
    category: 'Aksesuar',
    readTime: '5 dk okuma',
    title: 'Şarj kablosu seçerken nelere dikkat edilmeli?',
    excerpt: 'Doğru kablo seçimi şarj hızını etkilediği kadar cihazınızın ve bataryanızın güvenliği için de önemlidir.',
    image: '/blog/sarj-kablosu-rehberi.webp',
    publishedAt: '1 Eylül 2026',
    publishedDate: '2026-09-01',
    paragraphs: [
      'Her kablo aynı akım kapasitesine ve üretim kalitesine sahip değildir. Cihazınızın desteklediği güç değerine uygun olmayan ürünler yavaş şarja, bağlantı kopmalarına ve gereksiz ısınmaya neden olabilir.',
      'USB-C görünümündeki iki kablonun desteklediği güç ve veri aktarım kapasitesi farklı olabilir. Hızlı şarj için adaptör, kablo ve telefonun aynı standardı desteklemesi gerekir.',
      'Kabloyu seçerken bağlantı tipini, güç desteğini ve malzeme kalitesini kontrol edin. Uçları gevşemiş, dış kaplaması yırtılmış veya kullanım sırasında aşırı ısınan kabloları değiştirmek daha güvenlidir.',
    ],
    tips: ['Cihazla uyumlu güç değerini kontrol edin', 'Sağlam bağlantı uçlarını tercih edin', 'Hasarlı kabloyu kullanmaya devam etmeyin'],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
