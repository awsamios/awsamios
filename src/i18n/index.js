import LocalizedStrings from 'react-localization';
import { en } from '../res/i18n/en';
import { fr } from '../res/i18n/fr';
import { getValue, setValue } from '../utils/Storage';

const supportLanguages = {
    fr: { fr },
    en: { en },
};

class i18nImpl {
    resourceString = null;
    setImplementation(language, resourceString) {
        let localizedStrings = new LocalizedStrings(resourceString);
        localizedStrings.setLanguage(language);
        this.resourceString = localizedStrings;
    }
}

const i18n = new i18nImpl();

const getNavigatorLanguages = (language => {
    switch (language) {
        case 'fr-FR':
        case 'fr':
            return 'fr';
        case 'en-US':
        case 'en':
            return 'en';
        default:
            return 'en';
    }
})(window.navigator.language);

export const getLanguage = () => {
    if (!getValue()) {
        setValue(getNavigatorLanguages);
        return getNavigatorLanguages;
    } else {
        return getValue();
    }
};

const messages = supportLanguages[getLanguage()];
i18n.setImplementation('en', messages);
export const strings = i18n.resourceString;
