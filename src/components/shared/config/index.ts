class AppConfig {
  get backendHost(): string {
    const backendHost = this.getDefaultConfig().backendHost;
    return backendHost;
  }

  get shopCode(): string {
    const shopCode = this.getDefaultConfig().shopCode;
    return shopCode;
  }

  private getDefaultConfig() {
    const mode = import.meta.env.MODE;

    const configs = {
      development: {
        backendHost: "https://api-dev.banhangnhanh.shop",
        shopCode: "sieucuahang",
      },
      production: {
        backendHost: "https://api.banhangnhanh.shop",
        shopCode: "panda123",
      },
    };

    const result = configs[mode as keyof typeof configs] || configs.development;
    return result;
  }
}

export const appZaloMiniAppConfig = new AppConfig();
