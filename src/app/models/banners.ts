export default class Banners {
    private static banners: Object;

    public static getBanners() {
        if (this.banners === undefined) {
            this.banners = {
                'persephone': {
                    'big': 'https://pre00.deviantart.net/7a8e/th/pre/i/2011/326/e/e/persephone_by_jycyn-d4gzq7n.jpg',
                    'small': 'assets/persephone.jpg'
                }
            };
        }
        return this.banners;
    }
}
