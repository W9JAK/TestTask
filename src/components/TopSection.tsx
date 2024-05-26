import React, { useEffect, useRef, useState } from 'react';
import {styled, theme} from '../stitches.config';
import woodImage from '../assets/wood.png';
import Rope from './Rope';
import CloseButtonSvg from './CloseButton';

const TopSectionContainer = styled('div', {
    width: '100%',
    height: '150px',
    backgroundColor: '$background_blur',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    overflow: 'hidden',
});

const RopesContainer = styled('div', {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 1,
});

const HeaderContainer = styled('div', {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2,
});

const WoodShelf = styled('div', {
    backgroundImage: `url(${woodImage})`,
    backgroundSize: 'cover',
    height: '48px',
    borderTop: '2px solid #572a24',
    borderLeft: '2px solid #572a24',
    borderRight: '2px solid #572a24',
    borderBottom: 'none',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
});

const HeaderSign = styled('div', {
    position: 'absolute',
    top: '-58px',
    left: '5%',
    backgroundImage: `url(${woodImage})`,
    backgroundSize: 'cover',
    width: '180px',
    height: '60px',
    borderRadius: '20px 20px 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #572a24',
    borderBottom: 'none',
    zIndex: 3,
});

const HeaderText = styled('h1', {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '$text',
    '-webkit-text-stroke': `1px ${theme.colors.text_border_brown}`,
    textShadow: '0 2px 0 rgba(0, 0, 0, 0.5)',
    margin: 0,
});

const TopSection: React.FC = () => {
    const headerSignRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<SVGSVGElement>(null);
    const [leftRopePosition, setLeftRopePosition] = useState<string>('0px');
    const [rightRopePosition, setRightRopePosition] = useState<string>('0px');

    useEffect(() => {
        const updateRopePositions = () => {
            if (headerSignRef.current && closeButtonRef.current) {
                const headerSignRect = headerSignRef.current.getBoundingClientRect();
                const closeButtonRect = closeButtonRef.current.getBoundingClientRect();
                setLeftRopePosition(`${headerSignRect.left + headerSignRect.width / 4}px`);
                setRightRopePosition(`${closeButtonRect.left + closeButtonRect.width / 2 -6}px`);
            }
        };

        updateRopePositions();
        window.addEventListener('resize', updateRopePositions);

        return () => {
            window.removeEventListener('resize', updateRopePositions);
        };
    }, []);

    return (
        <TopSectionContainer>
            <RopesContainer>
                <Rope className="left-rope" style={{ position: 'absolute', left: leftRopePosition }} />
                <Rope className="right-rope" style={{ position: 'absolute', left: rightRopePosition }} />
            </RopesContainer>
            <HeaderContainer>
                <WoodShelf>
                    <CloseButtonSvg ref={closeButtonRef} style={{ position: 'absolute', right: '10%', top: '-24px' }} />
                </WoodShelf>
                <HeaderSign ref={headerSignRef}>
                    <HeaderText>Daily Quests</HeaderText>
                </HeaderSign>
            </HeaderContainer>
        </TopSectionContainer>
    );
};

export default TopSection;
