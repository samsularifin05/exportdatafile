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
              },
              customize: (worksheet) => {
                // Menambahkan penyesuaian pada worksheet
                const rows = worksheet.addRow([]);

                rows.getCell(1).value = "Text";
                rows.getCell(1).alignment = { horizontal: "center" };

                // Menggabungkan sel dari kolom A hingga kolom terakhir yang tidak terpakai pada baris tanggal
                worksheet.mergeCells(
                  `A${rows.number}:${String.fromCharCode(64)}${rows.number}`
                );
                rows.eachCell((cell) => {
                  cell.font = {
                    color: { argb: "00000" },
                    bold: true,
                    size: 12
                  };
                }); // Menyesuaikan lebar kolom C
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
              openNewTab: true,
              customize: (doc, finalY, autoTable) => {
                doc.text("Custom Jspdf", 15, finalY + 5);
                if (autoTable) {
                  autoTable(doc, {
                    startY: finalY + 10,
                    head: [["Column 1", "Column 2"]],
                    body: [
                      ["Data 1", "Data 2"],
                      ["Data 3", "Data 4"]
                    ]
                  });
                }
              }
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

## Tabel Properti

| Properti                       | Tipe       | Deskripsi                                                                                                                                                                                                 |
| ------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                           | string[]   | Tipe file yang akan diekspor, bisa berupa "PDF", "EXCEL", atau "TXT".                                                                                                                                     |
| date                           | object     | Objek yang berisi `start_date` dan `end_date` untuk rentang tanggal data yang akan diekspor.                                                                                                             |
| data                           | array      | Data yang akan diekspor dalam bentuk array objek.                                                                                                                                                         |
| columns                        | array      | Daftar kolom yang akan diekspor beserta label dan pengaturannya.                                                                                                                                          |
| grouping                       | array      | Pengaturan gruping data, kosongkan jika tidak perlu gruping.                                                                                                                                              |
| title                          | string     | Judul laporan yang akan ditampilkan di file yang diekspor.                                                                                                                                                 |
| excelSetting                   | object     | Pengaturan tambahan untuk file Excel seperti warna latar belakang, warna teks, header tambahan, dll.                                                                                                      |
| txtSetting                     | object     | Pengaturan tambahan untuk file TXT seperti data template, judul, apakah akan menyalin teks, dll.                                                                                                          |
| pdfSetting                     | object     | Pengaturan tambahan untuk file PDF seperti judul, header, orientasi, satuan, tema, dll.                                                                                                                   |
| footerSetting                  | object     | Pengaturan footer seperti sub total dan grand total.                                                                                                                                                      |
| excelSetting.bgColor           | string     | Warna latar belakang untuk file Excel.                                                                                                                                                                    |
| excelSetting.txtColor          | string     | Warna teks untuk file Excel.                                                                                                                                                                              |
| excelSetting.additionalTextHeader | string  | Teks tambahan untuk header file Excel.                                                                                                                                                                    |
| excelSetting.grandTotalSetting | object     | Pengaturan grand total untuk file Excel.                                                                                                                                                                  |
| excelSetting.customize         | function   | Fungsi untuk menyesuaikan worksheet file Excel.                                                                                                                                                           |
| txtSetting.dataTxt             | object     | Data yang akan diekspor ke file TXT.                                                                                                                                                                      |
| txtSetting.titleTxt            | string     | Judul untuk file TXT.                                                                                                                                                                                     |
| txtSetting.copy                | boolean    | Apakah teks akan disalin atau tidak.                                                                                                                                                                      |
| txtSetting.templateTxt         | string     | Template teks untuk file TXT.                                                                                                                                                                             |
| pdfSetting.titlePdf            | string     | Judul untuk file PDF.                                                                                                                                                                                     |
| pdfSetting.textHeaderLeft      | string     | Teks header kiri untuk file PDF.                                                                                                                                                                          |
| pdfSetting.orientation         | string     | Orientasi halaman untuk file PDF, bisa "p" (portrait) atau "l" (landscape).                                                                                                                               |
| pdfSetting.unit                | string     | Satuan ukuran untuk file PDF, misalnya "mm".                                                                                                                                                              |
| pdfSetting.bgColor             | string     | Warna latar belakang untuk file PDF.                                                                                                                                                                      |
| pdfSetting.txtColor            | string     | Warna teks untuk file PDF.                                                                                                                                                                                |
| pdfSetting.theme               | string     | Tema tabel untuk file PDF, misalnya "grid".                                                                                                                                                               |
| pdfSetting.grandTotalSetting   | object     | Pengaturan grand total untuk file PDF.                                                                                                                                                                    |
| pdfSetting.openNewTab          | boolean    | Apakah file PDF akan dibuka di tab baru atau tidak.                                                                                                                                                       |
| pdfSetting.customize           | function   | Fungsi untuk menyesuaikan dokumen file PDF.                                                                                                                                                               |
| footerSetting.subTotal         | object     | Pengaturan sub total untuk footer.                                                                                                                                                                        |
| footerSetting.subTotal.caption | string     | Caption untuk sub total.                                                                                                                                                                                  |
| footerSetting.subTotal.enableCount | boolean| Apakah jumlah item akan dihitung untuk sub total atau tidak.                                                                                                                                              |
| footerSetting.subTotal.captionItem | string | Caption item untuk sub total.                                                                                                                                                                             |
| footerSetting.grandTotal       | object     | Pengaturan grand total untuk footer.                                                                                                                                                                      |
| footerSetting.grandTotal.caption | string   | Caption untuk grand total.                                                                                                                                                                                |
| footerSetting.grandTotal.enableCount | boolean| Apakah jumlah item akan dihitung untuk grand total atau tidak.                                                                                                                                            |
| footerSetting.grandTotal.captionItem | string| Caption item untuk grand total.                                                                                                                                                                           |

