// React core
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Apollo Client
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  Observable,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

// Router
import router from "@/router";

// ZaUI stylesheet
import "zmp-ui/zaui.css";
// Tailwind stylesheet
import "@/css/tailwind.scss";
// Your stylesheet
import "@/css/loading.scss";
import "@/css/app.scss";

// Expose app configuration
import appConfig from "../app-config.json";

import { nativeStorage } from "zmp-sdk/apis";
import { appZaloMiniAppConfig } from "@/components/shared/config";
import { isTokenExpired } from "@/components/shared/utils/token";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

const getAuthHeaders = () => {
  return new Promise((resolve) => {
    const token = nativeStorage.getItem(`token`);
    console.log("token: ", token);
    if (token && !isTokenExpired(token)) {
      resolve({ "x-token": token, "x-platform": "ZALO_MINI_APP" });
    } else if (token) {
      nativeStorage.removeItem(`token`);
    }

    resolve({ "x-platform": "ZALO_MINI_APP" });
  });
};

const authLink = new ApolloLink((operation, forward) => {
  return new Observable((observer) => {
    const existingContext = operation.getContext();
    const hasCustomHeaders =
      existingContext.headers && existingContext.headers["x-token"];

    if (hasCustomHeaders) {
      forward(operation).subscribe(observer);
    } else {
      getAuthHeaders()
        .then((headers) => {
          operation.setContext({ headers });
          forward(operation).subscribe(observer);
        })
        .catch((err) => observer.error(err));
    }
  });
});

// 🌐 HTTP LINK
const httpLink = new HttpLink({
  uri: appZaloMiniAppConfig.graphqlUrl,
});

// 🔄 WEBSOCKET LIN
const wsClient = createClient({
  url: appZaloMiniAppConfig.wsGraphqlUrl,
  lazy: true,
  connectionParams: async () => {
    const headers: any = await getAuthHeaders();
    return { "x-token": headers["x-token"] || null };
  },
});

const wsLink = new GraphQLWsLink(wsClient);

const link = ApolloLink.split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  ApolloLink.from([authLink, httpLink])
);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("app")!);

root.render(
  createElement(ApolloProvider, {
    client: client,
    children: createElement(RouterProvider, { router: router }),
  })
);
