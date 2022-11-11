
export const test = {
          breakpoints: {
            keys: ['xs', 'sm', 'md', 'lg', 'xl'],
            values: {
              xs: 0,
              sm: 635,
              md: 900,
              lg: 1200,
              xl: 1536
            },
            unit: 'px'
          },
          direction: 'ltr',
          components: {
            MuiButton: {
              variants: [
                {
                  props: {
                    variant: 'contained',
                    color: 'grey'
                  },
                  style: {
                    color: '#222222',
                    backgroundColor: '#e0e0e0',
                    '&:hover': {
                      backgroundColor: '#d5d5d5'
                    }
                  }
                },
                {
                  props: {
                    variant: 'outlined',
                    color: 'grey'
                  },
                  style: {
                    color: '#222222',
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                    '&.Mui-disabled': {
                      border: '1px solid rgba(0, 0, 0, 0.12)'
                    },
                    '&:hover': {
                      borderColor: 'rgba(0, 0, 0, 0.23)',
                      backgroundColor: 'rgba(34, 34, 34, 0.04)'
                    }
                  }
                },
                {
                  props: {
                    variant: 'text',
                    color: 'grey'
                  },
                  style: {
                    color: '#222222',
                    '&:hover': {
                      backgroundColor: 'rgba(34, 34, 34, 0.04)'
                    }
                  }
                }
              ]
            }
          },
          palette: {
            mode: 'light',
            grey: {
              50: '#fafafa',
              100: '#f5f5f5',
              200: '#eeeeee',
              300: '#e0e0e0',
              400: '#bdbdbd',
              500: '#9e9e9e',
              600: '#757575',
              700: '#616161',
              800: '#424242',
              900: '#212121',
              main: '#e0e0e0',
              dark: '#bdbdbd',
              A100: '#f5f5f5',
              A200: '#eeeeee',
              A400: '#bdbdbd',
              A700: '#616161'
            },
            common: {
              black: '#000',
              white: '#fff'
            },
            primary: {
              main: '#cc00ee',
              light: '#42a5f5',
              dark: '#ff0000',
              contrastText: 'rgba(255, 255, 255, 0.87)'
            },
            secondary: {
              main: '#1d4dcd',
              light: '#6678ff',
              dark: '#00269b',
              contrastText: '#fff'
            },
            error: {
              main: '#d32f2f',
              light: '#ef5350',
              dark: '#c62828',
              contrastText: '#fff'
            },
            warning: {
              main: '#ed6c02',
              light: '#ff9800',
              dark: '#e65100',
              contrastText: '#fff'
            },
            info: {
              main: '#0288d1',
              light: '#03a9f4',
              dark: '#01579b',
              contrastText: '#fff'
            },
            success: {
              main: '#2e7d32',
              light: '#4caf50',
              dark: '#1b5e20',
              contrastText: '#fff'
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
            text: {
              primary: '#222222',
              secondary: 'rgba(0, 0, 0, 0.6)',
              disabled: 'rgba(0, 0, 0, 0.38)',
              primaryChannel: '0 0 0',
              secondaryChannel: '0 0 0'
            },
            divider: 'rgba(0,0,0,0.05)',
            background: {
              paper: '#fff',
              default: '#fff'
            },
            action: {
              active: 'rgba(0, 0, 0, 0.54)',
              hover: 'rgba(0, 0, 0, 0.04)',
              hoverOpacity: 0.04,
              selected: 'rgba(0, 0, 0, 0.08)',
              selectedOpacity: 0.08,
              disabled: 'rgba(0, 0, 0, 0.26)',
              disabledBackground: 'rgba(0, 0, 0, 0.12)',
              disabledOpacity: 0.38,
              focus: 'rgba(0, 0, 0, 0.12)',
              focusOpacity: 0.12,
              activatedOpacity: 0.12,
              activeChannel: '0 0 0',
              selectedChannel: '0 0 0'
            }
          },
          shape: {
            borderRadius: 4
          },
          mixins: {
            toolbar: {
              minHeight: 56,
              '@media (min-width:0px)': {
                '@media (orientation: landscape)': {
                  minHeight: 48
                }
              },
              '@media (min-width:600px)': {
                minHeight: 64
              }
            }
          },
          shadows: [
            'none',
            '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
            '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
            '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
            '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
            '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
            '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
            '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
            '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
            '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
            '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
            '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
            '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
            '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
            '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
            '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
            '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
            '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
            '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
            '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
            '0 2px 40px 0 rgba(0, 0, 0, 0.07)'
          ],
          typography: {
            htmlFontSize: 16,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            h1: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 900,
              fontSize: 26.4,
              lineHeight: 1.167,
              letterSpacing: '-0.01562em'
            },
            h2: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 900,
              fontSize: 22,
              lineHeight: 1.03,
              letterSpacing: '-0.00833em'
            },
            h3: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 'normal',
              fontSize: 18.333333333333336,
              lineHeight: 1.167,
              letterSpacing: '0em'
            },
            h4: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 'normal',
              fontSize: 15.27777777777778,
              lineHeight: 1.235,
              letterSpacing: '0.00735em'
            },
            h5: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 900,
              fontSize: 12.731481481481485,
              lineHeight: 1.334,
              letterSpacing: '0em'
            },
            h6: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 900,
              fontSize: 10.609567901234572,
              lineHeight: 1.6,
              letterSpacing: '0.0075em'
            },
            subtitle1: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              lineHeight: 1.75,
              letterSpacing: '0.05em'
            },
            subtitle2: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              lineHeight: 1.57,
              letterSpacing: '0.05em'
            },
            body1: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '1.1rem',
              lineHeight: 1.44,
              letterSpacing: '0.00938em'
            },
            body2: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.43,
              letterSpacing: '0.01071em'
            },
            button: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              lineHeight: 1.5,
              letterSpacing: '0.02857em',
              textTransform: 'uppercase'
            },
            caption: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '0.75rem',
              lineHeight: 1.66,
              letterSpacing: '0.03333em'
            },
            overline: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 2.66,
              letterSpacing: '0.08333em',
              textTransform: 'uppercase'
            }
          },
          transitions: {
            easing: {
              easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
              easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
              easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
              sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
            },
            duration: {
              shortest: 150,
              shorter: 200,
              short: 250,
              standard: 300,
              complex: 375,
              enteringScreen: 225,
              leavingScreen: 195
            }
          },
          zIndex: {
            mobileStepper: 1000,
            fab: 1050,
            speedDial: 1050,
            appBar: 1100,
            drawer: 1200,
            modal: 1300,
            snackbar: 1400,
            tooltip: 1500
          },
          vector: {
            fontFamily: '"OpenSans", sans-serif',
            vector: {
              marginBottom: 0
            },
            slide: {
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: 0,
              boxShadow: '0 5px 15px 0 rgba(94, 94, 94, 0.2)',
              maxWidthMobile: '320px',
              maxWidth: '635px',
              overflow: 'inherit'
            },
            adBlock: {},
            buttonAnswerBlock: {},
            buttonBlock: {
              button: {
                textTransform: 'capitalize',
                containedPrimary: {
                  textTransform: 'uppercase'
                },
                sizeLarge: {
                  fontSize: '20px',
                  minHeight: '50px'
                },
                outlined: {}
              },
              startIcon: {
                position: 'absolute',
                left: '15px'
              }
            },
            buttonTcpaBlock: {},
            disclaimerBlock: {
              maxWidth: '620px',
              color: '#000',
              fontSize: '10px',
              lineHeight: '15px',
              marginMobile: '0 auto 15px',
              margin: '0 auto 15px',
              padding: 0,
              textAlignMobile: 'justify',
              textAlign: 'justify',
              label: {
                textAlign: 'justify',
                color: 'inherit',
                fontSize: 'inherit',
                lineHeight: 'inherit',
                letterSpacing: 0,
                margin: '0 0 5px',
                padding: 0,
                overflowYMobile: 'scroll',
                heightMobile: '75px',
                paddingMobile: '5px'
              },
              links: {
                textDecoration: 'underline'
              },
              disclaimerLeft: {
                textAlign: 'left',
                label: {
                  heightMobile: 'auto',
                  maxHeightMobile: '275px',
                  borderMobile: 'solid 1px #ffcfcb',
                  paddingMobile: '5px'
                }
              },
              slideDisclaimerLeft: {
                cursor: 'pointer',
                before: {
                  content: '"Please check"',
                  display: 'block',
                  background: '#f44336',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  color: '#fff',
                  width: 'auto',
                  height: 'auto',
                  fontSize: '12px',
                  position: 'absolute',
                  textAlign: 'center',
                  padding: '0 8px',
                  marginTop: '-20px',
                  marginLeft: '0px',
                  widthMobile: 'auto',
                  marginTopMobile: '-25px',
                  marginLeftMobile: '-5px'
                }
              },
              tcpaCheckedLabel: {
                before: {
                  backgroundColor: 'green',
                  content: '"Great!"'
                }
              },
              leadidTcpaDisclosure: {
                appearance: 'none',
                border: '2px solid #0000ff',
                width: '16px',
                height: '16px',
                marginBottom: '-4px',
                marginRight: '5px',
                checked: {
                  background: 'url("https://pathcdn.techopg.com/sp/img/v1-check-green.svg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '10px',
                  border: '2px solid green'
                }
              }
            },
            faqBlock: {
              button: {
                border: '1px solid #000',
                bottom: '10px',
                color: '#000',
                cursor: 'default',
                display: 'flex',
                fontSize: '10px',
                lineHeight: '17px',
                padding: '4px',
                position: 'relative',
                textAlign: 'center',
                textTransform: 'uppercase',
                margin: '40px auto 10px',
                hover: {
                  opacity: 0.7
                },
                before: {
                  position: 'relative',
                  backgroundColor: '#000',
                  color: '#fff',
                  content: '"?"',
                  display: 'inline-block',
                  fontSize: '10px',
                  minHeight: '13px',
                  minWidth: '13px',
                  lineHeight: '13px',
                  left: '-4px'
                }
              }
            },
            fieldBlock: {
              formControl: {
                inputLabelRoot: {
                  color: '#2f281e'
                },
                inputBaseInput: {
                  padding: '15.5px 14px'
                }
              },
              buttonCheckbox: {
                margin: '7px auto',
                width: '100%',
                minHeight: '50px',
                border: '1px solid #cfcfd4',
                cursor: 'pointer',
                justifyContent: 'center',
                formControlLabelLabel: {
                  fontSize: '20px',
                  color: '#5a5a5a'
                },
                checkboxRoot: {
                  position: 'absolute',
                  left: '15px'
                }
              }
            },
            headerBlock: {
              text: {
                textTransform: 'uppercase',
                h1TextTransform: 'uppercase',
                h2TextTransform: 'uppercase',
                h3TextTransform: 'uppercase',
                h4TextTransform: 'capitalize',
                h5TextTransform: 'uppercase',
                h6TextTransform: 'uppercase'
              }
            },
            imageBlock: {
              image: {
                display: 'block',
                maxWidth: '100%',
                margin: '0 auto 1rem'
              },
              stretched: {
                maxWidth: 'none',
                width: 'calc(100% + 32px)',
                marginRight: '-16px',
                marginLeft: '-16px'
              }
            },
            pollResultsBlock: {
              resultLabel: {
                color: '#868e96',
                lineHeight: '1'
              },
              resultPercent: {
                color: '#868e96',
                lineHeight: '1'
              },
              resultBar: {
                backgroundColor: '#f0f0f0',
                height: '25px'
              }
            },
            textBlock: {},
            titleBlock: {
              text: {
                letterSpacing: 'normal',
                lineHeightMobile: 1.09,
                lineHeight: 1.07,
                margin: 0,
                paddingMobile: 0,
                padding: 0,
                textAlign: 'left',
                textTransform: 'capitalize'
              }
            },
            progressBlock: {},
            youtubeBlock: {},
            dividerBlock: {},
            instagramBlock: {},
            listBlock: {},
            vimeoBlock: {},
            miroBlock: {},
            twitterBlock: {},
            spotifyBlock: {},
            aveIBlock: {},
            storyBlock: {},
            digitalConsentBlock: {
              text: {
                color: '#001b7f'
              }
            },
            learnMoreBlock: {}
          }
        }
