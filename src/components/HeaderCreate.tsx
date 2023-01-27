import { Card, Group, Text, createStyles, Button } from "@mantine/core";
import { useSession } from "next-auth/react";
import Link from "next/link";

const HeaderCreate = () => {
    const { data } = useSession();
    console.log(data?.user);
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart">
                <Text weight={500}>Welcome!</Text>

                <Text size="sm" color="dimmed">
                    InfoSnap is a user-friendly platform for creating, sharing,
                    and accessing community-driven resources on various tech
                    related topics. We offer seamless navigation and information
                    sharing, with a number of resource types to choose from such
                    as documentation, guides, notes, and more.
                </Text>

                <Link href="/resource/new" passHref legacyBehavior>
                    <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="sm"
                        radius="md"
                        disabled={!data?.user}
                    >
                        {data?.user
                            ? "Create New Resource"
                            : "Login To Add Resource"}
                    </Button>
                </Link>
            </Group>
        </Card>
    );
};

export { HeaderCreate };
