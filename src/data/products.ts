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
    slug: "individual",
    name: "Индивидуальный комплекс",
    shortDescription: "Флагманский детский комплекс из сосны",
    description:
      "Многофункциональный спортивный комплекс для детей от 3 лет. Сочетает шведскую стенку, турник, канат и качели. Изготовлен из отборной сосны со шлифовкой и дважды покрыт безопасным лаком на водной основе.",
    priceFrom: 137000,
    category: "complex",
    image:
      "/individual.jpg",
    features: [
      "Массив сосны 1 сорта",
      "Без острых кромок",
      "Сертифицированные крепления",
      "Сборка под ключ",
    ],
    dimensions: "290 × 170 × 240 см",
    material: "Массив сосны, лак на водной основе",
    bentoSize: "lg",
  },
  {
    id: "2",
    slug: "sportkkompleks-s-dvumya-rukohodami",
    name: "Спорткомплекс Скрипалева с двумя рукоходами и скалодромом",
    shortDescription: "Классика для квартиры",
    description:
      "Стенка с расширенным набором снарядов. Подходит для ежедневных занятий детей и взрослых. Надёжное крепление к несущей стене.",
    priceFrom: 149088,
    category: "wall",
    image:
      "/2rukohoda.jpg",
    features: [
      "Веревочная лестница",
      "Кольца",
      "Компактный профиль",
    ],
    dimensions: "220 × 80 см",
    material: "Сосна",
    bentoSize: "md",
  },
  {
    id: "3",
    slug: "mnogodetnie-semii",
    name: "Спорткомплекс Скрипалева в помещение для многодетных семей",
    shortDescription: "Для больших семей",
    description:
      "Усиленный и массивный комлекс. Включает лазалку, скалолазную сетку и спортивные снаряды.",
    priceFrom: 125380,
    category: "complex",
    image:
      "/mnogodetnie.jpg",
    features: [
      "Крепление к несущей стене",
    ],
    dimensions: "270 × 320 см",
    material: "Лиственница / сосна",
    bentoSize: "lg",
  },
  {
    id: "4",
    slug: "mega-complex",
    name: "Мега-комплекс Скрипалева для комнаты",
    shortDescription: "Большая радость для детей",
    description:
      "Большой комплекс для комнат.",
    priceFrom: 138822,
    category: "home",
    image:
      "/megakompleks.jpg",
    features: ["Модульная сборка"],
    dimensions: "220 × 140 см",
    material: "Сосна, лак",
    bentoSize: "sm",
  },
  {
    id: "5",
    slug: "jungle",
    name: "Комплекс Скрипалева Джунгли-модерн",
    shortDescription: "Комплекс для установки на веранде или на улице",
    description:
      "Комлекс крепится к брусьям.",
    priceFrom: 94394,
    category: "outdoor",
    image:
      "/jungle.jpg",
    features: ["Быстрый монтаж", "Регулировка высоты"],
    material: "Сталь + деревянные рукояти",
    bentoSize: "sm",
  },
  {
    id: "6",
    slug: "minimal",
    name: "Минимальный спорткомплекс Скрипалева со скалодромом и гнездом",
    shortDescription: "Минимальный комплекс для занятий",
    description:
      "Набор подвесных элементов.",
    priceFrom: 93056,
    category: "home",
    image:
      "/minimum.jpg",
    features: ["Доска для пресса", "Скалодром"],
    material: "Сосна",
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
