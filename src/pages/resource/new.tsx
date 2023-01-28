import { type NextPage } from "next";
import Head from "next/head";

import {
    ActionIcon,
    Alert,
    Center,
    Container,
    Input,
    Stack,
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
    IconArrowBigDownFilled,
    IconArrowBigUpFilled,
    IconTextPlus,
    IconForms,
    Icon3dCubeSphere,
} from "@tabler/icons-react";
import { AppHeader } from "../../components/AppHeader";
import { TextEditor } from "../../components/TextEditor";
import { useSession } from "next-auth/react";
import { SignInModal } from "../../components/SignInModal";
import { NewResourceHeader } from "../../components/resources/NewResourceHeader";
import { useState } from "react";

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
    const [stage, setStage] = useState(0);
    console.log(stage);
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
                    <NewResourceHeader stage={stage} />
                    <Space w="xl" />
                    <Select
                        mb="xl"
                        onChange={() => setStage(1)}
                        placeholder="Type"
                        data={[
                            "Guide",
                            "Note",
                            "Demo/Showcase",
                            "Review",
                            "Documentation",
                        ]}
                        icon={<Icon3dCubeSphere size={14} />}
                    />
                    <Input
                        icon={<IconAbc size={16} />}
                        placeholder="Title"
                        mb="lg"
                        rightSection={
                            <Tooltip
                                label="This will be publicly searchable."
                                position="left-start"
                            >
                                <div>
                                    <IconAlertCircle
                                        size={18}
                                        style={{
                                            display: "block",
                                            opacity: 0.5,
                                        }}
                                    />
                                </div>
                            </Tooltip>
                        }
                    />
                    <Input
                        icon={<IconForms size={16} />}
                        placeholder="URL"
                        mb="lg"
                        rightSection={
                            <Tooltip
                                label="Enter the most specific URL available. For example, if you're creating a resource on an NPM package, specify the direct link to the package."
                                position="left-start"
                            >
                                <div>
                                    <IconAlertCircle
                                        size={18}
                                        style={{
                                            display: "block",
                                            opacity: 0.5,
                                        }}
                                    />
                                </div>
                            </Tooltip>
                        }
                    />
                    <SegmentedControl
                        mb="xl"
                        fullWidth
                        data={[
                            { label: "Editor", value: "react" },
                            { label: "Preview", value: "ng" },
                        ]}
                    />
                    <Space w="xl" />
                    <TextEditor />
                    <Button
                        mt="xl"
                        color="green"
                        mb="xl"
                        variant="outline"
                        fullWidth
                    >
                        Save & Publish
                    </Button>
                </div>
            </div>
        </>
    );
};

export default NewGuide;
