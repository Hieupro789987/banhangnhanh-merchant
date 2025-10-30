export function parseNumber(
  value: any,
  currency: boolean | string = false,
  {
    compact = false,
    percent = false,
    signDisplay = "auto",
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
  }: Partial<{
    compact: boolean;
    percent: boolean;
    signDisplay: "auto" | "always" | "never";
    minimumFractionDigits: number;
    maximumFractionDigits: number;
  }> = {
    compact: false,
    percent: false,
    signDisplay: "auto",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }
) {
  if (isNaN(Number(value))) return "0";
  let number = new Intl.NumberFormat("vi-VN", {
    notation: compact ? "compact" : "standard",
    compactDisplay: "short",
    style: currency ? "currency" : percent ? "percent" : "decimal",
    currency: currency
      ? typeof currency == "boolean"
        ? "VND"
        : currency
      : undefined,
    currencyDisplay: "symbol",
    signDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
  } as Intl.NumberFormatOptions).format(value);
  return number;
}
