import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="LetsStart" options={{ headerShown: false }} />
    </Stack>
  );
}
