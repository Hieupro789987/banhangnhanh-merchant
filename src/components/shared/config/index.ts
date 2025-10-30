class AppConfig {
  get backendHost(): string {
    const backendHost = this.getDefaultConfig().backendHost;
    return backendHost;
  }

  get agencyCode(): string {
    const agencyCode = this.getDefaultConfig().agencyCode;
    return agencyCode;
  }

  get graphqlUrl(): string {
    const backendHost = this.backendHost;
    return `${backendHost}/graphql`;
  }

  get wsGraphqlUrl(): string {
    const backendHost = this.backendHost;

    const wsProtocol = backendHost.startsWith("https") ? "wss" : "ws";
    const wsUrl = backendHost.replace(/^https?:\/\//, `${wsProtocol}://`);
    return `${wsUrl}/graphql`;
  }

  get graphqlUrlFromEnv(): string {
    return this.getDefaultConfig().graphqlUrl || this.graphqlUrl;
  }

  get wsGraphqlUrlFromEnv(): string {
    return this.getDefaultConfig().wsGraphqlUrl || this.wsGraphqlUrl;
  }

  private getDefaultConfig() {
    const mode = import.meta.env.MODE;
    const agencyCode: string = import.meta.env.VITE_AGENCY_CODE;
    const backendHost: string = import.meta.env.VITE_BACKEND_HOST;
    const backendHost_dev: string = import.meta.env.VITE_BACKEND_HOST_DEV;

    const graphqlUrl: string = import.meta.env.VITE_GRAPHQL_URL;
    const wsGraphqlUrl: string = import.meta.env.VITE_WS_GRAPHQL_URL;

    const configs = {
      development: {
        backendHost: backendHost_dev,
        agencyCode,
        graphqlUrl,
        wsGraphqlUrl,
      },
      production: {
        backendHost,
        agencyCode,
        graphqlUrl,
        wsGraphqlUrl,
      },
    };

    const result = configs[mode] || configs.development;
    return result;
  }
}

export const appZaloMiniAppConfig = new AppConfig();
