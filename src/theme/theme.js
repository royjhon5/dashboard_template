import { createContext, useState, useEffect, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (appSettings) => ({
    ...(appSettings.paletteMode === "dark" 
        ? {
            black: {
            100: "#cecfd1",
            200: "#9d9fa3",
            300: "#6d6f75",
            400: "#3c3f47",
            500: "#0b0f19",
            600: "#090c14",
            700: "#07090f",
            800: "#04060a",
            900: "#020305"
            },
            green: {
            100: "#d0f0e0",
            200: "#a2e1c1",
            300: "#73d1a2",
            400: "#45c283",
            500: "#16b364",
            600: "#128f50",
            700: "#0d6b3c",
            800: "#094828",
            900: "#042414"
            },
            blue: {
            100: "#d4e2ff",
            200: "#a9c6ff",
            300: "#7fa9ff",
            400: "#548dff",
            500: "#2970ff",
            600: "#215acc",
            700: "#194399",
            800: "#102d66",
            900: "#081633"
            },
            indigo: {
            100: "#e0e0fc",
            200: "#c1c2f9",
            300: "#a1a3f7",
            400: "#8285f4",
            500: "#6366f1",
            600: "#4f52c1",
            700: "#3b3d91",
            800: "#282960",
            900: "#141430"
            },
            purple: {
            100: "#ece4fb",
            200: "#d8c9f8",
            300: "#c5adf4",
            400: "#b192f1",
            500: "#9e77ed",
            600: "#7e5fbe",
            700: "#5f478e",
            800: "#3f305f",
            900: "#20182f"
            },
            cards: {
            300: '#99A0AB',
            400: '#151822',
            500: "#111927",
            600: '#1C2536',
            700: '#4D5761',
            800: '#2d3748',
            900: '#2F3746'
            },
    } : {
            black: {
            100: "#020305",
            200: "#04060a",
            300: "#07090f",
            400: "#090c14",
            500: "#0b0f19",
            600: "#3c3f47",
            700: "#6d6f75",
            800: "#9d9fa3",
            900: "#cecfd1"
            },
            green: {
            100: "#042414",
            200: "#094828",
            300: "#0d6b3c",
            400: "#128f50",
            500: "#16b364",
            600: "#45c283",
            700: "#73d1a2",
            800: "#a2e1c1",
            900: "#d0f0e0"
            },
            blue: {
            100: "#081633",
            200: "#102d66",
            300: "#194399",
            400: "#215acc",
            500: "#2970ff",
            600: "#548dff",
            700: "#7fa9ff",
            800: "#a9c6ff",
            900: "#d4e2ff"
            },
            indigo: {
            100: "#141430",
            200: "#282960",
            300: "#3b3d91",
            400: "#4f52c1",
            500: "#6366f1",
            600: "#8285f4",
            700: "#a1a3f7",
            800: "#c1c2f9",
            900: "#e0e0fc"
            },
            purple: {
            100: "#20182f",
            200: "#3f305f",
            300: "#5f478e",
            400: "#7e5fbe",
            500: "#9e77ed",
            600: "#b192f1",
            700: "#c5adf4",
            800: "#d8c9f8",
            900: "#ece4fb",
            },
            cards: {
            300: '#6C737F',
            400: '#F8F9FA',
            500: "#FFFFFF",
            600: "#F8F9FA",
            700: "#D2D6DB",
            800: '#f2f4f7',
            900: '#F3F4F6'
            },
    }),
});

export const navColors = (appSettings) => ({
    ...(appSettings.paletteMode === "dark" ? {
        ...(appSettings.navColor === "blend-in" ? {
            ...(appSettings.contrast === "normal" ? {
                navcolor: {
                    100: "#0E1320"
                }
            }:{
                navcolor: {
                    100: '#0B0F19'
                }
            }),
        } : appSettings.navColor === "discrete" ? {
            navcolor: {
                100: "#111927"
            }
        } : {
            navcolor: {
                100: "#1C2536"
            }
        })
    }:{
        ...(appSettings.navColor === "blend-in" ? {
            ...(appSettings.contrast === "normal" ? {
                navcolor: {
                    100: "#FFFFFF"
                }
            }:{
                navcolor: {
                    100: '#F8F9FA'
                }
            })
        } : appSettings.navColor === "discrete" ? {
            navcolor: {
                100: "#F8F9FA"
            }
        } : {
            navcolor: {
                100: "#1C2536"
            }
        }),
    })
}); 

export const presetColors = (appSettings) => ({
    ...(appSettings.colorPreset === "green" ? {
        greenborder: {
            100: "#16b364"
        }
    } : {
        greenborder: {
            100: "none"
        }
    }),
    ...(appSettings.colorPreset === "blue" ? {
        blueborder: {
            100: "#2970ff"
        }
    } : {
        blueborder: {
            100: "none"
        }
    }),
    ...(appSettings.colorPreset === "indigo" ? {
        indigoborder: {
            100: "#6366f1"
        }
    } : {
        indigoborder: {
            100: "none"
        }
    }),
    ...(appSettings.colorPreset === "purple" ? {
        purpleborder: {
            100: "#9e77ed"
        }
    } : {
        purpleborder: {
            100: "none"
        }
    }),
});

export const chipBorders = (appSettings) => ({
    ...(appSettings.colorPreset === 'green' ? {
        bordercolor: {
            100: "#16b364"
        }
    } : appSettings.colorPreset === 'blue' ? {
        bordercolor: {
            100: "#2970ff"
        }
    } : appSettings.colorPreset ==='indigo' ? {
        bordercolor: {
            100: "#6366f1"
        }
    } : {
        bordercolor: {
            100: "#9e77ed"
        }
    })
})

//mui theme settings 

export const themeSettings = (appSettings) => {
    // const colors = tokens(mode)
    return {
        palette: {
            appSettings: appSettings,
            ...(appSettings.paletteMode === "dark" 
            ? { 
                 mode: 'dark',  
                ...(appSettings.colorPreset === "green" ? {
                    primary: {
                        main: "#16b364"
                    }
                } : appSettings.colorPreset === "blue" ? {
                    primary: {
                        main: "#2970ff"
                    }
                } : appSettings.colorPreset === "indigo" ? {
                    primary: {
                        main: "#6366f1"
                    }
                } : {
                    primary: {
                        main: '#9e77ed'
                    }
                }),
                ...(appSettings.contrast === "normal" ? {
                    background: {
                        default: "#0E1320",
                    },
                } : {
                    background: {
                        default: "#0B0F19",
                    },
                }),
            }
            :
            {
                mode: 'light', 
                ...(appSettings.colorPreset === "green" ? {
                    primary: {
                        main: "#16b364"
                    }
                } : appSettings.colorPreset === "blue" ? {
                    primary: {
                        main: "#2970ff"
                    }
                } : appSettings.colorPreset === "indigo" ? {
                    primary: {
                        main: "#6366f1"
                    }
                } : {
                    primary: {
                        main: '#9e77ed'
                    }
                }),
                ...(appSettings.contrast === "normal" ? {
                    background: {
                        default: "#FFFFFF",
                    },
                } : {
                    background: {
                        default: "#F8F9FA",
                    },
                }),
            })
        },
        typography: {
            fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
                fontSize: 16.6672,
            },
            h6: {
                fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
                fontSize: 12,
            },
        },
    };
};


export const AppSettingsContext = createContext({
    //Color Preset
    toggleGreen: () => {},
    toggleBlue: () => {},
    toggleIndigo: () => {},
    togglePurple: () => {},
    //contrast
    toggleNormal: () => {},
    toggleHigh: () => {},
    //layout
    toggleVertical: () => {},
    toggleHorizontal: () => {},
    //nav bar Colors
    toggleBlendin: () => {},
    toggleDiscrete: () => {},
    toggleEvident: () => {},
    //palette Mode
    toggleLightMode: () => {},
    toggleDarkMode: () => {},
    //stretch
    toggleCompact: () => {},
    toggleWide: () => {},
    //toggle the mode enable the app to render dark mode and light mode theme
    toggleModeLight: () => {},
    toggleModeDark: () => {},
});


export const useMode = () => {
    const colors = JSON.parse(localStorage.getItem("app.settings")) || 'green';
    const appContrasts = JSON.parse(localStorage.getItem("app.settings")) || 'normal';
    const appLayout = JSON.parse(localStorage.getItem("app.settings")) || 'vertical';
    const navColors = JSON.parse(localStorage.getItem("app.settings")) || 'blend-in';
    const palettes = JSON.parse(localStorage.getItem("app.settings")) || 'dark';
    const appContent = JSON.parse(localStorage.getItem("app.settings")) || true;
    const [appSettings, setAppSettings] = useState({
        colorPreset: colors.colorPreset || 'green',
        contrast: appContrasts.contrast || 'normal',
        layout: appLayout.layout || 'vertical',
        navColor: navColors.navColor || 'blend-in',
        paletteMode: palettes.paletteMode || 'dark',
        stretch: appContent.stretch || true
    });

    const [mode, setMode] = useState();


    
    const appMode = useMemo(
        () => ({
            //Color Preset
            toggleGreen: () => setAppSettings({ ...appSettings, colorPreset: 'green' }),
            toggleBlue: () => setAppSettings({ ...appSettings, colorPreset: 'blue' }),
            toggleIndigo: () => setAppSettings({ ...appSettings, colorPreset: 'indigo' }),
            togglePurple: () => setAppSettings({ ...appSettings, colorPreset: 'purple' }),
            //contrast 
            toggleNormal: () => setAppSettings({ ...appSettings, contrast: 'normal' }),
            toggleHigh: () => setAppSettings({ ...appSettings, contrast: 'high' }),
            //layout
            toggleVertical: () => setAppSettings({ ...appSettings, layout: 'vertical' }),
            toggleHorizontal: () => setAppSettings({ ...appSettings, layout: 'horizontal' }),
            //Nav Bar Color
            toggleBlendin: () => setAppSettings({ ...appSettings, navColor: 'blend-in' }),
            toggleDiscrete: () => setAppSettings({ ...appSettings, navColor: 'discrete' }),
            toggleEvident: () => setAppSettings({ ...appSettings, navColor: 'evident' }),
            //palette Mode
            toggleLightMode: () => setAppSettings({ ...appSettings, paletteMode: 'light' }),
            toggleDarkMode: () => setAppSettings({ ...appSettings, paletteMode: 'dark' }),
            //stretch
            toggleCompact: () => setAppSettings({ ...appSettings, stretch: true }),
            toggleWide: () => setAppSettings({ ...appSettings, stretch: false }),
            //
            toggleModeLight: () => setMode("light"),
            toggleModeFark: () => setMode("dark"),
            appSettings,
            mode
        }),
        [appSettings, mode]
    );

    useEffect(() => {
        localStorage.setItem("app.settings", JSON.stringify(appSettings));
    }, [appSettings]);



    const theme = useMemo(() => createTheme(themeSettings(appSettings)), [appSettings]);
    return [theme, appMode];

}
