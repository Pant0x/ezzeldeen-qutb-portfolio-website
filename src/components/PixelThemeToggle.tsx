import { useTheme } from "./ThemeProvider"
import { Moon, Sun } from "lucide-react"

export function PixelThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        // Fallback for system theme (will show based on system preference)
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 
          <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />
    }
  }

  const getDisplayTheme = () => {
    if (theme === "system") {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    }
    return theme
  }

  return (
    <button
      onClick={cycleTheme}
      className="pixel-button flex items-center gap-2 text-xs uppercase"
      title={`Current theme: ${getDisplayTheme()}`}
    >
      {getIcon()}
      {getDisplayTheme()}
    </button>
  )
}