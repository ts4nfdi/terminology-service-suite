import React, {ReactElement} from "react";

export default function OntologyBadge({
    text,
    onClick
}: {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
}) : ReactElement {
    return (
        <>
            <button className="no-decoration" onClick={onClick}>
                <span className="ontology-badge">{text}</span>
            </button>
        </>
    );
}