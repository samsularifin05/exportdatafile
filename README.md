# 📊 ExportDataFile

[![npm version](https://img.shields.io/npm/v/exportdatafile.svg)](https://www.npmjs.com/package/exportdatafile)
[![npm downloads](https://img.shields.io/npm/dm/exportdatafile.svg)](https://www.npmjs.com/package/exportdatafile)
[![license](https://img.shields.io/npm/l/exportdatafile.svg)](https://github.com/samsularifin05/exportdatafile/blob/main/LICENSE)

Library JavaScript/TypeScript yang powerful dan mudah digunakan untuk mengekspor data ke berbagai format file (Excel, PDF, dan TXT) tanpa memerlukan kode sisi server.

## ✨ Fitur Utama

- 📥 **Multi-Format Export**: Ekspor ke Excel (.xlsx), PDF (.pdf), dan TXT (.txt)
- 🎨 **Kustomisasi Penuh**: Kontrol penuh atas styling, layout, dan format
- 📊 **Grouping & Subtotal**: Dukungan untuk pengelompokan data dengan subtotal otomatis
- 🔢 **Auto Formatting**: Format otomatis untuk mata uang, tanggal, angka, dan berat
- 🎯 **TypeScript Support**: Full TypeScript support dengan type safety
- 🚀 **Zero Server Dependencies**: Semua proses dilakukan di client-side
- 🎨 **Custom Formatter**: Manipulasi data sebelum export dengan fungsi formatter
- 📱 **Responsive**: Bekerja di semua browser modern

## 🚀 Quick Start

### Instalasi

```bash
npm install exportdatafile
```

atau

```bash
yarn add exportdatafile
```

### Contoh Penggunaan Dasar

```typescript
import { ExportData, ColumnGenarator } from "exportdatafile";

// Define your data type
interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  date: string;
}

// Your data
const products: Product[] = [
  {
    id: "001",
    name: "Laptop",
    price: 15000000,
    stock: 10,
    date: "2024-01-15",
  },
  {
    id: "002",
    name: "Mouse",
    price: 150000,
    stock: 50,
    date: "2024-01-16",
  },
];

// Define columns
const columns: ColumnGenarator<Product>[] = [
  {
    label: "ID Produk",
    key: "id",
  },
  {
    label: "Nama Produk",
    key: "name",
  },
  {
    label: "Harga",
    key: "price",
    options: {
      format: "RP", // Auto format as Rupiah
      halign: "right",
    },
  },
  {
    label: "Stok",
    key: "stock",
    options: {
      format: "NUMBER",
      halign: "center",
    },
  },
  {
    label: "Tanggal",
    key: "date",
    options: {
      format: "DATE",
    },
  },
];

// Export to Excel
ExportData({
  type: ["EXCEL"],
  data: products,
  columns: columns,
  title: "LAPORAN DATA PRODUK",
  grouping: [],
});
```

## 📖 Dokumentasi Lengkap

### 1. Column Configuration

#### ColumnGenarator Interface

```typescript
interface ColumnGenarator<T> {
  key: keyof T; // Key dari data object
  label?: string; // Label kolom yang ditampilkan
  options?: {
    format?: FormatType; // Format data
    halign?: HalignType; // Horizontal alignment
    valign?: ValignType; // Vertical alignment
    txtColor?: string; // Warna teks (hex)
    bgColor?: string; // Warna background (hex)
    width?: number; // Lebar kolom
    disabledColumn?: boolean; // Sembunyikan kolom
    disabledFooter?: boolean; // Disable footer untuk kolom ini
  };
  child?: ColumnGenarator<T>[]; // Nested columns
  formatter?: (cellValue: any, rowData: any) => any; // Custom formatter
}
```

#### Format Types

| Format     | Deskripsi              | Contoh Input                | Contoh Output       |
| ---------- | ---------------------- | --------------------------- | ------------------- |
| `RP`       | Format Rupiah          | `15000`                     | `Rp 15.000`         |
| `GR`       | Format Gram            | `1500`                      | `1.500 gr`          |
| `NUMBER`   | Format Angka           | `1000000`                   | `1.000.000`         |
| `DATE`     | Format Tanggal         | `2024-01-15`                | `15/01/2024`        |
| `DATETIME` | Format Tanggal & Waktu | `2024-01-15 14:30:00`       | `15/01/2024 14:30`  |
| `IMAGE`    | Gambar (base64)        | `data:image/png;base64,...` | Gambar di PDF/Excel |

#### Alignment Types

- **halign**: `"left"` | `"center"` | `"right"`
- **valign**: `"top"` | `"middle"` | `"bottom"`

### 2. Custom Formatter

Gunakan `formatter` untuk memanipulasi data sebelum export:

```typescript
const columns: ColumnGenarator<Product>[] = [
  {
    label: "Status",
    key: "stock",
    formatter: (cellValue, rowData) => {
      return cellValue > 10 ? "Tersedia" : "Stok Menipis";
    },
  },
  {
    label: "Harga Diskon",
    key: "price",
    options: {
      format: "RP",
    },
    formatter: (cellValue, rowData) => {
      // Berikan diskon 10% jika stok > 20
      return rowData.stock > 20 ? cellValue * 0.9 : cellValue;
    },
  },
];
```

### 3. Grouping & Subtotal

Kelompokkan data berdasarkan kolom tertentu dengan subtotal otomatis:

```typescript
interface Transaction {
  category: string;
  product: string;
  amount: number;
}

const data: Transaction[] = [
  { category: "Elektronik", product: "Laptop", amount: 15000000 },
  { category: "Elektronik", product: "Mouse", amount: 150000 },
  { category: "Furniture", product: "Meja", amount: 2000000 },
  { category: "Furniture", product: "Kursi", amount: 1500000 },
];

ExportData({
  type: ["EXCEL", "PDF"],
  data: data,
  columns: columns,
  title: "LAPORAN TRANSAKSI",
  grouping: ["category"], // Group by category
  footerSetting: {
    subTotal: {
      caption: "SUBTOTAL",
      enableCount: true,
      captionItem: "Items",
    },
    grandTotal: {
      caption: "GRAND TOTAL",
      enableCount: true,
      captionItem: "Total Items",
    },
  },
});
```

### 4. Excel Export Configuration

```typescript
ExportData({
  type: ["EXCEL"],
  data: data,
  columns: columns,
  title: "LAPORAN PENJUALAN",
  grouping: [],
  excelSetting: {
    titleExcel: "Laporan Penjualan Bulanan", // Custom title
    bgColor: "4472C4", // Header background color (hex tanpa #)
    txtColor: "FFFFFF", // Header text color (hex tanpa #)
    additionalTextHeader:
      "PT. Contoh Perusahaan\nJl. Contoh No. 123\nTelp: 021-12345678",
    startY: 5, // Mulai dari baris ke-5
    grandTotalSetting: {
      disableGrandTotal: false,
      colSpan: 2, // Grand total span 2 kolom pertama
    },
    customHeader: (worksheet, lastIndex) => {
      // Custom header logic
      const row = worksheet.getRow(1);
      row.height = 30;
      row.font = { bold: true, size: 16 };
    },
    customFooter: (worksheet, lastIndex) => {
      // Custom footer logic
      const row = worksheet.addRow(["", "Total Keseluruhan", "Rp 100.000.000"]);
      row.font = { bold: true };
    },
  },
});
```

### 5. PDF Export Configuration

```typescript
ExportData({
  type: ["PDF"],
  data: data,
  columns: columns,
  title: "LAPORAN PENJUALAN",
  grouping: [],
  date: {
    start_date: "01-01-2024",
    end_date: "31-01-2024",
    caption: "Periode",
  },
  pdfSetting: {
    orientation: "l", // "l" = landscape, "p" = portrait
    unit: "mm",
    bgColor: "E8E5E5", // Header background (hex tanpa #)
    txtColor: "000000", // Header text color (hex tanpa #)
    theme: "grid", // "grid" | "striped" | "plain"
    fontSIze: 10,
    textHeaderLeft: "PT. Contoh Perusahaan\nJl. Contoh No. 123",
    textHeaderRight: "Telp: 021-12345678\nEmail: info@contoh.com",
    openNewTab: true, // Buka PDF di tab baru
    disablePrintDate: false,
    startY: 40, // Mulai tabel dari posisi Y
    grandTotalSetting: {
      disableGrandTotal: false,
      colSpan: 2,
    },
    customHeader: (doc, finalY, autoTable) => {
      // Custom header sebelum tabel
      doc.setFontSize(14);
      doc.text("Header Kustom", 15, 20);
    },
    customFooter: (doc, finalY, autoTable) => {
      // Custom footer setelah tabel
      doc.setFontSize(10);
      doc.text("Footer Kustom", 15, finalY + 10);

      // Tambah tabel tambahan
      if (autoTable) {
        autoTable(doc, {
          startY: finalY + 15,
          head: [["Keterangan", "Nilai"]],
          body: [
            ["Total Transaksi", "100"],
            ["Total Nilai", "Rp 100.000.000"],
          ],
        });
      }
    },
  },
});
```

### 6. TXT Export Configuration

Export data sebagai file teks dengan template custom:

```typescript
interface Receipt {
  invoice_no: string;
  customer: string;
  date: string;
  amount: number;
  payment_method: string;
}

const receipt: Receipt = {
  invoice_no: "INV-001",
  customer: "John Doe",
  date: "2024-01-15",
  amount: 150000,
  payment_method: "Cash",
};

ExportData({
  type: ["TXT"],
  data: [], // Tidak digunakan untuk TXT
  columns: [], // Tidak digunakan untuk TXT
  title: "STRUK PEMBAYARAN",
  grouping: [],
  txtSetting: {
    dataTxt: receipt, // Bisa single object atau array
    titleTxt: "Struk Pembayaran",
    copy: true, // Auto copy ke clipboard
    templateTxt: `
========================================
           STRUK PEMBAYARAN
========================================
No. Invoice    : {invoice_no}
Nama Customer  : {customer}
Tanggal        : {date}
Metode Bayar   : {payment_method}
----------------------------------------
Total Bayar    : Rp {amount}
========================================
      Terima Kasih Atas Kunjungan Anda
========================================
    `,
  },
});
```

### 7. Multi-Format Export

Export ke beberapa format sekaligus:

```typescript
ExportData({
  type: ["EXCEL", "PDF", "TXT"], // Export ke 3 format
  // atau gunakan ["ALL"] untuk semua format
  data: data,
  columns: columns,
  title: "LAPORAN LENGKAP",
  grouping: [],
  excelSetting: {
    /* ... */
  },
  pdfSetting: {
    /* ... */
  },
  txtSetting: {
    /* ... */
  },
});
```

## 🎯 Contoh Kasus Penggunaan

### Contoh 1: Laporan Penjualan dengan Grouping

```typescript
interface Sales {
  region: string;
  salesperson: string;
  product: string;
  quantity: number;
  price: number;
  total: number;
}

const salesData: Sales[] = [
  {
    region: "Jakarta",
    salesperson: "Budi",
    product: "Laptop",
    quantity: 2,
    price: 15000000,
    total: 30000000,
  },
  {
    region: "Jakarta",
    salesperson: "Ani",
    product: "Mouse",
    quantity: 10,
    price: 150000,
    total: 1500000,
  },
  {
    region: "Bandung",
    salesperson: "Citra",
    product: "Keyboard",
    quantity: 5,
    price: 500000,
    total: 2500000,
  },
];

const columns: ColumnGenarator<Sales>[] = [
  { label: "Region", key: "region" },
  { label: "Sales Person", key: "salesperson" },
  { label: "Produk", key: "product" },
  {
    label: "Qty",
    key: "quantity",
    options: {
      format: "NUMBER",
      halign: "center",
    },
  },
  {
    label: "Harga",
    key: "price",
    options: {
      format: "RP",
      halign: "right",
    },
  },
  {
    label: "Total",
    key: "total",
    options: {
      format: "RP",
      halign: "right",
    },
  },
];

ExportData({
  type: ["EXCEL", "PDF"],
  data: salesData,
  columns: columns,
  title: "LAPORAN PENJUALAN PER REGION",
  grouping: ["region"], // Group by region
  date: {
    start_date: "01-01-2024",
    end_date: "31-01-2024",
  },
  footerSetting: {
    subTotal: {
      caption: "SUBTOTAL REGION",
      enableCount: true,
      captionItem: "Items",
    },
    grandTotal: {
      caption: "GRAND TOTAL",
      enableCount: true,
      captionItem: "Total Items",
    },
  },
  excelSetting: {
    bgColor: "4472C4",
    txtColor: "FFFFFF",
    additionalTextHeader: "PT. Contoh Jaya\nLaporan Penjualan",
  },
  pdfSetting: {
    orientation: "l",
    theme: "grid",
    textHeaderLeft: "PT. Contoh Jaya",
    openNewTab: true,
  },
});
```

### Contoh 2: Export dengan Custom Formatter

```typescript
interface Employee {
  id: string;
  name: string;
  salary: number;
  join_date: string;
  status: string;
}

const employees: Employee[] = [
  {
    id: "EMP001",
    name: "John Doe",
    salary: 8000000,
    join_date: "2020-01-15",
    status: "active",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    salary: 12000000,
    join_date: "2019-05-20",
    status: "active",
  },
];

const columns: ColumnGenarator<Employee>[] = [
  { label: "ID", key: "id" },
  { label: "Nama", key: "name" },
  {
    label: "Gaji",
    key: "salary",
    options: { format: "RP" },
  },
  {
    label: "Bonus (10%)",
    key: "salary",
    options: { format: "RP" },
    formatter: (cellValue) => cellValue * 0.1, // Hitung bonus 10%
  },
  {
    label: "Total Gaji",
    key: "salary",
    options: { format: "RP" },
    formatter: (cellValue) => cellValue * 1.1, // Gaji + bonus
  },
  {
    label: "Tanggal Bergabung",
    key: "join_date",
    options: { format: "DATE" },
  },
  {
    label: "Status",
    key: "status",
    formatter: (cellValue) => (cellValue === "active" ? "Aktif" : "Non-Aktif"),
  },
];

ExportData({
  type: ["EXCEL"],
  data: employees,
  columns: columns,
  title: "LAPORAN GAJI KARYAWAN",
  grouping: [],
});
```

## 📋 API Reference

### ExportData Parameters

| Parameter       | Type                | Required | Description                                                        |
| --------------- | ------------------- | -------- | ------------------------------------------------------------------ |
| `type`          | `FileType[]`        | ✅       | Array tipe file: `["EXCEL"]`, `["PDF"]`, `["TXT"]`, atau `["ALL"]` |
| `data`          | `Array<any>`        | ✅       | Data yang akan diekspor                                            |
| `columns`       | `ColumnGenarator[]` | ✅       | Konfigurasi kolom                                                  |
| `title`         | `string`            | ❌       | Judul laporan                                                      |
| `grouping`      | `string[]`          | ✅       | Array key untuk grouping (kosongkan jika tidak perlu)              |
| `date`          | `DateConfig`        | ❌       | Konfigurasi tanggal                                                |
| `excelSetting`  | `ExcelConfig`       | ❌       | Konfigurasi Excel                                                  |
| `pdfSetting`    | `PdfConfig`         | ❌       | Konfigurasi PDF                                                    |
| `txtSetting`    | `TxtConfig`         | ❌       | Konfigurasi TXT                                                    |
| `footerSetting` | `FooterConfig`      | ❌       | Konfigurasi footer (subtotal/grandtotal)                           |

## 🔧 Tips & Best Practices

### 1. Performance

Untuk data besar (>10,000 rows), pertimbangkan:

- Gunakan pagination di UI
- Export data dalam batch
- Disable fitur yang tidak diperlukan (grouping, subtotal)

### 2. Styling

```typescript
// Gunakan warna hex tanpa # symbol
excelSetting: {
  bgColor: "4472C4", // ✅ Correct
  bgColor: "#4472C4" // ❌ Wrong
}
```

### 3. TypeScript

Manfaatkan TypeScript untuk type safety:

```typescript
interface MyData {
  id: number;
  name: string;
}

const columns: ColumnGenarator<MyData>[] = [
  { label: "ID", key: "id" }, // ✅ Type-safe
  { label: "Name", key: "name" }, // ✅ Type-safe
  { label: "Age", key: "age" }, // ❌ Error: 'age' tidak ada di MyData
];
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

- [jspdf](https://github.com/parallax/jsPDF) - PDF generation
- [jspdf-autotable](https://github.com/simonbengtsson/jsPDF-AutoTable) - PDF tables
- [exceljs](https://github.com/exceljs/exceljs) - Excel generation

## 🤝 Contributing

Kontribusi sangat diterima! Silakan buat issue atau pull request di [GitHub repository](https://github.com/samsularifin05/exportdatafile).

## 📄 License

ISC License - lihat file [LICENSE](LICENSE) untuk detail.

## 👨‍💻 Author

**Samsul Arifin**

- GitHub: [@samsularifin05](https://github.com/samsularifin05)
- NPM: [exportdatafile](https://www.npmjs.com/package/exportdatafile)

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/exportdatafile)
- [GitHub Repository](https://github.com/samsularifin05/exportdatafile)
- [Live Demo](https://codesandbox.io/p/sandbox/export-excel-pdf-5v6th4)
- [Report Issues](https://github.com/samsularifin05/exportdatafile/issues)

---

⭐ Jika library ini membantu project Anda, berikan star di [GitHub](https://github.com/samsularifin05/exportdatafile)!
