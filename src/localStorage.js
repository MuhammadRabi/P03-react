export const addListToLocalStorage = (list) => {
  localStorage.setItem("list", JSON.stringify(list))
}

export const getListFromLocalStorage = () => {
  const result = localStorage.getItem("list")
  const list = result ? JSON.parse(result) : []
  return list
}

// darkmode
export const addDarkModeToLocalStorage = (darkMode) => {
  localStorage.setItem("darkMode", JSON.stringify(darkMode))
}

export const getDarkModeFromLocalStorage = () => {
  const result = localStorage.getItem("darkMode")
  const darkMode = result ? JSON.parse(result) : false
  return darkMode
}
