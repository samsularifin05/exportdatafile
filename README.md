Modul ExportData
Modul ini memfasilitasi ekspor data ke format Excel PDF dan TXT. Ini mencakup fungsi, ExportData, yang dapat dikonfigurasi untuk menghasilkan laporan berdasarkan data dan konfigurasi kolom yang diberikan. Berikut adalah panduan rinci tentang cara menggunakan modul ini.

Instalasi
Untuk menggunakan modul ExportData, Anda perlu menginstalnya di proyek Anda. Anda dapat melakukannya menggunakan npm:

Example <a href="https://codesandbox.io/p/sandbox/export-excel-pdf-5v6th4"> Demo </a>

## Install

```
npm i exportdatafile
```

## Fitur

- Download File .xlsx .txt .pdf format
- Tidak ada kode sisi server
- Mudah digunakan

```typescript
import { ColumnGenarator, ExportData } from "exportdatafile";

const DemoPage = () => {
  interface FakturHutang {
    no_faktur_hutang: string;
    tgl_system: string;
    harga: number;
    berat: number;
    total: number;
    diskon: string;
    input_by: string;
  }
  const data: FakturHutang[] = [
    {
      no_faktur_hutang: "001",
      diskon: "rp",
      tgl_system: "2022-01-01",
      harga: 10000,
      berat: 2,
      total: 20000,
      input_by: "Samsul"
    },
    {
      no_faktur_hutang: "002",
      diskon: "rp",
      tgl_system: "2022-01-01",
      harga: 10000,
      berat: 2,
      total: 20000,
      input_by: "Samsul"
    }
  ];

  const columns: ColumnGenarator<FakturHutang>[] = [
    {
      label: "Tanngal",
      key: "tgl_system"
    },

    {
      label: "Diskon",
      key: "diskon",
      options: {
        halign: "center"
      }
    },
    {
      label: "Harga",
      key: "harga",
      options: {
        format: "RP"
      }
    },
    {
      label: "Berat",
      key: "berat",
      options: {
        format: "GR"
      }
    },

    {
      label: "Total",
      key: "total",
      options: {
        format: "RP"
      }
    }
  ];
  return (
    <div>
      <button
        onClick={() =>
          ExportData({
            type: ["EXCEL"],
            date: {
              start_date: "11-01-2024",
              end_date: "11-01-2024"
            },
            data: data,
            columns: columns,
            grouping: [],
            title: "LAPORAN PDF EXCEL",
            excelSetting: {
              bgColor: "E8E5E5",
              txtColor: "000",
              additionalTextHeader: "Nama Toko \nAlamat Toko",
              grandTotalSetting: {
                colSpan: 2
              }
            },
            txtSetting: {
              dataTxt: data,
              titleTxt: "Slip Txt FIle",
              templateTxt: `--------------- SLIP ---------------\nFaktur         = {no_faktur_hutang}\nDiskon         = {diskon}\nTanggal System = {tgl_system}\nHarga          = {harga}\nBerat          = {berat}\nTotal          = {total}\nInput_by       = {input_by}`
            },
            pdfSetting: {
              textHeaderLeft: "Nama Toko \nAlamat Toko",
              orientation: "l",
              unit: "mm",
              bgColor: "E8E5E5",
              txtColor: "000",
              theme: "grid",
              grandTotalSetting: {
                colSpan: 2
              },
              openNewTab: true
            },
            footerSetting: {
              subTotal: {
                caption: "SUB TOTAL",
                enableCount: true,
                captionItem: "QTY"
              },
              grandTotal: {
                caption: "GRAND TOTAL",
                enableCount: true,
                captionItem: "QTY"
              }
            }
          })
        }
      >
        Export Laporan
      </button>
    </div>
  );
};

export default DemoPage;
```

Option
Daftar properti yang tersedia dapat ditemukan di bawah. Ini harus diteruskan ke komponen ExportData.

| Properti     | Tipe    | Deskripsi                                                                                                                                                                                                               |
| ------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type         | String  | Tipe data ekspor, menentukan format file yang akan diekspor. Nilai contoh: "TXT", "PDF", "EXCEL", "ALL" (untuk mengekspor semua file data).                                                                             |
| date         | Object  | Objek dengan properti `start_date` dan `end_date` yang menentukan rentang tanggal untuk ekspor data. Format: "DD-MM-YYYY".                                                                                              |
| data         | Array   | Data yang akan diekspor. Jika ingin menggunakan pengelompokan (grouping), berikan detail dalam penggunaannya di dalam array. Setiap elemen array mewakili kolom atau properti berdasarkan mana data akan dikelompokkan. |
| columns      | Array   | Kolom-kolom data yang akan diekspor. Setiap elemen array merupakan objek dengan properti berikut:                                                                                                                       |
|              |         | - key: Kunci yang merujuk pada properti data yang akan ditampilkan dalam kolom.                                                                                                                                         |
|              |         | - label (opsional): Label atau nama yang akan ditampilkan di header kolom.                                                                                                                                              |
|              |         | - options (opsional): Objek yang berisi pengaturan tambahan untuk kolom, seperti:                                                                                                                                       |
|              |         | - format (opsional): Tipe format untuk data dalam kolom (misalnya, tipe tanggal atau angka).                                                                                                                            |
|              |         | - halign (opsional): Penyelarasan horizontal untuk data dalam kolom.                                                                                                                                                    |
|              |         | - disabledColumn (opsional): Jika true, kolom akan dinonaktifkan dalam data yang diekspor.                                                                                                                              |
|              |         | - disabledFooter (opsional): Jika true, kolom akan dinonaktifkan dalam bagian footer (grand total).                                                                                                                     |
| grouping     | Array   | Array yang menentukan pengaturan pengelompokan untuk data yang diekspor. contoh `[no_faktur]`                                                                                                                           |
| excelSetting | Object  | Pengaturan khusus untuk ekspor Excel, termasuk `titleExcel`, `bgColor`, `txtColor`, dan `grandTotalSetting` dengan `colSpan`.                                                                                           |
| txtSetting   | Object  | Pengaturan khusus untuk ekspor TXT, termasuk `dataTxt`, `titleTxt`, dan `templateTxt` yang berisi template untuk file TXT dengan placeholder.                                                                           |
| pdfSetting   | Object  | Pengaturan khusus untuk ekspor PDF, termasuk `titlePdf`, `orientation`, `unit`, `bgColor`, `txtColor`, `theme`, `grandTotalSetting` dengan `colSpan`, dan `openNewTab` untuk membuka PDF di tab baru (boolean).         |
| openNewTab   | Boolean | Jika true, membuka file PDF yang diekspor di tab baru.                                                                                                                                                                  |
