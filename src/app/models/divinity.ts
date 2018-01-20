export default class Divinity {

    constructor(name: String, id: Number, gender?: String, father?: String,
        mother?: String, spouse?: String, lover?: String, killedBy?: String,
        royal?: String, kingdomOf?: String, argonaut?: String,
        sideInTheIliad?: String, bio?: String, sourceDisagreements?: String,
        source?: String, target?: String) {
    }

    static createDivinity(jsonPayload: Object): Divinity {
        const newDivinity = new Divinity(jsonPayload['name'], parseInt(jsonPayload['id'], 10));
        for (const key in jsonPayload) {
            if (jsonPayload.hasOwnProperty(key)) {
                if (<keyof Divinity>this.handleKeyName(key)) {
                    newDivinity[key] = jsonPayload[key];
                }
            }
        }
        return newDivinity;
    }

    private static handleKeyName(keyName: String): String {
        const i = keyName.indexOf('?');
        if (i > -1) {
            return keyName.substring(0, i);
        } else {
            return keyName;
        }
    }

}
