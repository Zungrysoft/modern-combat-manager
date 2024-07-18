import SquareButton from "./SquareButton";
import TextInput from "./TextInput";

const CharacterRow = ({ data, setCharacter }) => {
  return <div className="horizontal-container">
    <TextInput value={data.name} placeholder="Enter Character Name" onChange={(val) => setCharacter({...data, name: val})}/>
    <SquareButton text={data.isNpc ? "NPC" : "Player"} color={data.isNpc ? "#661010" : "#1a2566"} onClick={() => setCharacter({...data, isNpc: !data.isNpc})}/>
  </div>
};

export default CharacterRow;
