import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../config.json';

export function ButtonSendSticker(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box
      styleSheet={{
        position: 'relative',
      }}
    >
      <Image
        styleSheet={{
            marginLeft: '10px',
            hover: {
                cursor: 'pointer'
            }
        }}
        src='https://i.imgur.com/bfVST94.png'
        onClick={() => setOpenState(!isOpen)}
      />
      {isOpen && (
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: appConfig.theme.colors.neutrals[800],
            width: {
              xs: '200px',
              sm: '290px',
            },
            height: '300px',
            right: '30px',
            bottom: '30px',
            padding: '16px',
            boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
          }}
          onClick={() => setOpenState(false)}
        >
          <Text
            styleSheet={{
              color: appConfig.theme.colors.neutrals["000"],
              fontWeight: 'bold',
            }}
          >
            Stickers
          </Text>
          <Box
            tag="ul"
            styleSheet={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              paddingTop: '16px',
              overflow: 'auto',
            }}
          >
            {appConfig.stickers.map((sticker) => (
              <Text
                onClick={() => {
                  // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);
                  if (Boolean(props.onStickerClick)) {
                    props.onStickerClick(sticker);
                  }
                }}
                tag="li" key={sticker}
                styleSheet={{
                  width: '50%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  }
                }}
              >
                <Image src={sticker} />
              </Text>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export function ButtonSendFile(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box
      styleSheet={{
        position: 'relative',
      }}
    >
      <Image
        styleSheet={{
            marginLeft: '10px',
            hover: {
                cursor: 'pointer'
            }
        }}
        src='https://i.imgur.com/7xop5KS.png'
        onClick={() => setOpenState(!isOpen)}
      />
      {isOpen && (
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: appConfig.theme.colors.neutrals[800],
            width: '150px',
            height: '250px',
            right: '30px',
            bottom: '30px',
            padding: '10px',
            boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
          }}
          onClick={() => setOpenState(false)}
        >
          <Box
            tag="ul"
            styleSheet={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              paddingTop: '16px',
              overflow: 'auto',
            }}
        >
            <Text
                tag="li"
                styleSheet={{
                  width: '100%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                    cursor: 'pointer'
                  }
                }}
              >
                Arquivo
            </Text>
            <Text
                tag="li"
                styleSheet={{
                  width: '100%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                    cursor: 'pointer'
                  }
                }}
              >
                Foto
            </Text>
            <Text
                tag="li"
                styleSheet={{
                  width: '100%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                    cursor: 'pointer'
                  }
                }}
              >
                Video
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export function ButtonSendLocation(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box
      styleSheet={{
        position: 'relative',
      }}
    >
      <Image
        styleSheet={{
            marginLeft: '10px',
            hover: {
                cursor: 'pointer'
            }
        }}
        src='https://i.imgur.com/UWAGTTa.png'
        onClick={() => setOpenState(!isOpen)}
      />
      {isOpen && (
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: appConfig.theme.colors.neutrals[800],
            width: '200px',
            height: '100px',
            right: '30px',
            bottom: '30px',
            padding: '10px',
            boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
          }}
          onClick={() => setOpenState(false)}
        >
          <Box
            tag="ul"
            styleSheet={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              paddingTop: '16px',
              overflow: 'auto',
            }}
        >
            <Text
                tag="li"
                styleSheet={{
                  width: '100%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                    cursor: 'pointer'
                  }
                }}
              >
                Localiza????o atual
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export function ButtonSendPhoto(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box
      styleSheet={{
        position: 'relative',
      }}
    >
      <Image
        styleSheet={{
            marginLeft: '10px',
            hover: {
                cursor: 'pointer'
            }
        }}
        src='https://i.imgur.com/ADoTIrD.png'
        onClick={() => setOpenState(!isOpen)}
      />
      {isOpen && (
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: appConfig.theme.colors.neutrals[800],
            width: '200px',
            height: '250px',
            right: '30px',
            bottom: '30px',
            padding: '10px',
            boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
          }}
          onClick={() => setOpenState(false)}
        >
          <Box
            tag="ul"
            styleSheet={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              paddingTop: '16px',
              overflow: 'auto',
            }}
        >
            <Text
                tag="li"
                styleSheet={{
                  width: '100%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                    cursor: 'pointer'
                  }
                }}
              >
                Rolo de c??mera
            </Text>
            <Text
                tag="li"
                styleSheet={{
                  width: '100%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                    cursor: 'pointer'
                  }
                }}
              >
                Tirar foto
            </Text>
            <Text
                tag="li"
                styleSheet={{
                  width: '100%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                    cursor: 'pointer'
                  }
                }}
              >
                Gravar Video
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  )
}