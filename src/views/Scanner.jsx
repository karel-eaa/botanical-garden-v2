import { useShallow } from "zustand/shallow";
import { useProgressStore } from "../store/progressStore";
import { Scanner as ScannerComponent } from '@yudiel/react-qr-scanner'

export default function Scanner() {

    const { goToHint, recordScan } = useProgressStore(useShallow(s => ({
        goToHint: s.goToHint,
        recordScan: s.recordScan
    })))

    return <>
        <button onClick={() => goToHint()} className="self-start m-[15px]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
            >
                <path
                    d="M8.50011 21.2499L6.99774 22.7523L5.49536 21.2499L6.99774 19.7476L8.50011 21.2499ZM44.6251 38.2499C44.6251 38.8135 44.4012 39.354 44.0027 39.7525C43.6042 40.1511 43.0637 40.3749 42.5001 40.3749C41.9365 40.3749 41.396 40.1511 40.9975 39.7525C40.599 39.354 40.3751 38.8135 40.3751 38.2499H44.6251ZM17.6227 33.3773L6.99774 22.7523L10.0025 19.7476L20.6275 30.3726L17.6227 33.3773ZM6.99774 19.7476L17.6227 9.12256L20.6275 12.1273L10.0025 22.7523L6.99774 19.7476ZM8.50011 19.1249H29.7501V23.3749H8.50011V19.1249ZM44.6251 33.9999V38.2499H40.3751V33.9999H44.6251ZM29.7501 19.1249C33.6952 19.1249 37.4787 20.6921 40.2683 23.4817C43.0579 26.2713 44.6251 30.0548 44.6251 33.9999H40.3751C40.3751 31.182 39.2557 28.4795 37.2631 26.4869C35.2705 24.4943 32.568 23.3749 29.7501 23.3749V19.1249Z"
                    fill="black"
                />
            </svg>
        </button>
        <ScannerComponent
            components={{ finder: false }}
            styles={{
                container: {
                    width: '100vw',
                    height: '100dvh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                },
                video: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                },
            }}
            onScan={(result) => { recordScan(result[0].rawValue) }}
            onError={(error) => console.log(error?.message)}
        >
            {(() => {
                const size = 220, len = 36, thick = 3, r = 6;
                const arms = (isTop, isLeft) => (
                    <div style={{
                        position: 'absolute',
                        width: len, height: len,
                        ...(isTop ? { top: 0 } : { bottom: 0 }),
                        ...(isLeft ? { left: 0 } : { right: 0 }),
                    }}>
                        <div style={{
                            position: 'absolute', width: len, height: thick,
                            backgroundColor: 'white',
                            ...(isTop ? { top: 0 } : { bottom: 0 }),
                            ...(isLeft ? { left: 0 } : { right: 0 }),
                            borderRadius: `${isTop && isLeft ? r : 0}px ${isTop && !isLeft ? r : 0}px ${!isTop && !isLeft ? r : 0}px ${!isTop && isLeft ? r : 0}px`,
                        }} />
                        <div style={{
                            position: 'absolute', width: thick, height: len,
                            backgroundColor: 'white',
                            ...(isTop ? { top: 0 } : { bottom: 0 }),
                            ...(isLeft ? { left: 0 } : { right: 0 }),
                            borderRadius: `${isTop && isLeft ? r : 0}px ${isTop && !isLeft ? r : 0}px ${!isTop && !isLeft ? r : 0}px ${!isTop && isLeft ? r : 0}px`,
                        }} />
                    </div>
                );
                return (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ position: 'relative', width: size, height: size }}>
                            {arms(true, true)}
                            {arms(true, false)}
                            {arms(false, true)}
                            {arms(false, false)}
                        </div>
                    </div>
                );
            })()}
        </ScannerComponent>
    </>
}