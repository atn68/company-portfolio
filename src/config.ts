// Company Information
export const companyInfo = {
  name: "TV Legal Count",
  address: "1B Đường 359, Phường Phước Long, Thành phố Hồ Chí Minh",
  phone: "+84 934 056 090",
  email: "admin@tvlegalcount.com",
  hotline: "+84 934 056 090",
};

// Color Configuration
export const colors = {
  // Primary color (blue-500)
  primary: {
    50: "bg-blue-50",
    100: "bg-blue-100",
    200: "bg-blue-200",
    300: "bg-blue-300",
    400: "bg-blue-400",
    500: "bg-blue-500", // Default primary
    600: "bg-blue-600",
    700: "bg-blue-700",
    800: "bg-blue-800",
    900: "bg-blue-900",

    // Text colors
    text: {
      50: "text-blue-50",
      100: "text-blue-100",
      200: "text-blue-200",
      300: "text-blue-300",
      400: "text-blue-400",
      500: "text-blue-500",
      600: "text-blue-600",
      700: "text-blue-700",
      800: "text-blue-800",
      900: "text-blue-900",
    },

    // Border colors
    border: {
      50: "border-blue-50",
      100: "border-blue-100",
      200: "border-blue-200",
      300: "border-blue-300",
      400: "border-blue-400",
      500: "border-blue-500",
      600: "border-blue-600",
      700: "border-blue-700",
      800: "border-blue-800",
      900: "border-blue-900",
    },

    // Gradient
    gradient: "from-blue-500 to-blue-700",
    gradientDark: "from-blue-700 to-blue-800",
    gradientOverlay: "from-blue-900/85 via-blue-800/80 to-slate-900/85",
  },

  // Hover state
  primaryHover: "hover:bg-blue-700",
  textPrimaryHover: "hover:text-blue-700",
};

// Navigation Links
export const navLinks = [
  { name: "Trang chủ", href: "/" },
  {
    name: "Thành lập doanh nghiệp",
    href: "/dich-vu/thanh-lap-doanh-nghiep",
    children: [
      {
        name: "Thành lập doanh nghiệp vốn Việt Nam",
        href: "/dich-vu/thanh-lap-doanh-nghiep-von-viet-nam",
      },
      { name: "Thay đổi Giấy phép kinh doanh", href: "/dich-vu/thay-doi-giay-phep-kinh-doanh" },
      { name: "Thành lập Chi nhánh/VPĐD", href: "/dich-vu/thanh-lap-chi-nhanh-vpdd" },
      { name: "Thành lập Hộ kinh doanh", href: "/dich-vu/thanh-lap-ho-kinh-doanh" },
      { name: "Thay đổi loại hình DN", href: "/dich-vu/thay-doi-loai-hinh-doanh-nghiep" },
      { name: "Mua bán/Sáp nhập DN", href: "/dich-vu/mua-ban-sap-nhap-doanh-nghiep" },
      { name: "Giải thể Doanh nghiệp", href: "/dich-vu/giai-the-doanh-nghiep" },
      { name: "Tư vấn Pháp lý thường xuyên", href: "/dich-vu/tu-van-phap-ly-thuong-xuyen" },
      { name: "Rà soát & Xây dựng Hợp đồng", href: "/dich-vu/ra-soat-xay-dung-hop-dong" },
    ],
  },
  { name: "Đầu tư", href: "/dich-vu/dau-tu" },
  { name: "Thuế & Kế toán", href: "/dich-vu/thue-ke-toan" },
  { name: "Tư vấn pháp lý", href: "/dich-vu/tu-van-phap-ly" },
  { name: "Giấy phép", href: "/dich-vu/giay-phep" },
  { name: "Lao động nước ngoài", href: "/dich-vu/lao-dong-nuoc-ngoai" },
  { name: "Về chúng tôi", href: "/ve-chung-toi" },
  { name: "Liên hệ", href: "/lien-he" },
];

// Social Media Links
export const socialLinks = {
  facebook: "#",
  linkedin: "#",
  twitter: "#",
};

// Stats for homepage
export const stats = {
  customers: "2000+",
  years: "10+",
  consultants: "100+",
  satisfaction: "99%",
};

// SEO Metadata
export const seo = {
  defaultTitle: "TV Legal Count",
  defaultDescription:
    "Dịch vụ tư vấn pháp lý, thành lập doanh nghiệp, kế toán thuế trọn gói và chuyên nghiệp",
  siteUrl: "https://tvlegalcount.com",
};

// Pricing
export const pricing = {
  startupVietnam: {
    service: "2.900.000 đồng",
    total: "3.900.000 – 7.900.000 đồng",
  },
  accounting: {
    from: "Từ 1.500.000 đồng/tháng",
  },
};

// Services
export const services = [
  {
    id: "startup-vietnam",
    title: "Thành lập doanh nghiệp vốn Việt Nam",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "blue",
    detailPage: "/dich-vu/thanh-lap-doanh-nghiep-von-viet-nam",
  },
  {
    id: "legal",
    title: "Tư vấn pháp lý doanh nghiệp",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "purple",
    detailPage: "",
  },
  {
    id: "accounting",
    title: "Kế toán & Thuế trọn gói",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    color: "green",
    detailPage: "",
  },
];
