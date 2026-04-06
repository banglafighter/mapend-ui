import {useUI} from "./../provider/ui-adapter-provider";
import {AppToastActionProps, AppToastProps} from "mmcore-ui";
import {UICommonUtil} from "./../common/ui-common-util";
import {useAppContext} from "mapend";

export function ToastBox(props: AppToastProps) {
    const ui = useUI()
    const DaynaToastBox = ui.component.ToastBox
    if (DaynaToastBox) {
        return <DaynaToastBox {...props} />
    }
    return UICommonUtil.notImplemented("ToastBox")
}

export function toast(props: AppToastActionProps) {
    const {uiAction} = useAppContext.get();
    if (uiAction && uiAction.toastAction) {
        uiAction.toastAction(props)
    }
}