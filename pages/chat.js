import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

export default function ChatPage() {
    return (
        <Box
            styleSheet={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://i.imgur.com/lwu3vh0.png)',
            backgroundRepeat: 'repeat', backgroundSize: '500px', backgroundBlendMode: 'multiply',
            }}
        >
            <Box
                styleSheet={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '95%',
                height: '80%',
                borderRadius: '5px',
                backgroundColor: appConfig.theme.colors.neutrals[100],
                opacity: '95%',
                }}
            >
            </Box>
            <Box
                styleSheet={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginTop: '10px',
                width: '95%',
                height: '15%',
                borderRadius: '5px',
                backgroundColor: appConfig.theme.colors.neutrals[100],
                opacity: '95%',
                }}
            >
            </Box>
        </Box>
    )
}