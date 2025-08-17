import * as React from 'react';

export interface LoaderGridProps extends React.SVGProps<SVGSVGElement> {
  /** Tamaño (width/height) en px o cualquier unidad CSS */
  size?: number | string;
}

/** Loader animado basado en una cuadrícula de 9 celdas. */
export const LoaderGrid: React.FC<LoaderGridProps> = ({ size = 36, className, style, ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      role="img"
      aria-label="Cargando"
      className={className}
      style={style}
      {...rest}
    >
      <style>{`
        .box5532 { fill: currentColor; transform-origin: 50% 50%; }C
        @keyframes box5532-1 { 9.0909% { transform: translate(-12px,0);} 18.1818% { transform: translate(0px,0);} 27.2727% { transform: translate(0px,0);} 36.3636% { transform: translate(12px,0);} 45.4545% { transform: translate(12px,12px);} 54.5455% { transform: translate(12px,12px);} 63.6364% { transform: translate(12px,12px);} 72.7273% { transform: translate(12px,0px);} 81.8182% { transform: translate(0px,0px);} 90.9091% { transform: translate(-12px,0px);} 100% { transform: translate(0px,0px);} }
        .box5532:nth-child(1){ animation: box5532-1 4s infinite; }
        @keyframes box5532-2 { 9.0909% { transform: translate(0,0);} 18.1818% { transform: translate(12px,0);} 27.2727% { transform: translate(0px,0);} 36.3636% { transform: translate(12px,0);} 45.4545% { transform: translate(12px,12px);} 54.5455% { transform: translate(12px,12px);} 63.6364% { transform: translate(12px,12px);} 72.7273% { transform: translate(12px,12px);} 81.8182% { transform: translate(0px,12px);} 90.9091% { transform: translate(0px,12px);} 100% { transform: translate(0px,0px);} }
        .box5532:nth-child(2){ animation: box5532-2 4s infinite; }
        @keyframes box5532-3 { 9.0909% { transform: translate(-12px,0);} 18.1818% { transform: translate(-12px,0);} 27.2727% { transform: translate(0px,0);} 36.3636% { transform: translate(-12px,0);} 45.4545% { transform: translate(-12px,0);} 54.5455% { transform: translate(-12px,0);} 63.6364% { transform: translate(-12px,0);} 72.7273% { transform: translate(-12px,0);} 81.8182% { transform: translate(-12px,-12px);} 90.9091% { transform: translate(0px,-12px);} 100% { transform: translate(0px,0px);} }
        .box5532:nth-child(3){ animation: box5532-3 4s infinite; }
        @keyframes box5532-4 { 9.0909% { transform: translate(-12px,0);} 18.1818% { transform: translate(-12px,0);} 27.2727% { transform: translate(-12px,-12px);} 36.3636% { transform: translate(0px,-12px);} 45.4545% { transform: translate(0px,0px);} 54.5455% { transform: translate(0px,-12px);} 63.6364% { transform: translate(0px,-12px);} 72.7273% { transform: translate(0px,-12px);} 81.8182% { transform: translate(-12px,-12px);} 90.9091% { transform: translate(-12px,0px);} 100% { transform: translate(0px,0px);} }
        .box5532:nth-child(4){ animation: box5532-4 4s infinite; }
        @keyframes box5532-5 { 9.0909% { transform: translate(0,0);} 18.1818% { transform: translate(0,0);} 27.2727% { transform: translate(0,0);} 36.3636% { transform: translate(12px,0);} 45.4545% { transform: translate(12px,0);} 54.5455% { transform: translate(12px,0);} 63.6364% { transform: translate(12px,0);} 72.7273% { transform: translate(12px,0);} 81.8182% { transform: translate(12px,-12px);} 90.9091% { transform: translate(0px,-12px);} 100% { transform: translate(0px,0px);} }
        .box5532:nth-child(5){ animation: box5532-5 4s infinite; }
        @keyframes box5532-6 { 9.0909% { transform: translate(0,0);} 18.1818% { transform: translate(-12px,0);} 27.2727% { transform: translate(-12px,0);} 36.3636% { transform: translate(0px,0);} 45.4545% { transform: translate(0px,0);} 54.5455% { transform: translate(0px,0);} 63.6364% { transform: translate(0px,0);} 72.7273% { transform: translate(0px,12px);} 81.8182% { transform: translate(-12px,12px);} 90.9091% { transform: translate(-12px,0px);} 100% { transform: translate(0px,0px);} }
        .box5532:nth-child(6){ animation: box5532-6 4s infinite; }
        @keyframes box5532-7 { 9.0909% { transform: translate(12px,0);} 18.1818% { transform: translate(12px,0);} 27.2727% { transform: translate(12px,0);} 36.3636% { transform: translate(0px,0);} 45.4545% { transform: translate(0px,-12px);} 54.5455% { transform: translate(12px,-12px);} 63.6364% { transform: translate(0px,-12px);} 72.7273% { transform: translate(0px,-12px);} 81.8182% { transform: translate(0px,0px);} 90.9091% { transform: translate(12px,0px);} 100% { transform: translate(0px,0px);} }
        .box5532:nth-child(7){ animation: box5532-7 4s infinite; }
        @keyframes box5532-8 { 9.0909% { transform: translate(0,0);} 18.1818% { transform: translate(-12px,0);} 27.2727% { transform: translate(-12px,-12px);} 36.3636% { transform: translate(0px,-12px);} 45.4545% { transform: translate(0px,-12px);} 54.5455% { transform: translate(0px,-12px);} 63.6364% { transform: translate(0px,-12px);} 72.7273% { transform: translate(0px,-12px);} 81.8182% { transform: translate(12px,-12px);} 90.9091% { transform: translate(12px,0px);} 100% { transform: translate(0px,0px);} }
        .box5532:nth-child(8){ animation: box5532-8 4s infinite; }
        @keyframes box5532-9 { 9.0909% { transform: translate(-12px,0);} 18.1818% { transform: translate(-12px,0);} 27.2727% { transform: translate(0px,0);} 36.3636% { transform: translate(-12px,0);} 45.4545% { transform: translate(0px,0);} 54.5455% { transform: translate(0px,0);} 63.6364% { transform: translate(-12px,0);} 72.7273% { transform: translate(-12px,0);} 81.8182% { transform: translate(-24px,0);} 90.9091% { transform: translate(-12px,0);} 100% { transform: translate(0px,0);} }
        .box5532:nth-child(9){ animation: box5532-9 4s infinite; }
      `}</style>
      <g>
        <rect className="box5532" x="13" y="1" rx="1" width="10" height="10" />
        <rect className="box5532" x="13" y="1" rx="1" width="10" height="10" />
        <rect className="box5532" x="25" y="25" rx="1" width="10" height="10" />
        <rect className="box5532" x="13" y="13" rx="1" width="10" height="10" />
        <rect className="box5532" x="13" y="13" rx="1" width="10" height="10" />
        <rect className="box5532" x="25" y="13" rx="1" width="10" height="10" />
        <rect className="box5532" x="1" y="25" rx="1" width="10" height="10" />
        <rect className="box5532" x="13" y="25" rx="1" width="10" height="10" />
        <rect className="box5532" x="25" y="25" rx="1" width="10" height="10" />
      </g>
    </svg>
  );
};

export default React.memo(LoaderGrid);