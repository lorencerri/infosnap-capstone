import { Input } from "@mantine/core";
import { Icon3dCubeSphere } from "@tabler/icons-react";

const Resources = () => {
    return (
        <div>
            <Input
                icon={<Icon3dCubeSphere />}
                placeholder="Search Resources or Enter URL"
            />
        </div>
    );
};

export { Resources };
