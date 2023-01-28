import {
    Container,
    Stack,
    ActionIcon,
    Center,
    Space,
    Alert,
    createStyles,
} from "@mantine/core";
import { useCounter } from "@mantine/hooks";
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
        text: "Welcome to the resource creation screen! Use the arrow buttons on the left hand side to go through tips for each section. To begin, select the type of resource you're creating.",
    },
    {
        title: "Resource Name",
        text: "Titles will be publicly searchable on the platform. So, keep it short but use specific keywords.",
    },
];

const NewResourceHeader = (props: { stage: number }) => {
    const { classes } = useStyles();
    const [count, { increment, decrement }] = useCounter(props.stage, {
        min: 0,
        max: prompts.length - 1,
    });

    const { title, text } = prompts[count] as Prompt;

    return (
        <Container className={classes.headerContainer} mb="xl">
            <Stack spacing={0}>
                <ActionIcon onClick={increment}>
                    <IconArrowBigUpFilled size={18} />
                </ActionIcon>
                <Center>#{count + 1}</Center>
                <ActionIcon onClick={decrement}>
                    <IconArrowBigDownFilled size={18} />
                </ActionIcon>
            </Stack>
            <Space w="xs" />
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
