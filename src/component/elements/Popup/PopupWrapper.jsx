
import Popup from "reactjs-popup"
import "./popup.css"

const PopupWrapper = ({
    open = false,
    children,
    onClose,
    className,
    ...rest
}) => {
  return (
    <Popup open={open} closeOnDocumentClick onClose={onClose} {...rest}>
        <div className="modal border border-accent/50 rounded-md">
            {children}
        </div>
    </Popup>
  )
}

export default PopupWrapper