import {
    Container,
    Stack,
    ActionIcon,
    Center,
    Space,
    Alert,
    createStyles,
} from "@mantine/core";
import {
    IconArrowBigUpFilled,
    IconArrowBigDownFilled,
    IconTextPlus,
} from "@tabler/icons-react";

const useStyles = createStyles(() => ({
    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        padding: 0,
    },
}));

type Prompt = {
    title: string;
    text: string;
};

const prompts: Prompt[] = [
    {
        title: "Resource Creation Helper",
        text: "Welcome to the resource creation screen. This prompt will automatically update as you progress through the form. To begin, select the type of resource you're creating.",
    },
    {
        title: "Resource Title",
        text: "Titles will be publicly searchable on the platform. So, keep it short but use specific keywords.",
    },
    {
        title: "URL",
        text: "If you have a URL relevant to the resource you're creating, enter it here. For example, if you're creating a guide on how to use a specific tool or package, you can enter the URL to the tool or package's website or specific page.",
    },
    {
        title: "Text",
        text: "You've completed all of the basics! Now, you can add some text to your resource. This can be a description, a tutorial, or anything else you'd like to add.",
    },
    {
        title: "Almost there!",
        text: "Once you're done, just press the 'Save & Publish' button to publish your resource. You'll be able to edit it later if you'd like.",
    },
];

const NewResourceHeader = (props: { stage: number }) => {
    const { classes } = useStyles();

    const { title, text } = prompts[props.stage] as Prompt;

    return (
        <Container className={classes.headerContainer} mb="xl">
            <Alert
                icon={<IconTextPlus />}
                title={title}
                color="gray"
                radius="md"
                variant="outline"
            >
                {text}
            </Alert>
        </Container>
    );
};

export { NewResourceHeader };
