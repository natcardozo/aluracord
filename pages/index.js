import { useState } from 'react';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import appConfig from '../config.json';
import React from 'react';

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals[900]};
                    font-size: 28px;
                    font-weight: 600;
                }
            `}
            </style>
        </>
    )
}

/* function HomePage() {
    return (
        <div>
            <GlobalStyle />
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <h2>Discord - Alura Matrix</h2>
        </div>
    )
  }
  
  export default HomePage */

export default function PaginaInicial() {
    const [githubUser, setGithubUser] = useState('');
    const roteamento = useRouter();

    function handleChange(e) {
        const valor = e.target.value;
        setGithubUser(valor);
    }

    return (
        <>
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
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: {
                    xs: 'column',
                    sm: 'row',
                    },
                    width: '100%', maxWidth: '700px',
                    borderRadius: '5px', padding: '32px', margin: '16px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    backgroundColor: appConfig.theme.colors.neutrals['050'],
                    opacity: '95%',
                }}
                >
                {/* Formulário */}
                <Box
                    as="form"
                    onSubmit={function (e) {
                        e.preventDefault()
                        roteamento.push(`/chat?username=${githubUser}`);
                    }}
                    styleSheet={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                    }}
                >
                    <Titulo tag="h2">Bem vindo(a), {githubUser}!</Titulo>
                    <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals['900'] }}>
                    {appConfig.name}
                    </Text>

                    <TextField
                        onChange={handleChange}
                        placeholder='Insira o seu usuário do github'
                        value={githubUser}
                        fullWidth
                        textFieldColors={{
                        neutral: {
                        textColor: appConfig.theme.colors.neutrals[800],
                        mainColor: appConfig.theme.colors.neutrals[100],
                        mainColorHighlight: appConfig.theme.colors.primary[800],
                        backgroundColor: appConfig.theme.colors.neutrals[200],
                        },
                    }}
                    />
                    <Button
                    type='submit'
                    label='Entrar'
                    fullWidth
                    buttonColors={{
                        contrastColor: appConfig.theme.colors.neutrals["000"],
                        mainColor: appConfig.theme.colors.primary[600],
                        mainColorLight: appConfig.theme.colors.primary[400],
                        mainColorStrong: appConfig.theme.colors.primary[900],
                    }}
                    />
                </Box>
                {/* Formulário */}


                {/* Photo Area */}
                <Box
                    styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '200px',
                    padding: '16px',
                    backgroundColor: appConfig.theme.colors.neutrals['200'],
                    border: '1px solid',
                    borderColor: appConfig.theme.colors.neutrals['200'],
                    borderRadius: '10px',
                    flex: 1,
                    minHeight: '240px',
                    }}
                >
                    <Image
                    styleSheet={{
                        borderRadius: '50%',
                        marginBottom: '16px',
                    }}
                    src={githubUser.length >= 2 ? `https://github.com/${githubUser}.png` : 'https://i.imgur.com/O1zaVNB.png'}
                    />
                    <Text
                    variant="body4"
                    styleSheet={{
                        color: appConfig.theme.colors.neutrals[800],
                        backgroundColor: appConfig.theme.colors.neutrals[100],
                        width: '75%',
                        height: '25px',
                        textAlign: 'center',
                        padding: '3px 10px',
                        borderRadius: '1000px'
                    }}
                    >
                    {githubUser}
                    </Text>
                </Box>
                {/* Photo Area */}
                </Box>
                {/* Seguidores */}
                <Box 
                styleSheet={{
                    display: 'inline',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%', maxWidth: '700px',
                    borderRadius: '5px', 
                    paddingHorizontal: '32px', 
                    paddingVertical: '10px', 
                    margin: '16px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    backgroundColor: appConfig.theme.colors.neutrals['050'],
                    opacity: '90%',
                }}
                >
                    <Box
                    styleSheet={{
                        display: 'inline-block',
                        textAlign: 'center',
                        margin: 'auto',
                    }}>
                        <h3>Seguindo</h3>
                    </Box>
                    <Box
                    styleSheet={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        textAlign: 'center',
                        margin: 'auto',
                        marginTop: '5px'
                    }}>
                        <Image 
                        styleSheet={{
                            width: '50px',
                            backgroundColor: appConfig.theme.colors.neutrals['200'],
                            minHeight: '50px',
                            borderRadius: '50%',
                            transition: '1s',
                            hover: {
                                cursor: 'pointer',
                                transform: 'rotate(360deg)',
                            }
                        }} src={githubUser.length >= 2 ? `https://github.com/omariosouto.png` : 'https://i.imgur.com/O1zaVNB.png'} />
                        <Image 
                        styleSheet={{
                            width: '50px',
                            backgroundColor: appConfig.theme.colors.neutrals['200'],
                            minHeight: '50px',
                            borderRadius: '50%',
                            transition: '1s',
                            hover: {
                                cursor: 'pointer',
                                transform: 'rotate(360deg)',
                            }
                        }} src={githubUser.length >= 2 ? `https://github.com/peas.png` : 'https://i.imgur.com/O1zaVNB.png'} />
                        <Image 
                        styleSheet={{
                            width: '50px',
                            backgroundColor: appConfig.theme.colors.neutrals['200'],
                            minHeight: '50px',
                            borderRadius: '50%',
                            transition: '1s',
                            hover: {
                                cursor: 'pointer',
                                transform: 'rotate(360deg)',
                            }
                        }} src={githubUser.length >= 2 ? `https://github.com/alura.png` : 'https://i.imgur.com/O1zaVNB.png'} />
                        <Image 
                        styleSheet={{
                            width: '50px',
                            backgroundColor: appConfig.theme.colors.neutrals['200'],
                            minHeight: '50px',
                            borderRadius: '50%',
                            transition: '1s',
                            hover: {
                                cursor: 'pointer',
                                transform: 'rotate(360deg)',
                            }
                        }} src={githubUser.length >= 2 ? `https://github.com/rafaballerini.png` : 'https://i.imgur.com/O1zaVNB.png'} />
                        <Image 
                        styleSheet={{
                            width: '50px',
                            backgroundColor: appConfig.theme.colors.neutrals['200'],
                            minHeight: '50px',
                            borderRadius: '50%',
                            transition: '1s',
                            hover: {
                                cursor: 'pointer',
                                transform: 'rotate(360deg)',
                            }
                        }} src={githubUser.length >= 2 ? `https://github.com/juunegreiros.png` : 'https://i.imgur.com/O1zaVNB.png'} />
                        <Image 
                        styleSheet={{
                            width: '50px',
                            backgroundColor: appConfig.theme.colors.neutrals['200'],
                            minHeight: '50px',
                            borderRadius: '50%',
                            transition: '1s',
                            hover: {
                                cursor: 'pointer',
                                transform: 'rotate(360deg)',
                            }
                        }} src={githubUser.length >= 2 ? `https://github.com/loresgarcia.png` : 'https://i.imgur.com/O1zaVNB.png'} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}