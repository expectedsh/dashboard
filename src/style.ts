import emotionStyled, { CreateStyled } from "@emotion/styled"

type Theme = {
  color: {
    dark: string
    light: string
    greyDark: string
    grey: string
    greyLight: string
    blueDark: string
    blue: string
    greenDark: string
    green: string
    redDark: string
    red: string
  },
  text: {
    normal: string
    muted: string
  }
}

export const theme: Theme = {
  color: {
    dark: "#001529",
    light: "#fff",
    greyDark: "#95aac9",
    grey: "#e3ebf6",
    greyLight: "#f9fbfd",
    blueDark: "#1683e8",
    blue: "#1890ff",
    greenDark: "#0cb863",
    green: "#15cd72",
    redDark: "#9a0007",
    red: "#d32f2f",
  },
  text: {
    normal: "#212529",
    muted: "#6c757d",
  },
}

export const styled: CreateStyled<Theme> = emotionStyled
