import { type NextPage } from "next";
import Head from "next/head";

import {
    Input,
    Select,
    Space,
    Tooltip,
    createStyles,
    Button,
    SegmentedControl,
} from "@mantine/core";
import {
    IconAbc,
    IconAlertCircle,
    IconForms,
    Icon3dCubeSphere,
} from "@tabler/icons-react";
import { AppHeader } from "../../components/AppHeader";
import { TextEditor } from "../../components/TextEditor";
import { useSession } from "next-auth/react";
import { SignInModal } from "../../components/SignInModal";
import { NewResourceHeader } from "../../components/resources/NewResourceHeader";
import { useState } from "react";
import { NewResourceForm } from "../../components/resources/NewResourceForm";

const useStyles = createStyles(() => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    inner: {
        maxWidth: 600,
        margin: "0 24px",
    },
}));

const NewGuide: NextPage = () => {
    const { classes } = useStyles();
    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>InfoSnap | New Resource</title>
                <meta name="description" content="Resources In A Snap" />
            </Head>

            <AppHeader />

            {!session && <SignInModal />}

            <div className={classes.container}>
                <div className={classes.inner}>
                    <NewResourceForm />
                </div>
            </div>
        </>
    );
};

export default NewGuide;
