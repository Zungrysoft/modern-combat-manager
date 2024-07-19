import { useEffect } from "react";
import InitiativeRow from "../components/InitiativeRow";
import RoundedButton from "../components/RoundedButton";
import { d } from "../helpers/random";

const TIMER_MAX = 10_000
const TIMER_INTERVAL = 30

const CombatPage = ({ initiative, characters, timer, setInitiative, setTimer }) => {
  // Clock timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev.active) {
          return { timeMs: Math.max(prev.timeMs-TIMER_INTERVAL, 0), active: true }
        }
        return prev
      })
    }, TIMER_INTERVAL);
  
    return () => clearInterval(interval);
  }, [timer, setTimer])

  function clockDisplay(timer) {
    return (timer / 1000).toFixed(2);
  }

  // Key press detection
  const handleKeyPress = (event) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      resetInitiativeEntry(0);
      setTimer({ timeMs: TIMER_MAX, active: false })
    }
    else if (event.code === 'Space') {
      event.preventDefault();
      setTimer({ ...timer, active: !timer.active })
    }
  };

  // Key press detection setup
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [initiative, characters, setInitiative, timer, setTimer]);

  function sortInitiative(a, b) {
    const aInitScore = parseInt(a.character.initiativeScore) || 0;
    const bInitScore = parseInt(b.character.initiativeScore) || 0;
    const aInitiative = a.initiativeRoll + parseInt(aInitScore);
    const bInitiative = b.initiativeRoll + parseInt(bInitScore);

    if (aInitiative !== bInitiative) {
      return bInitiative - aInitiative;
    }

    if (aInitScore !== bInitScore) {
      return bInitScore - aInitScore;
    }

    return b.initiativeTiebreaker - a.initiativeTiebreaker;
  }

  function startCombat() {
    // Generate initiative order
    const newInitiative = characters.map(e => ({
      character: e,
      initiativeRoll: d(20),
      initiativeTiebreaker: Math.random(),
      status: "alive",
    })).sort(sortInitiative);

    setInitiative(newInitiative);
    setTimer({ timeMs: TIMER_MAX, active: false })
  }

  function setInitiativeEntry(index, val) {
    if (initiative.length === 0) return [];

    setInitiative([
      ...initiative.slice(0, index),
      val,
      ...initiative.slice(index+1),
    ])
  }

  function resetInitiativeEntry(index) {
    if (initiative.length === 0) return [];

    setInitiative([
      ...initiative.slice(0, index),
      ...initiative.slice(index+1),
      initiative[index],
    ])
  }

  return (
    <div>
      <div className="upper-pane">
        <h3>Space: Pause Timer  -  Enter: Next Player</h3>
        <RoundedButton text="Start Combat!" onClick={startCombat}/>
        <h1 style={{ align: "right" }}>{clockDisplay(timer.timeMs)}</h1>
      </div>
      <div className="vertical-container">
        {initiative.map((e, i) => <InitiativeRow
          data={e}
          setInitiativeEntry={val => setInitiativeEntry(i, val)}
          resetInitiativeEntry={() => resetInitiativeEntry(i)}
        />)}
      </div>
    </div>
  );
};

export default CombatPage;
