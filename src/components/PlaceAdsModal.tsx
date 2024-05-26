import React from 'react';
import { styled, theme } from '../stitches.config';
import ModalWrapper from './ModalWrapper';

const QuestDetailsContainer = styled('div', {
    background: 'linear-gradient(to bottom, rgba(255, 246, 240, 1), rgba(255, 214, 185, 1))',
    padding: '10px',
    minWidth: '80vw',
    borderRadius: '10px',
    textAlign: 'center',
    border: '1px solid rgba(156, 76, 48, 1)',
    boxShadow: '0 -6px 0 0 rgba(156, 76, 48, 1)',
    marginBottom: '5vw',
});

const ModalText = styled('p', {
    fontSize: '24px',
    marginBottom: '10px',
    color: '$text_color_brown',
    fontWeight: 'bold',
});

const DisclaimerText = styled('p', {
    fontSize: '16px',
    color: 'rgba(87, 42, 36, 0.5)',
    margin: '10px 0',
    fontWeight: 'bold',
});

const PriceText = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '$text_color_brown',
});

const PriceAmount = styled('span', {
    color: '$text',
    marginRight: '0px',
    marginLeft: '10px',
    '-webkit-text-stroke': `1px ${theme.colors.text_border_brown}`,
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
    padding: '10px 20px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    textShadow: '0 2px 0 rgba(0, 0, 0, 0.5)',
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
    '&:last-child': {
        border: '0px solid rgba(11, 53, 35, 1)',
        color: '$text',
        '-webkit-text-stroke': `1px ${theme.colors.text_border_button_go}`,
        '&::before': {
            display: 'block',
        },
        background: '$gradient_green',
        boxShadow: `
            inset 0 -1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
            0 8px 0 0 rgba(28, 133, 82, 1),
            inset 0 1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
            0px 8px 0px 1px rgba(11, 53, 35, 1),
            0px 0px 0px 1px rgba(11, 53, 35, 1)
        `,
    },
});

interface PlaceAdsModalProps {
    onClose: () => void;
}

const PlaceAdsModal: React.FC<PlaceAdsModalProps> = ({ onClose }) => {
    return (
        <ModalWrapper onClose={onClose}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <QuestDetailsContainer>
                    <ModalText>Fill out the form and place your ad in quests</ModalText>
                    <DisclaimerText>*Price may vary depending on the company</DisclaimerText>
                    <PriceText>
                        <span>Price: </span>
                        <PriceAmount>99$</PriceAmount>
                    </PriceText>
                </QuestDetailsContainer>
            </div>
            <ModalActions>
                <ModalButton onClick={onClose}>
                    <span>PLACE AD</span>
                </ModalButton>
            </ModalActions>
        </ModalWrapper>
    );
};

export default PlaceAdsModal;
