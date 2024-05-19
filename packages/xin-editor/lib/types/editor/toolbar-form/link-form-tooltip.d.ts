import { FormInstance } from 'antd';
import { FC, ReactNode } from 'react';
import { Editor } from 'slate';
interface LinkFormTooltipProps {
    children?: ReactNode;
    defaultValue?: Partial<LinkFormType>;
    disabled?: boolean;
    destroyTooltipOnHide?: boolean;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}
export interface LinkFormType {
    title: string;
    link: string;
}
declare const LinkFormTooltip: FC<LinkFormTooltipProps>;
interface LinkFormProps {
    editor: Editor;
    afterFinish?: () => void;
    type?: 'withTitle';
    defaultValue?: Partial<LinkFormType>;
    form: FormInstance<LinkFormType>;
}
export declare const LinkForm: FC<LinkFormProps>;
export default LinkFormTooltip;
