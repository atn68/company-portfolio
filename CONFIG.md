# Cấu hình Company Portfolio

## File cấu hình chính: `src/config.ts`

Tất cả thông tin công ty, màu sắc, và cấu hình được tập trung trong file `src/config.ts`.

### 📝 Cách thay đổi thông tin công ty

Mở file `src/config.ts` và cập nhật các thông tin sau:

```typescript
export const companyInfo = {
	name: 'TV Legal Count',           // Tên công ty
	address: '1B Đường 359...',       // Địa chỉ
	phone: '+84 934 056 090',        // Số điện thoại
	email: 'admin@tvlegalcount.com', // Email
	hotline: '+84 934 056 090',      // Hotline
};
```

### 🎨 Cấu hình màu sắc

Mặc định sử dụng **blue-500** làm màu chính. Để đổi màu:

```typescript
export const colors = {
	primary: {
		500: 'bg-blue-500',  // Thay thành 'bg-purple-500', 'bg-green-500', etc.
		// ... các shade khác
	},
};
```

### 📊 Thay đổi số liệu stats

```typescript
export const stats = {
	customers: '2000+',
	years: '10+',
	consultants: '100+',
	satisfaction: '99%',
};
```

### 🔗 Thay đổi navigation links

```typescript
export const navLinks = [
	{ name: 'Trang chủ', href: '/' },
	{ name: 'Về chúng tôi', href: '/about' },
	{ name: 'Dịch vụ', href: '/services' },
	{ name: 'Liên hệ', href: '/contact' },
];
```

### 💰 Thay đổi giá dịch vụ

```typescript
export const pricing = {
	startupVietnam: {
		service: '2.900.000 đồng',
		total: '3.900.000 – 7.900.000 đồng',
	},
	accounting: {
		from: 'Từ 1.500.000 đồng/tháng',
	},
};
```

### 🌐 Cấu hình SEO

```typescript
export const seo = {
	defaultTitle: 'TV Legal Count',
	defaultDescription: 'Mô tả website',
	siteUrl: 'https://tvlegalcount.com',
};
```

## Sử dụng trong các components

### Header Component
```astro
---
import { companyInfo, navLinks } from '../../config';
---
<!-- Tự động lấy từ config -->
<span>{companyInfo.name}</span>
```

### Footer Component
```astro
---
import { companyInfo, navLinks, socialLinks } from '../../config';
---
<!-- Tự động lấy từ config -->
<p>{companyInfo.email}</p>
```

### Contact Page
```astro
---
import { companyInfo } from '../config';
---
<!-- Tự động lấy từ config -->
<a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
```

## Danh sách file đã sử dụng config

✅ `src/components/Header/Header.astro`
✅ `src/components/Footer/Footer.astro`
✅ `src/pages/contact.astro`
✅ `src/config.ts` (File chính)

## Lưu ý

- Khi thay đổi thông tin trong `config.ts`, **tất cả** các trang sẽ tự động cập nhật
- Logo letter (chữ cái đầu) được tự động tạo từ `companyInfo.name`
- Màu sắc có thể thay đổi toàn bộ bằng cách update `colors.primary`
