import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  IconButton,
  styled,
  tooltipClasses,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function QuestModal({
  size,
  icon,
  title,
  text,
  video,
  active,
  tips,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log("Opening dialog");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Closing dialog");
    setOpen(false);
  };

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: "2em",
    },
    [`& .${tooltipClasses.popper}`]: {
      transform: "translateY(-8px)",
    },
  }));

  const CustomIconButton = styled(IconButton)(({ theme }) => ({
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  }));

  return (
    <>
      <CustomTooltip title={title} className="index-1000">
        <CustomIconButton aria-label="edit" size="small" onClick={handleOpen}>
          <img src={icon} alt="icon" style={{ width: size, height: size }} />
        </CustomIconButton>
      </CustomTooltip>

      {active && (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
          <DialogTitle
            id="alert-dialog-title"
            className="shadow-lg mb-24 quest__title"
            style={{
              textAlign: "center",
              fontSize: "3rem",
              color: "#4dabf7",
              fontWeight: "600",
            }}
          >
            {title}
          </DialogTitle>
          {/* <DialogTitle
            id="alert-dialog-title"
            className="shadow-lg mb-24 quest__text"
          >
            {text}
          </DialogTitle> */}
          <DialogContent>
            <p className="quest__text">{text}</p>
            {tips && (
              <div className="quest__tips-container">
                <p className="quest__tips-title">Tips </p>
                {tips.map((tip) => {
                  return <li className="quest__tips-li">{tip}</li>;
                })}
              </div>
            )}
            {video && (
              <>
                <p className="quest__video-title">Tutorial</p>
                <div className="quest__video-container">
                  <video
                    src={`/videos/${video}`}
                    controls
                    className="quest__video"
                  ></video>
                  <p className="quest__video-credits">
                    Video from:{" "}
                    <Link to="https://x.com/karelvuong" target="_blank">
                      @karelvuong
                    </Link>
                  </p>
                </div>
              </>
            )}

            <div className="quest__xmark-container" onClick={handleClose}>
              <FontAwesomeIcon icon={faXmark} className="quest__xmark" />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
