import { useDarkMode } from "../public/hooks/useDarkMode"
export const Toggle = () => {
    const [isDark, setIsDark] = useDarkMode()

    return (
        <label className='fixed bottom-14 right-1/4'>
            <input
                type="checkbox"
                checked={isDark}
                onChange={e => setIsDark(e.target.checked)}
            />
        </label>
    )
}