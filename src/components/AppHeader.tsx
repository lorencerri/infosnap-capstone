import {
    Avatar,
    Container,
    Group,
    Header,
    Title,
    UnstyledButton,
    createStyles,
    Text,
} from "@mantine/core";
import { IconTooltip, IconQuestionMark } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    header: {
        borderBottom: "none",
        marginBottom: 100,
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            marginBottom: 60,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginBottom: 20,
        },
    },

    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        paddingLeft: 32,
        paddingRight: 32,
    },

    infoBrand: {
        color: "#3b5bdb",
    },

    button: {
        borderColor: "#3b5bdb",
        color: "#3b5bdb",
    },

    accountContainer: {
        borderLeft: "1px solid #3b5bdb",
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        paddingLeft: 10,
    },

    avatar: {
        border: "1px solid #C1C2C5",
    },
}));

const AppHeader = () => {
    const { classes } = useStyles();
    const { data } = useSession();

    const UserButton = () => (
        <UnstyledButton
            onClick={() => (data ? void signOut() : void signIn("discord"))}
        >
            <Group>
                <Avatar
                    size={40}
                    color="#3b5bdb"
                    radius="md"
                    className={classes.avatar}
                    src={data && data?.user?.image}
                >
                    <IconQuestionMark />
                </Avatar>
                <div>
                    <Text>Hello, {data ? data?.user?.name : "Guest"}</Text>
                    <Text size="xs" color="dimmed">
                        {data ? "Sign Out" : "Login With Discord"}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    );

    return (
        <Header height={60} mt={20} className={classes.header}>
            <Link href="/">
                <Container className={classes.headerContainer}>
                    <Title
                        order={2}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <IconTooltip
                            size={28}
                            style={{ marginRight: "-3px" }}
                            className={classes.infoBrand}
                        />
                        <span className={classes.infoBrand}>nfo</span>
                        Snap
                    </Title>
                    <UserButton />
                </Container>
            </Link>
        </Header>
    );
};

export { AppHeader };
