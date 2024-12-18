function LogoSVG( {size, stroke, color}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={size ?? "100%"}
            height="auto"
        >
            {/* Crow */}
            <rect x="48" y="26" width={stroke??"4"} height="10" fill={color??"black"} rx="2" ry="2" />
            <rect
                x="70"
                y="24"
                width={stroke??"4"}
                height="10"
                fill={color??"black"}
                transform="rotate(45 60 20)"
                rx="2" ry="2"
            />
            <rect
                x="26"
                y="24"
                width={stroke??"4"}
                height="10"
                fill={color??"black"}
                transform="rotate(-45 40 20)"
                rx="2" ry="2"
            />

            {/* Logo Circle */}
            <circle cx="50" cy="50" r="15" stroke={color??"black"} strokeWidth={stroke??"4"} fill="none" />
            <circle className="center" cx="50" cy="50" r={stroke??"4"} fill={color??"black"} />

            {/* Tail */}
            <rect x="48" y="64" width={stroke??"4"} height="20" fill={color??"black"}
                rx="2" ry="2"
            />
            <rect x="40.5" y="75" width="20" height={stroke??"4"} fill={color??"black"}
                rx="2" ry="2"
            />
        </svg>
    );
}

export default LogoSVG;
