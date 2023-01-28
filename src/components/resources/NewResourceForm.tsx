import { useCallback, useEffect, useState } from "react";
import {
    Button,
    Input,
    SegmentedControl,
    Select,
    TextInput,
} from "@mantine/core";
import { Icon3dCubeSphere, IconAbc, IconForms } from "@tabler/icons-react";
import { NewResourceHeader } from "./NewResourceHeader";

import { TextEditor } from "../TextEditor";
import { useEditor } from "@tiptap/react";
import { Link } from "@mantine/tiptap";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import SubScript from "@tiptap/extension-subscript";

const typeData = [
    { value: "guide", label: "Guide" },
    { value: "note", label: "Note" },
    { value: "demo", label: "Demo/Showcase" },
    { value: "review", label: "Review" },
    { value: "documentation", label: "Documentation" },
];

const content = ``;

const NewResourceForm = () => {
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [stage, setStage] = useState(1);
    const editor = useEditor({
        extensions: [StarterKit, Underline, Link, SubScript, Highlight],
        content,
        onUpdate: ({ editor }) => {
            const len = editor ? editor.getText().length : 0;
            updateStage(len);
        },
    });

    const updateStage = useCallback(
        (richEditorLength: number) => {
            console.log(type, richEditorLength);
            if (!type) setStage(0);
            else if (!title) setStage(1);
            else if (!url) setStage(2);
            else if (richEditorLength < 10) setStage(3);
            else setStage(4);
        },
        [title, type, url]
    );

    // Realtime Validation
    useEffect(() => {
        updateStage(0);
    }, [type, title, url, updateStage]);

    return (
        <>
            <NewResourceHeader stage={stage} />
            <Select
                value={type}
                onChange={(v) => v && void setType(v)}
                mb="xl"
                placeholder="Type"
                data={typeData}
                icon={<Icon3dCubeSphere size={14} />}
            />

            <TextInput
                value={title}
                onChange={(e) => void setTitle(e.currentTarget.value)}
                icon={<IconAbc size={16} />}
                placeholder="Title"
                mb="lg"
            />

            <Input
                value={url}
                onChange={(e) => void setUrl(e.currentTarget.value)}
                icon={<IconForms size={16} />}
                placeholder="URL"
                mb="lg"
            />

            <SegmentedControl
                mb="xl"
                fullWidth
                data={[
                    { label: "Editor", value: "react" },
                    { label: "Preview", value: "ng" },
                ]}
            />

            <TextEditor editor={editor} />
            <Button mt="xl" color="green" mb="xl" variant="outline" fullWidth>
                Save & Publish
            </Button>
        </>
    );
};

export { NewResourceForm };
