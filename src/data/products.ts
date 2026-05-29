export type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  priceFrom: number
  category: "outdoor" | "home" | "wall" | "complex"
  image: string
  gallery?: string[]
  features: string[]
  dimensions?: string
  material: string
  bentoSize?: "sm" | "md" | "lg"
}

export const products: Product[] = [
  {
    id: "1",
    slug: "kompleks-skripalev",
    name: "Комплекс «Скрипалёвъ»",
    shortDescription: "Флагманский детский комплекс из массива сосны",
    description:
      "Многофункциональный спортивный комплекс для детей от 3 лет. Сочетает шведскую стенку, турник, канат и качели. Изготовлен из отборной сосны с двойной шлифовкой и безопасным лаком на водной основе.",
    priceFrom: 89000,
    category: "complex",
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    ],
    features: [
      "Массив сосны 1 сорта",
      "Без острых кромок",
      "Сертифицированные крепления",
      "Сборка под ключ",
    ],
    dimensions: "240 × 180 × 220 см",
    material: "Массив сосны, лак на водной основе",
    bentoSize: "lg",
  },
  {
    id: "2",
    slug: "shvedskaya-stenka-premium",
    name: "Шведская стенка Premium",
    shortDescription: "Классика для квартиры и загородного дома",
    description:
      "Универсальная шведская стенка с расширенным набором снарядов. Подходит для ежедневных занятий детей и взрослых. Надёжное крепление к несущей стене.",
    priceFrom: 42000,
    category: "wall",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c62306601b7?w=1200&q=80",
    features: [
      "Регулируемый турник",
      "Брусья и кольца",
      "Компактный профиль",
    ],
    dimensions: "220 × 80 см",
    material: "Бук / сосна на выбор",
    bentoSize: "md",
  },
  {
    id: "3",
    slug: "ulichnyj-kompleks-sad",
    name: "Уличный комплекс «Сад»",
    shortDescription: "Для дачи и частного двора",
    description:
      "Погодостойкий комплекс с усиленной пропиткой для уличной эксплуатации. Включает горку, лазалку и спортивные снаряды.",
    priceFrom: 125000,
    category: "outdoor",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80",
    features: [
      "Антисептическая обработка",
      "Устойчивость к влаге",
      "Глубокая установка опор",
    ],
    dimensions: "400 × 320 см",
    material: "Лиственница / сосна",
    bentoSize: "lg",
  },
  {
    id: "4",
    slug: "domashnij-ugolok",
    name: "Домашний уголок",
    shortDescription: "Компактное решение для детской",
    description:
      "Небольшой комплекс для комнаты с низкими потолками. Безопасная высота, мягкие переходы, яркие акценты из натурального дерева.",
    priceFrom: 58000,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1503454537845-7e8b5b2374ea?w=1200&q=80",
    features: ["Занимает от 2 м²", "Бесшумные крепления", "Модульная сборка"],
    dimensions: "180 × 140 см",
    material: "Сосна, масло + воск",
    bentoSize: "sm",
  },
  {
    id: "5",
    slug: "turnik-brusya",
    name: "Турник с брусьями",
    shortDescription: "Отдельный модуль для расширения комплекса",
    description:
      "Съёмный турник и параллельные брусья. Совместим с линейкой Скрипалевъ, легко интегрируется в существующий комплекс.",
    priceFrom: 18500,
    category: "wall",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    features: ["Быстрый монтаж", "Регулировка высоты"],
    material: "Сталь + деревянные рукояти",
    bentoSize: "sm",
  },
  {
    id: "6",
    slug: "kacheli-kanat",
    name: "Качели и канат",
    shortDescription: "Дополнение к любому комплексу",
    description:
      "Набор подвесных элементов с мягкими сиденьями и хлопковым канатом. Развивает координацию и силу хвата.",
    priceFrom: 12000,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1472162073012-caaefbc13159?w=1200&q=80",
    features: ["Сменные крепления", "Гипоаллергенные материалы"],
    material: "Хлопок, берёза",
    bentoSize: "sm",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value)
}
