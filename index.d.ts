import jsPDF from 'jspdf';
import ExcelJS from 'exceljs';

type FormatType = "RP" | "GR" | "DATETIME" | "DATE" | "NUMBER" | "IMAGE" | "";
type HalignType = "center" | "right" | "left" | "";
type ValignType = "top" | "middle" | "bottom" | undefined;
interface ColumnGenarator<T> {
    key: keyof T;
    label?: string;
    options?: {
        format?: FormatType;
        halign?: HalignType;
        valign?: ValignType;
        txtColor?: string;
        bgColor?: string;
        width?: number;
        disabledColumn?: boolean;
        disabledFooter?: boolean;
    };
    child?: ColumnGenarator<T>[];
    formatter?: (cellValue: any, rowData: any) => any;
}
interface DataItemGenerator {
    [key: string]: any;
}
type FileType = "EXCEL" | "PDF" | "TXT" | "ALL";
type GroupingStyle = {
    txtColor?: string;
    bgColor?: string;
    halign?: "left" | "right" | "center";
};
type CustomizePdfFunction = (doc: jsPDF, finalY: number, autoTable?: any) => void;
type addRowPdfPdfFunction = (tableRows?: any) => void;
type CustomizeFunctionExcel = (worksheet: ExcelJS.Worksheet, lastIndex: number) => void;
type GroupingSettingType = GroupingStyle | ((item: DataItemGenerator) => GroupingStyle);
interface GenaratorExport<T> {
    columns: ColumnGenarator<T>[];
    data: DataItemGenerator[];
    type: FileType[];
    title?: string;
    groupingSetting?: GroupingSettingType;
    pdfSetting?: {
        orientation?: "p" | "portrait" | "l" | "landscape";
        unit?: "pt" | "px" | "in" | "mm" | "cm" | "ex" | "em" | "pc";
        width?: number;
        height?: number;
        fontSIze?: number;
        bgColor?: string;
        titlePdf?: string;
        txtColor?: string;
        startY?: number;
        header?: {
            column?: boolean;
            information?: boolean;
        };
        textHeaderRight?: string;
        textHeaderLeft?: string;
        theme?: "grid" | "striped" | "plain";
        grandTotalSetting?: {
            disableGrandTotal?: boolean;
            colSpan?: number;
        };
        openNewTab?: boolean;
        disablePrintDate?: boolean;
        addRow?: addRowPdfPdfFunction;
        customHeader?: CustomizePdfFunction;
        customFooter?: CustomizePdfFunction;
    };
    date?: {
        start_date?: string;
        end_date?: string;
        caption?: string;
    };
    txtSetting?: {
        dataTxt?: DataItemGenerator | DataItemGenerator[];
        titleTxt: string;
        templateTxt?: string;
        copy?: boolean;
    };
    excelSetting?: {
        titleExcel?: string;
        bgColor?: string;
        startY?: number;
        txtColor?: string;
        additionalTextHeader?: string;
        grandTotalSetting?: {
            disableGrandTotal?: boolean;
            colSpan?: number;
        };
        subTotal?: {
            disableGrandTotal?: boolean;
        };
        customHeader?: CustomizeFunctionExcel;
        customFooter?: CustomizeFunctionExcel;
    };
    grouping: string[];
    footerSetting?: {
        subTotal?: {
            caption?: string;
            disableSubtotal?: boolean;
            enableCount?: boolean;
            captionItem?: string;
        };
        grandTotal?: {
            caption?: string;
            disableGrandTotal?: boolean;
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
declare const ExportData: <T>({ columns, data, grouping, date, type, txtSetting, pdfSetting, excelSetting, title, footerSetting, groupingSetting, }: GenaratorExport<T>) => void;

export { type ColumnGenarator, ExportData };
