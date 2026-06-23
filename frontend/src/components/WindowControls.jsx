import useWindowStore from '#store/window';

function WindowControls({ target }) {

    const { closeWindow, minimizeWindow, toggleMaximizeWindow } = useWindowStore();

    return (
        <div id='window-controls'>
            <button type="button" aria-label="Close window" className='close' onClick={() => closeWindow(target)} />
            <button type="button" aria-label="Minimize window" className='minimize' onClick={() => minimizeWindow(target)} />
            <button type="button" aria-label="Maximize window" className='maximize' onClick={() => toggleMaximizeWindow(target)} />
        </div>
    )
}

export default WindowControls
