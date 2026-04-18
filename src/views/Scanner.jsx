import { useShallow } from "zustand/shallow";
import { useProgressStore } from "../store/progressStore";
import { Scanner as ScannerComponent } from '@yudiel/react-qr-scanner'

export default function Scanner() {

    const { goToHint, recordScan } = useProgressStore(useShallow(s => ({
        goToHint: s.goToHint,
        recordScan: s.recordScan
    })))

    return <>
        <button onClick={() => goToHint()}>Back To Hint</button>
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