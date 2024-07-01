import jsPDF from 'jspdf';
import ExcelJS from 'exceljs';

type FormatType = "RP" | "GR" | "DATETIME" | "NUMBER" | "";
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
type CustomizePdfFunction = (doc: jsPDF, finalY: number, autoTable?: any) => void;
type CustomizeFunctionExcel = (worksheet: ExcelJS.Worksheet) => void;
interface GenaratorExport<T> {
    columns: ColumnGenarator<T>[];
    data: DataItemGenerator[];
    type: ("EXCEL" | "PDF" | "TXT" | "ALL")[];
    title?: string;
    pdfSetting?: {
        orientation?: "p" | "portrait" | "l" | "landscape";
        unit?: "pt" | "px" | "in" | "mm" | "cm" | "ex" | "em" | "pc";
        width?: number;
        height?: number;
        fontSIze?: number;
        bgColor?: string;
        titlePdf?: string;
        txtColor?: string;
        finalY?: number;
        textHeaderRight?: string;
        textHeaderLeft?: string;
        theme?: "grid" | "striped" | "plain";
        grandTotalSetting?: {
            disableGrandTotal?: boolean;
            colSpan?: number;
        };
        openNewTab?: boolean;
        customize?: CustomizePdfFunction;
    };
    date?: {
        start_date?: string;
        end_date?: string;
        caption?: string;
    };
    txtSetting?: {
        dataTxt?: DataItemGenerator[] | DataItemGenerator;
        titleTxt: string;
        templateTxt?: string;
        copy?: boolean;
    };
    excelSetting?: {
        titleExcel?: string;
        bgColor?: string;
        txtColor?: string;
        additionalTextHeader?: string;
        grandTotalSetting?: {
            disableGrandTotal?: boolean;
            colSpan?: number;
        };
        customize?: CustomizeFunctionExcel;
    };
    grouping: string[];
    footerSetting?: {
        subTotal?: {
            caption?: string;
            enableCount?: boolean;
            captionItem?: string;
        };
        grandTotal?: {
            caption?: string;
            captionItem?: string;
            enableCount?: boolean;
        };
    };
}

/**
 * Ekspor ke PDF atau Excel berdasarkan konfigurasi yang diberikan.
 *
 * @param title - Judul laporan.
 * @param columns - Konfigurasi kolom untuk laporan.
 * @param data - Data yang akan disertakan dalam laporan.
 * @param grouping - Gruping yang akan diterapkan dalam laporan ada head dan detail Example: ["no_faktur_hutang"].
 * @param pdfSetting - Opsi untuk config PDF.
 * @param excelSetting - Opsi untuk config Excel.
 * @param txtSetting - Opsi untuk config Txt file.
 * @param date - Rentang tanggal untuk laporan.
 * @param type - Jenis laporan yang akan diekspor ("PDF" "TXT" atau "EXCEL").
 * @param footerSetting - Setting Footer Subtotal atau GranTotal
 */
declare const ExportData: <T>({ columns, data, grouping, date, type, txtSetting, pdfSetting, excelSetting, title, footerSetting }: GenaratorExport<T>) => void;

export { ExportData, type GenaratorExport };
