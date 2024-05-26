import React from 'react';
import { styled, theme } from '../stitches.config';
import XpIcon from '../assets/XpIcon.png';

const HeaderContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px',
});

const ButtonGroup = styled('div', {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '200px',
    height: '40px',
    backgroundColor: '$background_button_group',
    borderRadius: '10px',
    overflow: 'hidden',
    border: `1px solid ${theme.colors.border_button_group}`,
    zIndex: 1,
});

const ToggleButtonBackground = styled('div', {
    position: 'absolute',
    top: '0px',
    height: '100%',
    width: '100%',
    borderRadius: '8px',
    backgroundColor: '$background_button_group',
    borderTop: `4px solid ${theme.colors.border_button_group}`,
    zIndex: 1,
});

const ToggleButton = styled('button', {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
    textShadow: '0 2px 0 rgba(0, 0, 0, 0.5)',
    color: '$text_toggle_button',
    '-webkit-text-stroke': `1px ${theme.colors.text_border_brown}`,
    transition: 'color 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 3,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100%',
        backgroundColor: '$background_polygon',
        zIndex: 2,
        clipPath: 'polygon(50% 60%, 100% 25%, 100% 0, 0 0, 0 25%)',
        display: 'none',
    },
    '& span': {
        position: 'relative',
        zIndex: 4,
    },
    '&.active': {
        color: '$text',
        borderTop: 'none',
        '&::before': {
            display: 'block',
        },
    },
    '&.all': {
        flex: '0 0 60px',
        borderRadius: '8px',
        padding: '0 10px',
    },
    '&.completed': {
        flex: 1,
        borderRadius: '8px',
    },
});

const Slider = styled('div', {
    position: 'absolute',
    top: '0px',
    height: '100%',
    borderRadius: '8px',
    transition: 'left 0.3s ease, width 0.3s ease',
    backgroundImage: `${theme.colors.background_toggle_button_active}`,
    boxShadow: `
        0 4px 6px rgba(0, 0, 0, 0.1),
        inset 0 -3px 0 rgba(156, 76, 48, 0.3)
    `,
    zIndex: 2,
});

const XpDisplay = styled('div', {
    display: 'flex',
    alignItems: 'center',
    padding: '1px 5px',
    borderRadius: '0 20px 20px 0',
    border: `1px solid ${theme.colors.border_background_all_xp}`,
    position: 'relative',
    marginLeft: '10px',
    backgroundImage: '$background_xp_all',
});

const XpIconImage = styled('img', {
    width: '28px',
    height: '28px',
    position: 'absolute',
    left: '-14px',
    top: '50%',
    transform: 'translateY(-50%)',
});

const XpText = styled('span', {
    marginLeft: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '$text',
});

interface QuestHeaderProps {
    totalXp: string;
    filter: 'all' | 'completed';
    setFilter: (filter: 'all' | 'completed') => void;
    style?: React.CSSProperties;
}

const QuestHeader: React.FC<QuestHeaderProps> = ({ totalXp, filter, setFilter, style }) => {
    const sliderStyles = {
        width: filter === 'all' ? '60px' : '140px',
        left: filter === 'all' ? '0px' : '60px',
    };

    return (
        <HeaderContainer style={style}>
            <ButtonGroup>
                <ToggleButtonBackground />
                <Slider style={sliderStyles} />
                <ToggleButton className={`${filter === 'all' ? 'active all' : 'all'}`} onClick={() => setFilter('all')}>
                    <span>All</span>
                </ToggleButton>
                <ToggleButton className={filter === 'completed' ? 'active completed' : 'completed'} onClick={() => setFilter('completed')}>
                    <span>Completed</span>
                </ToggleButton>
            </ButtonGroup>
            <XpDisplay>
                <XpIconImage src={XpIcon} alt="XP Icon" />
                <XpText>{totalXp}</XpText>
            </XpDisplay>
        </HeaderContainer>
    );
};

export default QuestHeader;
