import { getCharacterData } from './files';

export function getConnectionLists(file, character) {
    // Breadth-First Search
    let distances = {[character]: 0}
    let prevs = {}
    let processQueue = [character]
    while (processQueue.length > 0) {
        const cur = processQueue.shift()
        for (const next in getCharacterData(file)[cur].connections) {
            if (distances[next] === undefined) {
                distances[next] = distances[cur] + 1
                processQueue.push(next)
                prevs[next] = cur
            }
        }
    }
    
    // Compile results
    let ret = []
    for (const char in getCharacterData(file)) {
        if (char !== character) {
            // Build list from prevs
            let retPush = []
            let cur = char
            while(true) {
                retPush.unshift(cur)
                cur = prevs[cur]
                if (!cur) {
                    break
                }
            }
            ret.push(retPush)
        }
    }

    // Sort results
    ret = ret.sort((a, b) => b.length - a.length)
    return ret
}

export function humanizeConnectionList(list) {
    let ret = []
    for (let i = 1; i < list.length; i ++) {
        ret.push(humanizeConnection(list[i-1], list[i]))
    }
    return ret
}

function humanizeConnection(character1, character2) {
    const charactersData = getCharacterData(file)
    const name1 = charactersData?.[character1]?.name || character1
    const relationship = charactersData?.[character1]?.connections?.[character2]?.relationship || "has some manner of relationship with"
    const name2 = charactersData?.[character2]?.name || character2
    return `${name1} ${relationship} ${name2}`
}