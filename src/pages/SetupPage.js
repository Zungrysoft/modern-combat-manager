import CharacterRow from "../components/CharacterRow";
import AddButton from "../components/AddButton";

const SetupPage = ({ characters, setCharacters }) => {

  function createCharacter() {
    return {
      name: "",
      isEnemy: true,
      initiativeScore: 0,
      isInjured: false,
    }
  }

  function addCharacter() {
    setCharacters([...characters, createCharacter()])
  }

  function setCharacter(index, val) {
    setCharacters([
      ...characters.slice(0, index),
      val,
      ...characters.slice(index+1),
    ])
  }

  return <div className="vertical-container">
    {characters.map((e, i) => <CharacterRow data={e} setCharacter={val => setCharacter(i, val)}/>)}
    <AddButton onClick={addCharacter}/>
  </div>
};

export default SetupPage;
