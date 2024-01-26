type FormatType = "RP" | "GR" | "DATETIME" | "";
type HalignType = "center" | "right" | "left" | "";
interface ColumnGenarator<T> {
    key: keyof T;
    label?: string;
    options?: {
        format?: FormatType;
        halign?: HalignType;
        disabledColumn?: boolean;
        disabledFooter?: boolean;
    };
}
interface DataItemGenerator {
    [key: string]: any;
}
interface GenaratorExport<T> {
    grouping: string[];
    columns: ColumnGenarator<T>[];
    data: DataItemGenerator[];
    type: "EXCEL" | "PDF" | "TXT" | "ALL";
    pdfSetting?: {
        orientation?: "p" | "portrait" | "l" | "landscape";
        unit?: "pt" | "px" | "in" | "mm" | "cm" | "ex" | "em" | "pc";
        width?: number;
        height?: number;
        fontSIze?: number;
        bgColor?: string;
        titlePdf: string;
        txtColor?: string;
        theme?: "grid" | "striped" | "plain";
        grandTotalSetting?: {
            disableGrandTotal?: boolean;
            colSpan?: number;
        };
        openNewTab?: boolean;
    };
    date?: {
        start_date?: string;
        end_date?: string;
    };
    txtSetting?: {
        dataTxt: DataItemGenerator[] | DataItemGenerator;
        titleTxt: string;
        templateTxt?: string;
    };
    excelSetting?: {
        titleExcel: string;
        bgColor?: string;
        txtColor?: string;
        grandTotalSetting?: {
            disableGrandTotal?: boolean;
            colSpan?: number;
        };
    };
}

/**
 * Ekspor ke PDF atau Excel berdasarkan konfigurasi yang diberikan.
 * @param title - Judul export data.
 * @param columns - Konfigurasi kolom untuk export data.
 * @param data - Data yang akan disertakan dalam export data.
 * @param grouping - Gruping yang akan diterapkan dalam export data ada head dan detail Example: ["no_faktur_hutang"].
 * @param pdfSetting - Opsi untuk config PDF.
 * @param excelSetting - Opsi untuk config Excel.
 * @param txtSetting - Opsi untuk config Txt file.
 * @param date - Rentang tanggal untuk export data.
 * @param type - Jenis export data yang akan diekspor ("PDF" "TXT" atau "EXCEL").
 */
declare const ExportDataFile: <T>({ columns, data, grouping, date, type, txtSetting, pdfSetting, excelSetting }: GenaratorExport<T>) => void;

export { type ColumnGenarator, ExportDataFile };
