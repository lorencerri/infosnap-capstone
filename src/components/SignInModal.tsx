import { Button, Center, Modal, Stack, Text } from "@mantine/core";
import { signIn } from "next-auth/react";

const SignInModal = () => {
    return (
        <Modal
            opened
            onClose={() => void false}
            centered
            title="Error"
            withCloseButton={false}
        >
            <Stack>
                <Text size="sm" color="dimmed">
                    Sorry, this page requires you to be signed in.
                </Text>
                <Button
                    onClick={() => void signIn("discord")}
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                >
                    Sign In
                </Button>
            </Stack>
        </Modal>
    );
};

export { SignInModal };
