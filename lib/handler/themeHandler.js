import chTheme, { shelfPeriod as chShelfPeriod } from '../../assets/js/theme/CustomizedHoliday/chTheme';
import nyrTheme, { shelfPeriod as nyrShelfPeriod } from '../../assets/js/theme/NewYearRed/nyrTheme';
import nygTheme, { shelfPeriod as nygShelfPeriod } from '../../assets/js/theme/NewYearGold/nygTheme';
import dbTheme, { shelfPeriod as dbShelfPeriod } from '../../assets/js/theme/DragonBoat/dbTheme';
import mfTheme, { shelfPeriod as mfShelfPeriod } from '../../assets/js/theme/MoonFestival/mfTheme';
import xmasTheme, { shelfPeriod as xmsShelfPeriod } from '../../assets/js/theme/Christmas/xmasTheme';
import goldTheme from '../../assets/js/theme/Normal/goldTheme';

const themeHandler = () => {

    const today = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        return {
            today, year, month, date
        }
    };

    const checkWhetherOnShelf = (shelfPeriod) => {
        const { year, month, date } = today();
        if(year > shelfPeriod.onShelf.year)
            return true;
        else if(month > shelfPeriod.onShelf.month)
            return true;
        else if(month === shelfPeriod.onShelf.month && date > shelfPeriod.onShelf.date)
            return true;
        else return false;
    };

    const checkWhetherOffShelf = (shelfPeriod) => {
        const { year, month, date } = today();
        if(year > shelfPeriod.offShelf.year)
            return true;
        else if(month > shelfPeriod.offShelf.month)
            return true;
        else if(month === shelfPeriod.offShelf.month && date > shelfPeriod.offShelf.date)
            return true;
        else return false;
    };

    const checkShelfPeriod = (shelfPeriod) => {
        return checkWhetherOnShelf(shelfPeriod) && !checkWhetherOffShelf(shelfPeriod);
    };

    return {
        getTheme() {
            if(checkShelfPeriod(chShelfPeriod)) {
                // customizeHoliday
                return chTheme;
            } else if(checkShelfPeriod(nyrShelfPeriod)) {
                // NewYearRed
                return nyrTheme;
            } else if(checkShelfPeriod(nygShelfPeriod)) {
                // NewYearGold
                return nygTheme;
            } else if(checkShelfPeriod(dbShelfPeriod)) {
                // DragonBoat
                return dbTheme;
            } else if(checkShelfPeriod(mfShelfPeriod)) {
                // MoonFestival
                return mfTheme;
            } else if(checkShelfPeriod(xmsShelfPeriod)) {
                // Christmas
                return xmasTheme;
            } else {
                // Normal
                return goldTheme;
            }
        }
    };
}

export default themeHandler();