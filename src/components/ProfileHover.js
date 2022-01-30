import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../config.json';

export function ProfileHover(props) {
    const { mensagem } = props;
    const followers = `https://api.github.com/users/${mensagem.remetente}/followers`;
    const numFollowers = followers.length;
    const repos = `https://api.github.com/users/${mensagem.remetente}/repos`;
    const numRepos = repos.length;

    return (
        props.open && mensagem.id === props.id ?
        <Box
            styleSheet={{
                position: 'relative',
            }}
        >
            <Box
                styleSheet={{
                    display: 'grid',
                    gridTemplateColumns: '130px auto',
                    gridTemplateRows: '25% 25% 25% 25%',
                    borderRadius: '5px',
                    position: 'absolute',
                    backgroundColor: appConfig.theme.colors.neutrals[200],
                    width: '250px',
                    height: 'auto',
                    padding: '5px',
                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
                    zIndex: '100',
                    overflow: 'hidden'
                }}
                onMouseOut={() => props.setOpen(true)}
            >
                <Text
                    styleSheet={{
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        gridColumnStart: '1',
                        gridColumnEnd: '3',
                        gridRowStart: '1',
                        gridRowEnd: '2'
                    }}
                >
                    {mensagem.remetente}
                </Text>
                <Box
                    tag="ul"
                    styleSheet={{
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        paddingTop: '16px',
                        overflow: 'hidden',
                        gridColumnStart: '1',
                        gridColumnEnd: '3',
                        gridRowStart: '2',
                        gridRowEnd: '5',
                        display: 'grid',
                        gridTemplateColumns: '30% auto',
                        gridTemplateRows: '50% auto',
                    }}
                >
                    <Image
                        tag="li"
                        styleSheet={{
                            display: 'inline',
                            width: '60px',
                            borderRadius: '50%',
                            marginLeft: '25px',
                            gridColumnStart: '1',
                            gridColumnEnd: '2',
                            gridRowStart: '1',
                            gridRowEnd: '1',
                            focus: {
                                backgroundColor: appConfig.theme.colors.neutrals[600],
                            },
                        }}
                        src={`https://github.com/${mensagem.remetente}.png`}
                    />
                    <Text
                        tag="li"
                        styleSheet={{
                            gridColumnStart: '2',
                            gridColumnEnd: '3',
                            gridRowStart: '1',
                            gridRowEnd: '2',
                            padding: '10px',
                            fontSize: '14px',
                            marginRight: '25px',
                            focus: {
                                backgroundColor: appConfig.theme.colors.neutrals[600],
                            },
                        }}
                    >
                        Seguidores: {numFollowers}
                    </Text>
                    <Text
                        tag="li"
                        styleSheet={{
                            gridColumnStart: '2',
                            gridColumnEnd: '3',
                            gridRowStart: '2',
                            gridRowEnd: '3',
                            padding: '10px',
                            fontSize: '14px',
                            marginRight: '25px',
                            focus: {
                                backgroundColor: appConfig.theme.colors.neutrals[600],
                            },
                        }}
                    >
                        Repos: {numRepos}
                    </Text>
                </Box>
            </Box>
        </Box>
        : <></>
    )
}