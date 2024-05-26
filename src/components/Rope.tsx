import React from 'react';

interface RopeProps {
    className?: string;
    style?: React.CSSProperties;
}

const Rope: React.FC<RopeProps> = ({ className, style }) => (
    <svg className={className} style={style} width="12" height="291" viewBox="0 0 12 291" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_600)">
            <mask id="path-1-outside-1_1_600" maskUnits="userSpaceOnUse" x="0" y="-9" width="12" height="60" fill="black">
                <rect fill="white" y="-9" width="12" height="60" />
                <path d="M1 -9H11V51H1V-9Z" />
            </mask>
            <path d="M1 -9H11V51H1V-9Z" fill="url(#paint0_linear_1_600)" />
            <path d="M-1 28.5C4 29 10 26.5 12 22" stroke="#572A24" strokeOpacity="0.3" strokeWidth="2" />
        </g>
        <path d="M10 -9V51H12V-9H10ZM2 51V-9H0V51H2Z" fill="#572A24" mask="url(#path-1-outside-1_1_600)" />
        <g clipPath="url(#clip1_1_600)">
            <mask id="path-4-outside-2_1_600" maskUnits="userSpaceOnUse" x="0" y="51" width="12" height="60" fill="black">
                <rect fill="white" y="51" width="12" height="60" />
                <path d="M1 51H11V111H1V51Z" />
            </mask>
            <path d="M1 51H11V111H1V51Z" fill="url(#paint1_linear_1_600)" />
            <path d="M0 61.5C4.5 62 8 62 12 61" stroke="#572A24" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M-1 89.5C3.5 95 7.5 96 12.5 96.5" stroke="#572A24" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M0 100C3.5 102.5 8 103.5 12 102.5" stroke="#572A24" strokeOpacity="0.3" strokeWidth="2" />
        </g>
        <path d="M10 51V111H12V51H10ZM2 111V51H0V111H2Z" fill="#572A24" mask="url(#path-4-outside-2_1_600)" />
        <g clipPath="url(#clip2_1_600)">
            <mask id="path-9-outside-3_1_600" maskUnits="userSpaceOnUse" x="0" y="111" width="12" height="60" fill="black">
                <rect fill="white" y="111" width="12" height="60" />
                <path d="M1 111H11V171H1V111Z" />
            </mask>
            <path d="M1 111H11V171H1V111Z" fill="url(#paint2_linear_1_600)" />
            <path d="M-1 148.5C4 149 10 146.5 12 142" stroke="#572A24" strokeOpacity="0.3" strokeWidth="2" />
        </g>
        <path d="M10 111V171H12V111H10ZM2 171V111H0V171H2Z" fill="#572A24" mask="url(#path-9-outside-3_1_600)" />
        <g clipPath="url(#clip3_1_600)">
            <mask id="path-12-outside-4_1_600" maskUnits="userSpaceOnUse" x="0" y="171" width="12" height="60" fill="black">
                <rect fill="white" y="171" width="12" height="60" />
                <path d="M1 171H11V231H1V171Z" />
            </mask>
            <path d="M1 171H11V231H1V171Z" fill="url(#paint3_linear_1_600)" />
            <path d="M0 181.5C4.5 182 8 182 12 181" stroke="#572A24" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M-1 209.5C3.5 215 7.5 216 12.5 216.5" stroke="#572A24" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M0 220C3.5 222.5 8 223.5 12 222.5" stroke="#572A24" strokeOpacity="0.3" strokeWidth="2" />
        </g>
        <path d="M10 171V231H12V171H10ZM2 231V171H0V231H2Z" fill="#572A24" mask="url(#path-12-outside-4_1_600)" />
        <g clipPath="url(#clip4_1_600)">
            <mask id="path-17-outside-5_1_600" maskUnits="userSpaceOnUse" x="0" y="231" width="12" height="60" fill="black">
                <rect fill="white" y="231" width="12" height="60" />
                <path d="M1 231H11V291H1V231Z" />
            </mask>
            <path d="M1 231H11V291H1V231Z" fill="url(#paint4_linear_1_600)" />
            <path d="M-1 268.5C4 269 10 266.5 12 262" stroke="#572A24" strokeOpacity="0.3" strokeWidth="2" />
        </g>
        <path d="M10 231V291H12V231H10ZM2 291V231H0V291H2Z" fill="#572A24" mask="url(#path-17-outside-5_1_600)" />
        <defs>
            <linearGradient id="paint0_linear_1_600" x1="11" y1="6.5" x2="1" y2="6.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CCA18E" />
                <stop offset="1" stopColor="#DABEB3" />
            </linearGradient>
            <linearGradient id="paint1_linear_1_600" x1="11" y1="66.5" x2="1" y2="66.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CCA18E" />
                <stop offset="1" stopColor="#DABEB3" />
            </linearGradient>
            <linearGradient id="paint2_linear_1_600" x1="11" y1="126.5" x2="1" y2="126.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CCA18E" />
                <stop offset="1" stopColor="#DABEB3" />
            </linearGradient>
            <linearGradient id="paint3_linear_1_600" x1="11" y1="186.5" x2="1" y2="186.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CCA18E" />
                <stop offset="1" stopColor="#DABEB3" />
            </linearGradient>
            <linearGradient id="paint4_linear_1_600" x1="11" y1="246.5" x2="1" y2="246.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CCA18E" />
                <stop offset="1" stopColor="#DABEB3" />
            </linearGradient>
            <clipPath id="clip0_1_600">
                <path d="M1 -9H11V51H1V-9Z" fill="white" />
            </clipPath>
            <clipPath id="clip1_1_600">
                <path d="M1 51H11V111H1V51Z" fill="white" />
            </clipPath>
            <clipPath id="clip2_1_600">
                <path d="M1 111H11V171H1V111Z" fill="white" />
            </clipPath>
            <clipPath id="clip3_1_600">
                <path d="M1 171H11V231H1V171Z" fill="white" />
            </clipPath>
            <clipPath id="clip4_1_600">
                <path d="M1 231H11V291H1V231Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default Rope;
