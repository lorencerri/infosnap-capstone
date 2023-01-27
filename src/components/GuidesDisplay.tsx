import { Input, Title, createStyles } from "@mantine/core";
import { Icon3dCubeSphere } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

const useStyles = createStyles(() => ({
    root: {
        position: "relative",
        zIndex: 1,
    },
}));

const GuidesDisplay = () => {
    const { classes } = useStyles();
    const { data } = useSession();

    return (
        <div>
            <Input
                icon={<Icon3dCubeSphere />}
                placeholder="Search Resources or Enter URL"
            />
        </div>
    );
};

export { GuidesDisplay };
