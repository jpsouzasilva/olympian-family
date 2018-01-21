import Banners from './banners';

export default class Divinity {

    constructor(public name: string, public id: Number, public gender?: string,
        public father?: string, public mother?: string, public spouse?: string,
        public lover?: string, public killedBy?: string, public royal?: string,
        public kingdomOf?: string, public argonaut?: string, public sideInTheIliad?: string,
        public bio?: string, public sourceDisagreements?: string, public source?: string,
        public target?: string) {
    }

    static createDivinity(jsonPayload: Object): Divinity {
        const newDivinity = new Divinity(jsonPayload['name'], parseInt(jsonPayload['id'], 10));
        for (const key in jsonPayload) {
            if (jsonPayload.hasOwnProperty(key)) {
                const keyName = Divinity.handleKeyName(key);
                if (<keyof Divinity>keyName) {
                    newDivinity[keyName] = jsonPayload[key];
                }
            }
        }
        return newDivinity;
    }

    private static handleKeyName(keyName: string): string {
        const i = keyName.indexOf('?');
        if (i > -1) {
            return keyName.substring(0, i);
        } else {
            return keyName;
        }
    }

    static acquireImagePath(divinityName: string) {
        return Banners.getBanners()[divinityName];
    }

    static acquireImagePathBig(divinityName: string) {
        const imagePath = this.acquireImagePath(divinityName);
        if (imagePath.hasOwnProperty('big')) {
            return imagePath.big;
        } else {
            if (imagePath.hasOwnProperty('small')) {
                return imagePath.small;
            }
        }
    }

    static acquireImagePathSmall(divinityName: string) {
        const imagePath = this.acquireImagePath(divinityName);
        if (imagePath.hasOwnProperty('small')) {
            return imagePath.small;
        } else {
            if (imagePath.hasOwnProperty('big')) {
                return imagePath.big;
            }
        }
    }

}
