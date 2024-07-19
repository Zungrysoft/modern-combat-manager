import TextInput from "../components/TextInput";

const SettingsPage = ({ settings, setSettings }) => {
  return <div>
    <div className="horizontal-container">
      <p>Timer Length: </p>
      <TextInput
        value={settings.timerLengthSeconds}
        width={80}
        onChange={(val) => setSettings({...settings, timerLengthSeconds: val})}
      />
    </div>
  </div>
};

export default SettingsPage;
