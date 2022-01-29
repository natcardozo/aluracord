import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';
import { ButtonSendSticker, ButtonSendFile, ButtonSendLocation, ButtonSendPhoto } from '../src/components/ButtonSendSticker';
import { ProfileHover } from '../src/components/ProfileHover';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMwNzU0OCwiZXhwIjoxOTU4ODgzNTQ4fQ.SoWLEyZRSVhMRv_CbxeJUT1twgD4V9x_9W5d5C8oA3E';
const SUPABASE_URL = 'https://ahwqahoeykmpzbkasphs.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function escutaMensagensEmTempoReal(adicionaMensagem) {
    return supabaseClient.from('mensagens').on('INSERT', (respostaLive) => {
        adicionaMensagem(respostaLive.new);
    })
    .subscribe();
}

export default function ChatPage() {
    const roteamento = useRouter();
    const usuarioLogado = roteamento.query.username;
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

    React.useEffect(() => {
        supabaseClient.from('mensagens').select('*').order('id', { ascending: false }).then(({ data }) => {
            setListaDeMensagens(data)
        });
        const subscription = escutaMensagensEmTempoReal((novaMensagem) => {
            setListaDeMensagens((valorAtualDaLista) => {
                return [
                    novaMensagem,
                    ...valorAtualDaLista,
                ]
            });
        });

        return () => {
            subscription.unsubscribe();
        }
    }, []);

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            open: false,
            remetente: usuarioLogado,
            texto: novaMensagem,
        }

        supabaseClient.from('mensagens').insert([mensagem]).then(({ data }) => {})

        setMensagem('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://i.imgur.com/lwu3vh0.png)`,
                backgroundRepeat: 'repeat', backgroundSize: '500px', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >
                    <MessageList mensagens = {listaDeMensagens} setMensagens={setListaDeMensagens} />

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(e) => {
                                const valor = e.target.value;
                                setMensagem(valor);
                            }}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Button 
                            type='submit'
                            label='Enviar'
                            variant='tertiary'
                            colorVariant='neutral'
                            onClick={(e) => {
                                e.preventDefault();
                                handleNovaMensagem(mensagem);
                            }}
                        />
                    </Box>
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'right',
                            marginRight: '5%',
                            marginLeft: '5px'
                        }}
                        >
                            <ButtonSendPhoto />
                            <ButtonSendLocation />
                            <ButtonSendFile />
                            <ButtonSendSticker 
                                onStickerClick={(sticker) => {
                                    handleNovaMensagem(':sticker: ' + sticker);
                                }}
                            />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    const [isOpen, setOpenState] = React.useState('');
    const [id, setId] = React.useState('');

    React.useEffect(() => {

    }, []);

    function Remover(mensagem) {
        const novaListaDeMensagens = props.mensagens.filter((mensagemRemover) =>{
            return mensagem.id !== mensagemRemover.id
        })
        props.setMensagens(novaListaDeMensagens)
    }

    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                display: 'flex',
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.remetente}.png`}
                                onMouseOver={(e) => {
                                    setId(mensagem.id);
                                    setOpenState(true);
                                    console.log(mensagem)
                                }}
                            />
                            <ProfileHover 
                                mensagem={mensagem} 
                                open={isOpen} 
                                setOpen={() => setOpenState(!isOpen)} 
                                id={id}
                            />
                            <Text tag="strong">
                                {mensagem.remetente}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                                <Button 
                                    label='X'
                                    type='button'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        Remover(mensagem);
                                    }}
                                    styleSheet={{
                                        height: '10px',
                                        width: '10px',
                                        marginLeft: '5%',
                                        backgroundColor: appConfig.theme.colors.neutrals[800],
                                        hover: {
                                            backgroundColor: appConfig.theme.colors.neutrals[999],
                                        }
                                    }}
                                />
                        </Box>
                        {mensagem.texto.startsWith(':sticker:') 
                            ? (
                                <Image 
                                    styleSheet={{
                                        maxWidth: '100px',
                                    }}
                                    src={mensagem.texto.replace(':sticker:', '')} />
                            )
                            : (
                                mensagem.texto
                            )
                        }
                    </Text>
                )
            })}
        </Box>
    )
}
