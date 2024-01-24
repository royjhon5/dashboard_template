import SideNav from "./layouts/Dashboard/Side-nav";
import TopNav from "./layouts/Dashboard/Top-nav";
import { CssBaseline, ThemeProvider, Box, Grid, Container, Paper } from "@mui/material"
import { AppSettingsContext, useMode } from "./theme/theme";
import SampleColorsButton from "./SampleColorsButton";
import Settings from "./components/Settings/Settings";
import HorizontalNav from "./layouts/Dashboard/Horizton-nav";

function App() {
  const [theme, appMode] = useMode();
  console.log(theme); 
  return (
    <>
      <AppSettingsContext.Provider value={appMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {theme.palette.appSettings.layout === 'vertical' ? (
                <div className="app">
                <SideNav />
                <main className="content">
                <TopNav />
                  {theme.palette.appSettings.stretch === true ? (
                    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
                    <Container maxWidth="xl">
                    <Grid container>
                      <Grid item xs={12}>
                        <Paper sx={{ background: `black` }}>
                            <SampleColorsButton />
                        </Paper>
                      </Grid>
                    </Grid>
                    </Container>
                  </Box>
                  ) : (
                    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
                  <Container maxWidth="xxl">
                  <Grid container>
                    <Grid item xs={12}>
                      <Paper sx={{ background: `black` }}>
                          <SampleColorsButton />
                      </Paper>
                    </Grid>
                  </Grid>
                  </Container>
                </Box>
                  )}
                </main>
              </div>
            ) : (
              <div className="app">
                <main className="content">
                <HorizontalNav />
                {theme.palette.appSettings.stretch === true ? (
                    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
                    <Container maxWidth="xl">
                    <Grid container>
                      <Grid item xs={12}>
                        <Paper sx={{ background: `black` }}>
                            <SampleColorsButton />
                        </Paper>
                      </Grid>
                    </Grid>
                    </Container>
                  </Box>
                  ) : (
                    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
                  <Container maxWidth="xxl">
                  <Grid container>
                    <Grid item xs={12}>
                      <Paper sx={{ background: `black` }}>
                          <SampleColorsButton />
                      </Paper>
                    </Grid>
                  </Grid>
                  </Container>
                </Box>
                  )}
                </main>
              </div>
            )}
            <div className="wrapper">
              <Settings />
            </div>
          </ThemeProvider>
      </AppSettingsContext.Provider>

    </>
  )
}

export default App
