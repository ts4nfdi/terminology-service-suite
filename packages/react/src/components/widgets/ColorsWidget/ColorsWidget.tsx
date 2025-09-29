"use client";

import React from "react";
import {
    EuiFlexGroup,
    EuiBadge,
    EuiFlexItem
} from "@elastic/eui";
import {TS4NFDI_COLORS} from "../../../app/colors";

const customPalettes = [
    TS4NFDI_COLORS.YELLOW,
    TS4NFDI_COLORS.ORANGE,
    TS4NFDI_COLORS.GREEN,
    TS4NFDI_COLORS.BLUE,
    TS4NFDI_COLORS.VIOLET
]

function ColorsWidget() {
    return (
        <EuiFlexGroup alignItems="center">
            {customPalettes.map((customPalette, index) =>
                <EuiFlexItem key={index} grow={false}>
                    <EuiFlexGroup
                        gutterSize="none"
                        responsive={false}
                    >
                        {customPalette.map((hexCode) => (
                            <EuiBadge color={hexCode} key={hexCode}/>
                        ))}
                    </EuiFlexGroup>
                </EuiFlexItem>
            )}
        </EuiFlexGroup>
    );
}

export { ColorsWidget };
