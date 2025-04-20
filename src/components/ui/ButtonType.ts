export enum ButtonType {
  DEFAULT = "DEFAULT",
  DISABLED = "DISABLED",
  INFO = "INFO",
  WARNING = "WARNING",
  NONE = "NONE",
}

export const getButtonBackgroundColor = (type: ButtonType): string => {
  switch (type) {
    case ButtonType.DEFAULT:
      return "bg-green-500 hover:bg-green-600";
    case ButtonType.DISABLED:
      return "bg-gray-400 hover:bg-gray-400 cursor-not-allowed";
    case ButtonType.INFO:
      return "bg-brown-500 hover:bg-brown-600";
    case ButtonType.WARNING:
      return "bg-red-500 hover:bg-red-600";
    case ButtonType.NONE:
      return "";
    default:
      return "bg-green-500 hover:bg-green-600";
  }
};
