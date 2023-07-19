
interface Toggle {
  onToggle: () => void;
  left: string;
  right: string;
  id: string;
}

const ToggleButton: React.FC<Toggle> = ({ onToggle, left, right, id }) => {
  return (
    <div id="toggle-button">
    <div className="px-4 m-auto">{left}</div> 
    <div>
    <label className="switch">
        <input id={id} onClick={onToggle} type="checkbox"/>
        <span className="slider round"></span>
      </label>
    </div>
    <div className="px-4 m-auto">{right}</div>
    </div>

  )
}

export default ToggleButton;