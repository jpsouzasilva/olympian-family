export class StringUtils {
    public static handleOperator(keyName: string): string {
        const i = keyName.indexOf('?');
        if (i > -1) {
            return keyName.substring(0, i);
        } else {
            return keyName;
        }
    }

    public static lowerCaseName(keyName: string, join: string = ''): string {
        const splitName = keyName.toLowerCase().split(' ');
        splitName[0] = splitName[0].toLowerCase();
        if (splitName.length === 1) {
            return splitName[0];
        } else {
            return splitName.join(join);
        }
    }

    public static pascalCaseName(keyName: string, join: string = ''): string {
        const splitName = this.handleOperator(keyName).split(' ');
        splitName[0] = splitName[0].toLowerCase();
        if (splitName.length === 1) {
            return splitName[0];
        } else {
            for (let i = 1; i < splitName.length; i++) {
                const curr = splitName[i];
                if (curr.length === 0) { continue; }
                splitName[i] = curr[0][0].toUpperCase() + curr.substring(1);
            }
        }
        return splitName.join(join);
    }

    public static transformName(keyName: string): string {
        return this.pascalCaseName(this.handleOperator(keyName));
    }
}
