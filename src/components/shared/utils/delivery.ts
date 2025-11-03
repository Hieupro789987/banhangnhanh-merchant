export const getShipMethodLabel = (
  method: string,
  serviceName?: string,
  deliveryName?: string
) => {
  const methodLabels: Record<string, string> = {
    DRIVER: deliveryName
      ? `${deliveryName} - ${serviceName}`
      : serviceName || "",
    AHAMOVE: `Ahamove${serviceName ? ` - ${serviceName}` : ""}`,
    GRAB_EXPRESS: `Grab Express${serviceName ? ` - ${serviceName}` : ""}`,
    GO_SHIP: deliveryName
      ? `${deliveryName} - ${serviceName}`
      : serviceName || "",
    GO_SHIP_ON_DEMAND: deliveryName
      ? `${deliveryName} - ${serviceName}`
      : serviceName || "",
  };

  return methodLabels[method] || serviceName || "";
};
