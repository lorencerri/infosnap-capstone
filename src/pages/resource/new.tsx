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

const useStyles = createStyles(() => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        padding: 0,
    },

    inner: {
        maxWidth: 600,
        margin: "0 24px",
    },
}));

const NewGuide: NextPage = () => {
    const { classes } = useStyles();

    return (
        <>
            <Head>
                <title>InfoSnap | New Resource</title>
                <meta name="description" content="Short Guides In A Snap" />
            </Head>

            <AppHeader />

            <div className={classes.container}>
                <div className={classes.inner}>
                    <Container className={classes.headerContainer} mb="xl">
                        <Stack spacing={0}>
                            <ActionIcon>
                                <IconArrowBigUpFilled size={18} />
                            </ActionIcon>
                            <Center>1</Center>
                            <ActionIcon>
                                <IconArrowBigDownFilled size={18} />
                            </ActionIcon>
                        </Stack>
                        <Space w="xs" />
                        <Alert
                            icon={<IconTextPlus />}
                            title="Guide Creation Helper"
                            color="gray"
                            radius="md"
                            variant="outline"
                        >
                            Welcome to the guide creation screen. As you
                            navigate through this page, updates will be provided
                            through this alert. To begin, please select the type
                            of resource you&apos;re creating.
                        </Alert>
                    </Container>
                    <Space w="xl" />
                    <Select
                        mb="xl"
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
