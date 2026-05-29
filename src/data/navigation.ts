export type NavItem = {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: "Каталог", href: "/catalog" },
  { label: "Коллекции", href: "/collections" },
  { label: "Элементы", href: "/elements" },
  { label: "О нас", href: "/about" },
  { label: "Школа", href: "/school" },
  { label: "Статьи", href: "/articles" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Контакты", href: "/contacts" },
]

export const footerNav = {
  catalog: [
    { label: "Спортивные комплексы", href: "/catalog" },
    { label: "Уличные комплексы", href: "/collections?type=outdoor" },
    { label: "Для дома", href: "/collections?type=home" },
    { label: "Отдельные элементы", href: "/elements" },
  ],
  company: [
    { label: "О компании", href: "/about" },
    { label: "Школа Скрипалевых", href: "/school" },
    { label: "Отзывы", href: "/reviews" },
    { label: "Контакты", href: "/contacts" },
  ],
}
