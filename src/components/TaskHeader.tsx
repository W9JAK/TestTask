import React, { useState } from 'react';
import { styled, theme } from '../stitches.config';
import PlaceAdsModal from './PlaceAdsModal';

const TitleSection = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0px',
    backgroundColor: '$background',
    marginBottom: '10px',
    marginTop: '10px',
});

const TitleText = styled('span', {
    fontSize: '16px',
    padding: '0px 10px',
    fontWeight: 'bold',
    color: '$text',
    '-webkit-text-stroke': `1px ${theme.colors.text_border_brown}`,
    textShadow: '0 2px 0 rgba(0, 0, 0, 0.5)',
});

const AdButton = styled('button', {
    padding: '5px 5px',
    fontSize: '16px',
    border: '0px solid #3e5a43',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '$text',
    backgroundImage: 'linear-gradient(to bottom, rgba(93, 219, 34, 1), rgba(41, 235, 130, 1))',
    boxShadow: `
        inset 0 -1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
        0 4px 0 0 rgba(28, 133, 82, 1),
        inset 0 1px 0.5px 0.5px rgba(255, 255, 255, 0.5),
        0px 4px 0px 1px rgba(11, 53, 35, 1),
        0px 0px 0px 1px rgba(11, 53, 35, 1)
    `,
    transition: 'transform 0.2s',
    position: 'relative',
    overflow: 'hidden',
    '-webkit-text-stroke': '1px rgba(11, 53, 35, 1)',
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
        clipPath: 'polygon(50% 60%, 100% 25%, 100% 0, 0 0, 0 25%)',
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
});

const TaskHeader: React.FC = () => {
    const [showPlaceAdsModal, setShowPlaceAdsModal] = useState(false);

    const handleOpenPlaceAdsModal = () => {
        setShowPlaceAdsModal(true);
    };

    const handleClosePlaceAdsModal = () => {
        setShowPlaceAdsModal(false);
    };

    return (
        <TitleSection>
            <TitleText>Add your tasks to quests</TitleText>
            <AdButton onClick={handleOpenPlaceAdsModal}><span>PLACE MY ADS</span></AdButton>
            {showPlaceAdsModal && <PlaceAdsModal onClose={handleClosePlaceAdsModal} />}
        </TitleSection>
    );
};

export default TaskHeader;
