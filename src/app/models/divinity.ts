import { Banners, IBannerEntry, IBanners } from './banners';
import { StringUtils as SU } from '../utils/utils';

export default class Divinity {

    constructor(public name: string, public id: number, public gender?: string,
        public father?: string, public mother?: string, public spouse?: string,
        public lover?: string, public killedBy?: string, public royal?: string,
        public kingdomOf?: string, public argonaut?: string, public sideInTheIliad?: string,
        public bio?: string, public sourceDisagreements?: string, public source?: string,
        public target?: string) {
    }

    get description(): string {
        return this.bio.length !== 0 ? this.bio : 'Not informed';
    }

    static createDivinity(jsonPayload: Object): Divinity {
        const newDivinity = new Divinity(jsonPayload['name'], parseInt(jsonPayload['id'], 10));
        for (const key in jsonPayload) {
            if (jsonPayload.hasOwnProperty(key)) {
                if (<keyof Divinity>key) {
                    newDivinity[key] = jsonPayload[key];
                }
            }
        }
        return newDivinity;
    }

    static acquireImagePath(divinityName: string): IBannerEntry {
        const bannerEntry = Banners.list[SU.lowerCaseName(divinityName, '_')];
        return !!bannerEntry ? bannerEntry : {big: Banners.defaultBig, small: Banners.defaultSmall};
    }

    static acquireImagePathBig(divinityName: string): string {
        const imagePath = this.acquireImagePath(divinityName);
        if (imagePath.hasOwnProperty('big')) {
            return imagePath.big;
        } else {
            if (imagePath.hasOwnProperty('small')) {
                return imagePath.small;
            }
        }
    }

    static acquireImagePathSmall(divinityName: string): string {
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
