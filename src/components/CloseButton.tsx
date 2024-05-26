import React, { forwardRef } from 'react';

const CloseButtonSvg = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
    <svg
        ref={ref}
        width="36"
        height="40"
        viewBox="0 0 36 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_1_776)">
            <path d="M0 18H36V22C36 31.9411 27.9411 40 18 40C8.05888 40 0 31.9411 0 22V18Z" fill="#702125" />
            <g filter="url(#filter0_i_1_776)">
                <circle cx="18" cy="18" r="18" fill="url(#paint0_linear_1_776)" />
            </g>
            <circle cx="18" cy="18" r="17" stroke="white" strokeWidth="2" />
            <g filter="url(#filter1_d_1_776)">
                <path d="M9.75047 12.1074C9.09964 12.7583 9.09957 13.8136 9.75047 14.4645L13.286 18L9.75047 21.5355C9.09964 22.1864 9.09957 23.2417 9.75047 23.8926L12.1075 26.2496C12.7584 26.9005 13.8137 26.9004 14.4645 26.2496L18 22.714L21.5356 26.2496C22.1865 26.9005 23.2418 26.9004 23.8926 26.2496L26.2496 23.8926C26.9005 23.2417 26.9005 22.1864 26.2496 21.5355L22.7141 18L26.2496 14.4645C26.9005 13.8136 26.9005 12.7583 26.2496 12.1074L23.8926 9.75042C23.2417 9.09952 22.1864 9.09959 21.5356 9.75042L18 13.286L14.4645 9.75042C13.8136 9.09952 12.7583 9.09959 12.1075 9.75042L9.75047 12.1074Z" fill="white" />
            </g>
        </g>
        <defs>
            <filter id="filter0_i_1_776" x="0" y="0" width="36" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_776" />
            </filter>
            <filter id="filter1_d_1_776" x="6.26231" y="6.26227" width="23.4755" height="23.4755" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.12549 0 0 0 0 0.145098 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_776" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_776" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_1_776" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF5C83" />
                <stop offset="1" stopColor="#C7000C" />
            </linearGradient>
            <clipPath id="clip0_1_776">
                <rect width="36" height="40" fill="white" />
            </clipPath>
        </defs>
    </svg>
));

export default CloseButtonSvg;
