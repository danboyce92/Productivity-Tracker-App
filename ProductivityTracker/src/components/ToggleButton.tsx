
interface Toggle {
  onToggle: () => void;
}

const ToggleButton: React.FC<Toggle> = ({ onToggle }) => {
  return (
    <div id="toggle-button">
    <div className="px-4 m-auto">Add</div> 
    <div>
      <label className="switch">
        <input onClick={onToggle} type="checkbox"/>
        <span className="slider round"></span>
      </label>
    </div>
    <div className="px-4 m-auto">Edit</div>
    </div>

  )
}

export default ToggleButton;