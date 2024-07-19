import CharacterRow from "../components/CharacterRow";
import PlusButton from "../components/PlusButton";

const SetupPage = ({ characters, setCharacters }) => {

  function createCharacter() {
    return {
      name: "",
      isEnemy: true,
      initiativeScore: "",
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

  function deleteCharacter(index) {
    setCharacters([
      ...characters.slice(0, index),
      ...characters.slice(index+1),
    ])
  }

  function incrementNumberInString(input) {
    return input.replace(/(\d+)/, (match) => parseInt(match) + 1);
}

  function duplicateCharacter(index) {
    const clone = structuredClone(characters[index])
    clone.name = incrementNumberInString(clone.name)

    setCharacters([
      ...characters.slice(0, index),
      characters[index],
      clone,
      ...characters.slice(index+1),
    ])
  }

  return <div className="vertical-container">
    {characters.map((e, i) => <CharacterRow
      data={e}
      setCharacter={val => setCharacter(i, val)}
      deleteCharacter={() => deleteCharacter(i)}
      duplicateCharacter={() => duplicateCharacter(i)}
    />)}
    <PlusButton onClick={addCharacter}/>
  </div>
};

export default SetupPage;
