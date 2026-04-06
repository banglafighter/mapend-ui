import {AppToastActionProps} from "mmcore-ui";

export interface UIActionSpec {
    toastAction: (props: AppToastActionProps) => void
}