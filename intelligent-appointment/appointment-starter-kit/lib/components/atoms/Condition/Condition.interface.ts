// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IStackProps } from '@fluentui/react';

export interface IConditionProps extends IStackProps {
    prefixLabel: string;
    name: string;
    action: () => void;
    description?: string;
}
