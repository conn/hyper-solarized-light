const base03 = "#002b36"
const base02 = "#073642"
const base01 = "#586e75"
const base00 = "#657b83"
const base0 = "#839496"
const base1 = "#93a1a1"
const base2 = "#eee8d5"
const base3 = "#fdf6e3"
const yellow = "#b58900"
const orange = "#cb4b16"
const red = "#dc322f"
const magenta = "#d33682"
const violet = "#6c71c4"
const blue = "#268bd2"
const cyan = "#2aa198"
const green = "#859900"

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    cursorColor: "rgba(147, 161, 161, 0.8)", // base1
    cursorAccentColor: base3,
    selectionColor: "rgba(238, 232, 213, 0.5)", // base2

    foregroundColor: base00,
    backgroundColor: base3,

    borderColor: base1,

    colors: {
      black: base03,
      red: red,
      green: green,
      yellow: yellow,
      blue: blue,
      magenta: magenta,
      cyan: cyan,
      white: base2,

      lightBlack: base01,
      lightRed: orange,
      lightGreen: base01,
      lightYellow: base00,
      lightBlue: base0,
      lightMagenta: violet,
      lightCyan: base1,
      lightWhite: base3,
    },

    termCSS: config.termCSS || "",

    css: `
      .tabs_nav {
        background-color: ${base2};
      }

      .tabs_borderShim {
        border-color: transparent !important;
      }

      .tabs_title {
        color: ${base00};
      }

      .tab_tab {
        color: ${base01};
        background-color: ${base2};

        border-color: transparent !important;
      }

      .tab_active {
        color: ${base00};
        background-color: ${base3};
      }

      ${config.css || ""}
    `
  })
}
