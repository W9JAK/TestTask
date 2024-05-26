import React from 'react';
import { styled, theme } from '../stitches.config';
import xpIcon from '../assets/XpIcon.png';
import ModalWrapper from './ModalWrapper';

const QuestDetailsContainer = styled('div', {
    background: 'linear-gradient(to bottom, rgba(255, 246, 240, 1), rgba(255, 214, 185, 1))',
    padding: '10px',
    minWidth: '80vw',
    borderRadius: '10px',
    textAlign: 'center',
    border: '1px solid rgba(156, 76, 48, 1)',
    boxShadow: '0 -6px 0 0 rgba(156, 76, 48, 1)',
});

const ModalText = styled('p', {
    fontSize: '24px',
    marginBottom: '20px',
    color: 'rgba(87, 42, 36, 1)',
    fontWeight: 'bold',
});

const RewardText = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'rgba(87, 42, 36, 1)',
});

const XpAmount = styled('span', {
    color: 'rgba(255, 255, 255, 1)',
    marginRight: '0px',
    marginLeft: '10px',
    '-webkit-text-stroke': `1px ${theme.colors.text_border_brown}`,
});

const XpIcon = styled('img', {
    width: '24px',
    height: '24px',
    marginLeft: '5px',
});

const ModalActions = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'calc(100% - 6vw)',
    gap: '3vw',
    opacity: 1,
    maxWidth: '600px',
    paddingBottom: '10px',
});

const ModalButton = styled('button', {
    flex: 1,
    fontSize: '32px',
    fontWeight: 'bold',
    borderRadius: '16px',
    padding: '10px 5px',
    textShadow: '0 2px 0 rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100%',
        backgroundColor: '$background_polygon',
        zIndex: 1,
        clipPath: 'polygon(50% 45%, 100% 25%, 100% 0, 0 0, 0 25%)',
        display: 'none',
    },
    '& span': {
        position: 'relative',
        zIndex: 2,
    },
    '&:hover': {
        transform: 'scale(1.05)',
    },
    '&:active': {
        transform: 'scale(0.95)',
    },
    variants: {
        active: {
            true: {
                background: '$gradient_gold',
                boxShadow: `
                    inset 0 -1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
                    0 8px 0 0 rgba(133, 104, 28, 1),
                    inset 0 1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
                    0px 8px 0px 1px rgba(11, 53, 35, 1),
                    0px 0px 0px 1px rgba(11, 53, 35, 1)
                `,
                border: '0px solid rgba(11, 53, 35, 1)',
                color: '$text',
                '-webkit-text-stroke': `1px ${theme.colors.text_border_button_go}`,
                '&::before': {
                    display: 'block',
                },
            },
            false: {
                background: '$gradient_gray',
                boxShadow: `
                    inset 0 -1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
                    0 8px 0 0 rgba(143, 143, 143, 1),
                    inset 0 1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
                    0px 8px 0px 1px rgba(107, 107, 107, 1),
                    0px 0px 0px 1px rgba(107, 107, 107, 1)
                `,
                border: '0px solid rgba(107, 107, 107, 1)',
                color: '$text',
                '-webkit-text-stroke': `1px rgba(107, 107, 107, 1)`,
                '&::before': {
                    display: 'block',
                },
            },
        },
    },
    '&:last-child': {
        background: '$gradient_green',
        boxShadow: `
            inset 0 -1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
            0 8px 0 0 rgba(28, 133, 82, 1),
            inset 0 1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
            0px 8px 0px 1px rgba(11, 53, 35, 1),
            0px 0px 0px 1px rgba(11, 53, 35, 1)
        `,
        border: '0px solid rgba(11, 53, 35, 1)',
        color: '$text',
        '-webkit-text-stroke': `1px ${theme.colors.text_border_button_go}`,
        '&::before': {
            display: 'block',
        },
    },
});

interface QuestDetailModalProps {
    quest: {
        name: string;
        xp: number;
        description: string;
        active: boolean;
    };
    onClose: () => void;
}

const QuestDetailModal: React.FC<QuestDetailModalProps> = ({ quest, onClose }) => {
    return (
        <ModalWrapper onClose={onClose}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <QuestDetailsContainer>
                    <ModalText>{quest.description}</ModalText>
                    <RewardText>
                        <span>Reward: </span>
                        <XpAmount>{quest.xp}k</XpAmount>
                        <XpIcon src={xpIcon} alt="XP" />
                    </RewardText>
                </QuestDetailsContainer>
            </div>
            <ModalActions>
                <ModalButton active={quest.active} onClick={onClose}>
                    <span>CONFIRM</span>
                </ModalButton>
                <ModalButton onClick={onClose}>
                    <span>GO</span>
                </ModalButton>
            </ModalActions>
        </ModalWrapper>
    );
};

export default QuestDetailModal;
