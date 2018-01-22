export class Banners {

    private static _defaultBig = 'assets/default.jpg';
    private static _defaultSmall = 'assets/default.jpg';
    public static get defaultBig(): string {
        return this._defaultBig;
    }
    public static get defaultSmall(): string {
        return this._defaultSmall;
    }

    private static banners: IBanners;
    public static get list(): IBanners {
        if (this.banners === undefined) {
            this.banners = {
                'persephone': {
                    'big': 'https://pre00.deviantart.net/7a8e/th/pre/i/2011/326/e/e/persephone_by_jycyn-d4gzq7n.jpg',
                    'small': 'assets/persephone.jpg'
                },
                'gaia': {
                    'big': 'https://www.harisingh.com/Images/hsearthmother.jpg',
                    'small': 'assets/gaia.jpg'
                }
            };
        }
        return this.banners;
    }
}

export interface IBanners {
    [banner: string]: IBannerEntry;
}

export interface IBannerEntry {
    big: string;
    small: string;
}
