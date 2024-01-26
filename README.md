Modul ExportData
Modul ini memfasilitasi ekspor data ke format Excel dan PDF. Ini mencakup fungsi, ExportData, yang dapat dikonfigurasi untuk menghasilkan laporan berdasarkan data dan konfigurasi kolom yang diberikan. Berikut adalah panduan rinci tentang cara menggunakan modul ini.

Instalasi
Untuk menggunakan modul ExportData, Anda perlu menginstalnya di proyek Anda. Anda dapat melakukannya menggunakan npm:

Example <a href="https://codesandbox.io/p/sandbox/export-excel-pdf-5v6th4"> Demo </a>

```typescript
npm install exportdata
```

```typescript
import { ColumnGenarator, exportdata } from "exportdata";

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
            type: "TXT",
            date: {
              start_date: "11-01-2024",
              end_date: "11-01-2024"
            },
            data: data,
            columns: columns,
            grouping: [],
            excelSetting: {
              titleExcel: "LAPORAN BAYAR BUNGA EXCEL",
              bgColor: "000000",
              txtColor: "ffffff",
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
              titlePdf: "LAPORAN BAYAR BUNGA PDF",
              orientation: "l",
              unit: "mm",
              bgColor: "000000",
              txtColor: "ffffff",
              theme: "grid",
              grandTotalSetting: {
                colSpan: 2
              },
              openNewTab: true
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
