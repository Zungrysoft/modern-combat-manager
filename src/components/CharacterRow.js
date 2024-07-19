import IconButton from "./IconButton";
import MinusButton from "./MinusButton";
import SquareButton from "./SquareButton";
import TextInput from "./TextInput";

const CharacterRow = ({ data, setCharacter, deleteCharacter, duplicateCharacter }) => {
  return <div className="horizontal-container">
    <TextInput
      value={data.name}
      placeholder="Enter Character Name"
      width={400}
      onChange={(val) => setCharacter({...data, name: val})}
    />
    <SquareButton
      text={data.isEnemy ? "Enemy" : "Player"}
      color={data.isEnemy ? "#661010" : "#1a2566"}
      width={100}
      onClick={() => setCharacter({...data, isEnemy: !data.isEnemy})}
    />
    <TextInput
      value={data.initiativeScore}
      placeholder="Initiative"
      width={120}
      onChange={(val) => setCharacter({...data, initiativeScore: val})}
    />
    <IconButton
      onClick={duplicateCharacter}
      width={40}
      icon="duplicate"
      tooltip="Copy"
    />
    <MinusButton
      onClick={deleteCharacter}
      width={40}
      tooltip="Delete"
    />
  </div>
};

export default CharacterRow;
