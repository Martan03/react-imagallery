export interface OverviewProps {
    sel: number,
    total: number,
    playing: boolean,
    togglePlaying: () => void,
    toggleThumb: () => void,
    onFScreen: () => void,
    onClose: () => void,
}
