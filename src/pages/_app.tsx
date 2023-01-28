import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import { Provider } from "jotai";

import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <Provider>
            <SessionProvider session={session}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme: "dark",
                    }}
                >
                    <Component {...pageProps} />
                </MantineProvider>
            </SessionProvider>
        </Provider>
    );
};

export default api.withTRPC(MyApp);
