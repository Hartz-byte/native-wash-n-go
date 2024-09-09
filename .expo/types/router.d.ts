/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/LetsStart` | `/(auth)/SignIn` | `/(auth)/SignUp` | `/(auth)/Welcome` | `/LetsStart` | `/SignIn` | `/SignUp` | `/Welcome` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
