import charactersBreakingBad from '../data/characters_breaking_bad.json';
import charactersSnatch from '../data/characters_snatch.json';

export function getCharacterData(file) {
    if (file === "breaking_bad") return charactersBreakingBad
    if (file === "snatch") return charactersSnatch

    return {}
}