import { type NextPage } from "next";
import Head from "next/head";

import { AppHeader } from "../components/AppHeader";
import { Resources } from "../components/Resources";
import { Box, createStyles } from "@mantine/core";
import { HeaderCreate } from "../components/HeaderCreate";

const useStyles = createStyles(() => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    inner: {
        maxWidth: 500,
        margin: "0 24px",
    },
}));

const Home: NextPage = () => {
    const { classes } = useStyles();

    return (
        <>
            <Head>
                <title>InfoSnap</title>
                <meta name="description" content="Resources In A Snap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppHeader />

            <div className={classes.container}>
                <div className={classes.inner}>
                    <HeaderCreate />
                    <Box mb="xl" />
                    <Resources />
                </div>
            </div>
        </>
    );
};

export default Home;
