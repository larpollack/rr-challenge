import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  overrides: {
    MuiCardHeader: {
      title: {
        fontSize: '18px',
        
        }
      },
      MuiTypography: {
        colorTextSecondary: {
          color: '#C1C2C8',
        },
        body1: {
          fontSize: "14px",
        }
      },
      MuiPaper: {
        elevation1: {
        boxShadow: '5px 6px 19px -3px rgba(0,0,0,0.12), -1px -1px 0px 0px rgba(0,0,0,0.01), 0px 1px 0px 1px rgba(0,0,0,0.12)'
    }
  }
},
    palette: {
      primary: {
        main: '#e7e7e7',
        mainGradient:  "linear-gradient(115deg, rgba(248,248,255,1) 0%, rgba(193,193,193,1) 100%)",
      },
      secondary: {
        main: '#C1C2C8',
      }
      // ...
    },
  }
);