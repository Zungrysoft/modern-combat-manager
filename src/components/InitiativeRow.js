import IconButton from "./IconButton";
import SquareButton from "./SquareButton";
import TextDisplay from "./TextDisplay";

const InitiativeRow = ({ data, setInitiativeEntry, resetInitiativeEntry }) => {
  function getStatusText(status) {
    if (status === "alive") return "Alive";
    if (status === "wounded") return "Wounded";
    if (status === "unconscious") return "Unconscious";
    return "Dead";
  }

  function getStatusColor(status) {
    if (status === "alive") return "#1aab40";
    if (status === "wounded") return "#b52626";
    if (status === "unconscious") return "#302a45";
    return "#1c1926";
  }

  function cycleStatus(status) {
    if (status === "alive") return "wounded";
    if (status === "wounded") return "unconscious";
    if (status === "unconscious") return "dead";
    return "alive";
  }

  return <div className="horizontal-container">
    <TextDisplay
      text={data.character.name}
      width={500}
      backgroundColor={data.character.isEnemy ? "#661010" : "#1a2566"}
    />
    <SquareButton
      text={getStatusText(data.status)}
      color={getStatusColor(data.status)}
      width={130}
      onClick={() => setInitiativeEntry({...data, status: cycleStatus(data.status)})}
    />
    <IconButton
      onClick={resetInitiativeEntry}
      width={35}
      icon="curve-down-arrow"
      tooltip="Move to bottom of initiative list"
    />
  </div>
};

export default InitiativeRow;
