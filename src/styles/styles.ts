export const styles = {
  checkboxLabel: {
    marginLeft: "20px",
  },
  checkbox: {
    marginRight: "5px",
    "&.Mui-checked": {
      color: "#08b494",
    },
  },
  mainAppBox: {
    backgroundColor: "#f0ecec",
    display: "flex",
    justifyContent: "center",
    height: "max-content",
  },
  progressBarMainBox: {
    width: "90%",
    display: "flex",
    marginTop: "35px",
    flexDirection: "column",
  },
  progressBarTypography: {
    fontWeight: "bold",
  },
  progressBarInnerBox: {
    width: "105%",
    display: "flex",
    marginTop: "5px",
  },
  progressBarLinearProgress: {
    height: "20px",
    borderRadius: "11px",
    width: "100%",
    "&.MuiLinearProgress-root": {
      backgroundColor: "#f8fcfc",
    },
    " > span": {
      "&.MuiLinearProgress-bar1Determinate": {
        borderRadius: "11px",
        backgroundColor: "#08b494",
      },
    },
  },
  expandCollapse: {
    color: "#b4b4b4",
  },
  divider: {
    borderWidth: 1,
  },
  greenIcon: {
    color: "#08b494",
  },
  listItemIcon: {
    minWidth: "35px",
  },
  taskBox: {
    border: "2px solid #e0dcdc",
    borderRadius: "7px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "25px",
    marginBottom: "25px",
    width: "95%",
  },
  taskList: {
    width: "100%",
    bgcolor: "background.paper",
    borderRadius: "7px",
    padding: 0,
  },
  tasksWidgetBox: {
    border: "2px solid #e0dcdc",
    backgroundColor: "white",
    borderRadius: "7px",
    margin: "70px 0 20px 0",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "70%",
  },
};
