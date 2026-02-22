import { definePreset } from "@primeuix/themes";
import Aura from '@primeuix/themes/aura';
import { palette } from '@primeuix/themes';

export const BE_CONTROL_THEME = definePreset(Aura, {
    semantic: {
        primary: palette('#5bd8de')
    }
});